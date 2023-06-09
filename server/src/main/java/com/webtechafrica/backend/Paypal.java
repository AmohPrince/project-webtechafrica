package com.webtechafrica.backend;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.Collections;
import java.util.Map;

@Component
public class Paypal {
    private Environment environment;
    private RestTemplate restTemplate;
    String baseURL;

    @Autowired
    public Paypal(Environment environment, RestTemplate restTemplate) {
        this.environment = environment;
        this.restTemplate = restTemplate;
    }

    @PostConstruct
    private void initialize() {
        baseURL = environment.getProperty("paypalAPIUrl");
    }


    public PayPalAccessToken getAccessToken() {
        String paypalApiUrl = baseURL + "/v1/oauth2/token";
        String clientId = environment.getProperty("PAYPAL_CLIENT_ID");
        String secret = environment.getProperty("PAYPAL_SECRET");

        String requestBody = "grant_type=client_credentials";
        String authString = clientId + ":" + secret;
        String encodedAuthString = Base64.getEncoder().encodeToString(authString.getBytes());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("Authorization", "Basic " + encodedAuthString);

        MultiValueMap<String, String> bodyMap = new LinkedMultiValueMap<>();
        bodyMap.add("grant_type", "client_credentials");

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(bodyMap, headers);

        ResponseEntity<Map<String, Object>> response = restTemplate.exchange(paypalApiUrl, HttpMethod.POST, requestEntity, new ParameterizedTypeReference<>() {
        });

        if (response.getStatusCode().is2xxSuccessful()) {
            var responseBody = response.getBody();
            System.out.println(responseBody);
            return new PayPalAccessToken((String) responseBody.get("access_token"), (Integer) responseBody.get("expires_in"));
        } else {
            System.err.println("Error retrieving access token: " + response.getStatusCode());
            throw new RuntimeException("Error retrieving access token");
        }
    }


//    public ClientToken getClientToken() {
//        String paypalApiUrl = baseURL + "/v1/identity/generate-token";
//
//        String accessToken = getAccessToken();
//        System.out.println(accessToken);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        headers.setBearerAuth(accessToken);
//
//        HttpEntity<String> entity = new HttpEntity<>(null, headers);
//
//        ResponseEntity<ClientToken> response = restTemplate.exchange(
//                paypalApiUrl,
//                HttpMethod.POST,
//                entity,
//                ClientToken.class
//        );
//        System.out.println(response.getBody());
//        return response.getBody();
//    }
}

