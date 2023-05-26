import React from "react";
import {
  PayPalHostedFieldsProvider,
  PayPalHostedField,
} from "@paypal/react-paypal-js";

const CreditCardInput = () => {
  return (
    // <PayPalHostedFieldsProvider
    //   createOrder={async () => {
    //     // Here define the call to create and order
    //     try {
    //       const response = await fetch(
    //         "/your-server-side-integration-endpoint/orders"
    //       );
    //       const order = await response.json();
    //       return order.id;
    //     } catch (err) {}
    //   }}
    // >
    //   <PayPalHostedField
    //     id="card-number"
    //     hostedFieldType="number"
    //     options={{ selector: "#card-number" }}
    //   />
    //   <PayPalHostedField
    //     id="cvv"
    //     hostedFieldType="cvv"
    //     options={{ selector: "#cvv" }}
    //   />
    //   <PayPalHostedField
    //     id="expiration-date"
    //     hostedFieldType="expirationDate"
    //     options={{
    //       selector: "#expiration-date",
    //       placeholder: "MM/YY",
    //     }}
    //   />
    // </PayPalHostedFieldsProvider>
    <p>yes</p>
  );
};

export default CreditCardInput;
