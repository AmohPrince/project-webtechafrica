package com.webtechafrica.backend;

public class CreateOrderBreakdown {
    private CreateOrderAmount itemTotal;

    /**
     * The total item amount.
     * <p>
     * Required: true
     */
    public CreateOrderAmount getItemTotal() {
        return itemTotal;
    }

    public void setItemTotal(CreateOrderAmount itemTotal) {
        this.itemTotal = itemTotal;
    }

    private CreateOrderAmount shipping;

    /**
     * The shipping amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getShipping() {
        return shipping;
    }

    public void setShipping(CreateOrderAmount shipping) {
        this.shipping = shipping;
    }

    private CreateOrderAmount handling;

    /**
     * The handling fee amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getHandling() {
        return handling;
    }

    public void setHandling(CreateOrderAmount handling) {
        this.handling = handling;
    }

    private CreateOrderAmount taxTotal;

    /**
     * The total tax amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getTaxTotal() {
        return taxTotal;
    }

    public void setTaxTotal(CreateOrderAmount taxTotal) {
        this.taxTotal = taxTotal;
    }

    private CreateOrderAmount insurance;

    /**
     * The insurance fee amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getInsurance() {
        return insurance;
    }

    public void setInsurance(CreateOrderAmount insurance) {
        this.insurance = insurance;
    }

    private CreateOrderAmount shippingDiscount;

    /**
     * The shipping discount amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getShippingDiscount() {
        return shippingDiscount;
    }

    public void setShippingDiscount(CreateOrderAmount shippingDiscount) {
        this.shippingDiscount = shippingDiscount;
    }

    private CreateOrderAmount discount;

    /**
     * The discount amount.
     * <p>
     * Required: false
     */
    public CreateOrderAmount getDiscount() {
        return discount;
    }

    public void setDiscount(CreateOrderAmount discount) {
        this.discount = discount;
    }
}
