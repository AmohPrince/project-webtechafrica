package com.webtechafrica.backend;

public class CreateOrderItem {
    private String name;

    /**
     * The item name or title.
     * <p>
     * Required: true
     */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String quantity;

    /**
     * The item quantity. Must be a whole number.
     * <p>
     * Required: true
     */
    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    private String description;

    /**
     * The detailed item description.
     * <p>
     * Required: false
     */
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private String sku;

    /**
     * The stock keeping unit (SKU) for the item.
     * <p>
     * Required: false
     */
    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    private String category;

    /**
     * The item category type.
     * <p>
     * Enum: DIGITAL_GOODS, PHYSICAL_GOODS, DONATION
     * - DIGITAL_GOODS: Goods that are stored, delivered, and used in their electronic format. This value is not currently supported for API callers that leverage the PayPal for Commerce Platform product.
     * - PHYSICAL_GOODS: A tangible item that can be shipped with proof of delivery.
     * - DONATION: A contribution or gift for which no good or service is exchanged, usually to a not-for-profit organization.
     * <p>
     * Required: false
     */
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    private CreateOrderAmount unit_amount;

    /**
     * The item price or rate per unit. If you specify unit_amount, purchase_units[].amount.breakdown.item_total is required.
     * Must equal unit_amount * quantity for all items. unit_amount.value cannot be a negative number.
     * <p>
     * Required: true
     */
    public CreateOrderAmount getUnitAmount() {
        return unit_amount;
    }

    public void setUnitAmount(CreateOrderAmount unit_amount) {
        this.unit_amount = unit_amount;
    }

    private CreateOrderTax tax;

    /**
     * The tax associated with the item.
     * <p>
     * Required: false
     */
    public CreateOrderTax getTax() {
        return tax;
    }

    public void setTax(CreateOrderTax tax) {
        this.tax = tax;
    }

    public CreateOrderItem(String name, String quantity, String description, String sku, String category, CreateOrderAmount unit_amount, CreateOrderTax tax) {
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.sku = sku;
        this.category = category;
        this.unit_amount = unit_amount;
        this.tax = tax;
    }
}

