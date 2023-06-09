package com.webtechafrica.backend;

public class PayPalAccessToken {
    String accessToken;
    Integer expiresIn;

    public PayPalAccessToken(String accessToken, Integer expiresIn) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }

    public String getAccessToken() {
        return accessToken;
    }
}
