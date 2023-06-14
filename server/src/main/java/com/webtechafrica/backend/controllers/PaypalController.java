package com.webtechafrica.backend.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.webtechafrica.backend.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://webtechafrica.com"})
public class PaypalController {
    private final RestTemplate restTemplate;
    private final Paypal paypal;
    private final Environment environment;
    Gson gson = new Gson();

    @Autowired
    public PaypalController(Paypal paypal, Environment environment, RestTemplate restTemplate) {
        this.paypal = paypal;
        this.environment = environment;
        this.restTemplate = restTemplate;
    }

    @PostMapping("/create-order")
    public String createOrder(@RequestBody Price price) {
        String url = environment.getProperty("paypalAPIUrl") + "/v2/checkout/orders";

        // headers
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.set("Authorization", "Bearer " + paypal.getPayPalAccessToken().getAccessToken());
        httpHeaders.set("Prefer", "return=representation");

        // creating the order
        CreateOrderAmount createOrderAmount = new CreateOrderAmount("USD", Integer.toString(price.getPrice()));
        PurchaseUnit purchase_unit = new PurchaseUnit(createOrderAmount);
        PurchaseUnit[] purchase_units = new PurchaseUnit[]{purchase_unit};
        CreateOrderRequestBody createOrderRequestBody = new CreateOrderRequestBody(purchase_units, "CAPTURE");

        // http entity
        HttpEntity<String> requestEntity = new HttpEntity<>(gson.toJson(createOrderRequestBody), httpHeaders);

        //response entity
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            var responseBody = response.getBody();
            JsonObject responseAsJSON = gson.fromJson(responseBody, JsonObject.class);
            return responseAsJSON.get("id").getAsString();
        } else if (response.getStatusCode() == HttpStatus.UNAUTHORIZED) {
            System.out.println("Access token has expired. Refreshing access token...");
            paypal.setPayPalAccessToken(paypal.getAccessToken());
            return createOrder(price);
        } else {
            System.out.println("API call failed with status code: " + response.getStatusCode());
            return null;
        }
    }
}
