package com.webtechafrica.backend;

public class Payee {
    private String email_address;

    public Payee(String email_address, String merchant_id) {
        this.email_address = email_address;
        this.merchant_id = merchant_id;
    }

    /**
     * The email address of the merchant.
     * <p>
     * Required: false
     */
    public String getEmailAddress() {
        return email_address;
    }

    public void setEmailAddress(String email_address) {
        this.email_address = email_address;
    }

    private String merchant_id;

    /**
     * The encrypted PayPal account ID of the merchant.
     * <p>
     * Required: false
     */
    public String getMerchantId() {
        return merchant_id;
    }

    public void setMerchantId(String merchant_id) {
        this.merchant_id = merchant_id;
    }
}
