package com.webtechafrica.backend;

public class ClientToken {
    String client_token;
    Integer expires_in;

    public ClientToken(String client_token, Integer expires_in) {
        this.client_token = client_token;
        this.expires_in = expires_in;
    }

    public String getClient_token() {
        return client_token;
    }
}
