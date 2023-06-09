package com.webtechafrica.backend;

public class CreateOrderRequestBody {
    private PurchaseUnit[] purchase_units;

    public CreateOrderRequestBody(PurchaseUnit[] purchase_units, String intent) {
        this.purchase_units = purchase_units;
        this.intent = intent;
    }


    /**
     * An array of purchase units. Each purchase unit establishes a contract between a payer and the payee.
     * Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.
     * <p>
     * Required: [1 ... 10] items
     */
    public PurchaseUnit[] getPurchaseUnits() {
        return purchase_units;
    }

    public void setPurchaseUnits(PurchaseUnit[] purchaseUnits) {
        this.purchase_units = purchaseUnits;
    }

    private String intent;

    /**
     * The intent to either capture payment immediately or authorize a payment for an order after order creation.
     * <p>
     * Enum: CAPTURE, AUTHORIZE
     * - CAPTURE: The merchant intends to capture payment immediately after the customer makes a payment.
     * - AUTHORIZE: The merchant intends to authorize a payment and place funds on hold after the customer makes a payment.
     * Authorized payments are best captured within three days of authorization but are available to capture for up to 29 days.
     * After the three-day honor period, the original authorized payment expires and you must re-authorize the payment.
     * You must make a separate request to capture payments on demand.
     * This intent is not supported when you have more than one purchase_unit within your order.
     * <p>
     * Required: true
     */
    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }
}
