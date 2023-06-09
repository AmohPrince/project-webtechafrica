package com.webtechafrica.backend.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.webtechafrica.backend.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PaypalController {
    private final RestTemplate restTemplate;
    private final Paypal paypal;
    private final Environment environment;
    private final PayPalAccessToken payPalAccessToken;
    Gson gson = new Gson();

    @Autowired
    public PaypalController(Paypal paypal, Environment environment, RestTemplate restTemplate) {
        this.paypal = paypal;
        this.environment = environment;
        this.restTemplate = restTemplate;
        this.payPalAccessToken = paypal.getAccessToken();
    }

    @GetMapping("/create-order")
    public String createOrder() {
        String url = environment.getProperty("paypalAPIUrl") + "/v2/checkout/orders";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.set("Authorization", "Bearer " + payPalAccessToken.getAccessToken());
        httpHeaders.set("Prefer", "return=representation");

        CreateOrderAmount createOrderAmount = new CreateOrderAmount("USD", "100");
        PurchaseUnit purchase_unit = new PurchaseUnit(createOrderAmount);
        PurchaseUnit[] purchase_units = new PurchaseUnit[]{purchase_unit};
        CreateOrderRequestBody createOrderRequestBody = new CreateOrderRequestBody(purchase_units, "CAPTURE");

        HttpEntity<String> requestEntity = new HttpEntity<>(gson.toJson(createOrderRequestBody), httpHeaders);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            var responseBody = response.getBody();
            JsonObject jsonObject = gson.fromJson(responseBody, JsonObject.class);
            System.out.println(jsonObject.get("id").getAsString());
            return jsonObject.get("id").getAsString();
        } else {
            System.out.println("API call failed with status code: " + response.getStatusCode());
            return null;
        }
    }
}
