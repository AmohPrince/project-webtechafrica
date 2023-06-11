package com.webtechafrica.backend;

public class PurchaseUnit {
    private String reference_id;
    private String description;
    private String invoice_id;
    private String soft_descriptor;
    private CreateOrderItem[] items;
    private String custom_id;
    private Payee payee;


    public PurchaseUnit(CreateOrderAmount amount) {
        this.amount = amount;
    }

    public PurchaseUnit(CreateOrderAmount amount, Payee payee) {
        this.amount = amount;
        this.payee = payee;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, CreateOrderItem[] items) {
        this.amount = amount;
        this.description = description;
        this.items = items;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, String custom_id) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
        this.custom_id = custom_id;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, String custom_id, String invoice_id) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
        this.custom_id = custom_id;
        this.invoice_id = invoice_id;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, String custom_id, String invoice_id, String soft_descriptor) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
        this.custom_id = custom_id;
        this.invoice_id = invoice_id;
        this.soft_descriptor = soft_descriptor;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, String custom_id, String invoice_id, String soft_descriptor, CreateOrderItem[] items) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
        this.custom_id = custom_id;
        this.invoice_id = invoice_id;
        this.soft_descriptor = soft_descriptor;
        this.items = items;
    }

    public PurchaseUnit(CreateOrderAmount amount, String reference_id, String description, String custom_id, String invoice_id, String soft_descriptor, CreateOrderItem[] items, Payee payee) {
        this.amount = amount;
        this.reference_id = reference_id;
        this.description = description;
        this.custom_id = custom_id;
        this.invoice_id = invoice_id;
        this.soft_descriptor = soft_descriptor;
        this.items = items;
        this.payee = payee;
    }

    /**
     * The API caller-provided external ID for the purchase unit.
     * Required for multiple purchase units when you must update the order through PATCH.
     * If you omit this value and the order contains only one purchase unit, PayPal sets this value to default.
     * <p>
     * Required: false
     */
    public String getReferenceId() {
        return reference_id;
    }

    public void setReferenceId(String reference_id) {
        this.reference_id = reference_id;
    }

    /**
     * The purchase description. The maximum length of the character is dependent on the type of characters used.
     * The character length is specified assuming a US ASCII character. Depending on the type of character
     * (e.g. accented character, Japanese characters), the number of characters that can be specified as input might not equal the permissible max length.
     * <p>
     * Required: false
     */
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    /**
     * The API caller-provided external ID.
     * Used to reconcile client transactions with PayPal transactions.
     * Appears in transaction and settlement reports but is not visible to the payer.
     * <p>
     * Required: false
     */
    public String getCustomId() {
        return custom_id;
    }

    public void setCustomId(String custom_id) {
        this.custom_id = custom_id;
    }

    /**
     * The API caller-provided external invoice number for this order.
     * Appears in both the payer's transaction history and the emails that the payer receives.
     * <p>
     * Required: false
     */
    public String getInvoiceId() {
        return invoice_id;
    }

    public void setInvoiceId(String invoice_id) {
        this.invoice_id = invoice_id;
    }


    /**
     * The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer's card statement.
     * If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in the following format on the payer's card statement:
     * PAYPAL_prefix + (space) + merchant_descriptor + (space) + soft_descriptor
     * Note: The merchant descriptor is the descriptor of the merchant’s payment receiving preferences which can be seen by logging into the merchant account.
     * The PAYPAL prefix uses 8 characters. Only the first 22 characters will be displayed in the statement.
     * <p>
     * Required: false
     */
    public String getSoftDescriptor() {
        return soft_descriptor;
    }

    public void setSoftDescriptor(String soft_descriptor) {
        this.soft_descriptor = soft_descriptor;
    }

    /**
     * An array of items that the customer purchases from the merchant.
     * <p>
     * Required: false
     */
    public CreateOrderItem[] getItems() {
        return items;
    }

    public void setItems(CreateOrderItem[] items) {
        this.items = items;
    }

    private CreateOrderAmount amount;

    /**
     * The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.
     * If you specify amount.breakdown, the amount equals item_total plus tax_total plus shipping plus handling plus insurance minus shipping_discount minus discount.
     * The amount must be a positive number. The amount.value field supports up to 7 digits preceding the decimal. For a list of supported currencies, decimal precision, and maximum charge amount, see the PayPal REST APIs Currency Codes.
     * <p>
     * Required: true
     */
    public CreateOrderAmount getAmount() {
        return amount;
    }

    public void setAmount(CreateOrderAmount amount) {
        this.amount = amount;
    }

    /**
     * The merchant who receives payment for this transaction.
     * <p>
     * Required: false
     */
    public Payee getPayee() {
        return payee;
    }

    public void setPayee(Payee payee) {
        this.payee = payee;
    }
}