package com.webtechafrica.backend;

public class CreateOrderAmount {
    private String currency_code;

    /**
     * The three-character ISO-4217 currency code that identifies the currency.
     * <p>
     * Required: true
     */
    public String getCurrencyCode() {
        return currency_code;
    }

    public void setCurrencyCode(String currency_code) {
        this.currency_code = currency_code;
    }

    private String value;

    /**
     * The value, which might be:
     * - An integer for currencies like JPY that are not typically fractional.
     * - A decimal fraction for currencies like TND that are subdivided into thousandths.
     * For the required number of decimal places for a currency code, see Currency Codes.
     * <p>
     * Required: true
     */
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    private CreateOrderBreakdown breakdown;

    /**
     * The breakdown of the total order amount.
     * <p>
     * Required: false
     */
    public CreateOrderBreakdown getBreakdown() {
        return breakdown;
    }

    public void setBreakdown(CreateOrderBreakdown breakdown) {
        this.breakdown = breakdown;
    }

    public CreateOrderAmount(String currency_code, String value) {
        this.currency_code = currency_code;
        this.value = value;
    }

    public CreateOrderAmount(String currency_code, String value, CreateOrderBreakdown createOrderBreakdown) {
        this.currency_code = currency_code;
        this.value = value;
        this.breakdown = createOrderBreakdown;
    }
}
