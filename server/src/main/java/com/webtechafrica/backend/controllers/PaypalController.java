package com.webtechafrica.backend.controllers;

import com.webtechafrica.backend.Paypal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class PaypalController {
    private final RestTemplate restTemplate;
    private final Paypal paypal;
    private final Environment environment;

    @Autowired
    public PaypalController(Paypal paypal, Environment environment, RestTemplate restTemplate) {
        this.paypal = paypal;
        this.environment = environment;
        this.restTemplate = restTemplate;
    }

    @GetMapping("/create-order")
    public String createOrder() {
        String url = environment.getProperty("paypalAPIUrl") + "/v2/checkout/orders";
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.set("Authorization", "Bearer " + paypal.getClientToken().getClient_token());

        String requestBody = "{ \"intent\": \"CAPTURE\", \"purchase_units\": [ { \"reference_id\": \"d9f80740-38f0-11e8-b467-0ed5f89f718b\", \"amount\": { \"currency_code\": \"USD\", \"value\": \"100.00\" } } ], \"payment_source\": { \"paypal\": { \"experience_context\": { \"payment_method_preference\": \"IMMEDIATE_PAYMENT_REQUIRED\", \"payment_method_selected\": \"PAYPAL\", \"brand_name\": \"EXAMPLE INC\", \"locale\": \"en-US\", \"landing_page\": \"LOGIN\", \"shipping_preference\": \"SET_PROVIDED_ADDRESS\", \"user_action\": \"PAY_NOW\", \"return_url\": \"https://example.com/returnUrl\", \"cancel_url\": \"https://example.com/cancelUrl\" } } } }";

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, httpHeaders);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        System.out.println(response);

        if (response.getStatusCode().is2xxSuccessful()) {
            String responseBody = response.getBody();
            System.out.println("API response" + responseBody);
            return responseBody;
        } else {
            System.out.println("API call failed with status code: " + response.getStatusCode());
            return null;
        }

    }
}
