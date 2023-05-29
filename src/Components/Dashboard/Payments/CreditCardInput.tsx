import { useState, useRef } from "react";
import {
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from "@paypal/react-paypal-js";

const SubmitPayment = () => {
  const [paying, setPaying] = useState(false);
  const cardHolderName = useRef<HTMLInputElement>(null);
  const hostedField = usePayPalHostedFields();

  const handleClick = () => {
    if (!hostedField?.cardFields) {
      const childErrorMessage =
        "Unable to find any child components in the <PayPalHostedFieldsProvider />";
      console.error(childErrorMessage);
      throw new Error(childErrorMessage);
    }
    const isFormInvalid =
      Object.values(hostedField.cardFields.getState().fields).some(
        (field) => !field.isValid
      ) || !cardHolderName?.current?.value;

    if (isFormInvalid) {
      return alert("The payment form is invalid");
    }
    setPaying(true);
    hostedField.cardFields
      .submit({
        cardholderName: cardHolderName?.current?.value,
      })
      .then((data) => {
        // Your logic to capture the transaction
        fetch("url_to_capture_transaction", {
          method: "POST",
        })
          .then((response) => response.json())
          .then((data) => {
            // Here use the captured info
          })
          .catch((err) => {
            // Here handle error
          })
          .finally(() => {
            setPaying(false);
          });
      })
      .catch((err) => {
        // Here handle error
        setPaying(false);
      });
  };

  return (
    <>
      <p title="This represents the full name as shown in the card">
        Card Holder Name
        <input
          id="card-holder"
          ref={cardHolderName}
          className="card-field"
          type="text"
          placeholder="Full name"
        />
      </p>
      <button
        className={`btn${paying ? "" : " btn-primary"}`}
        style={{ float: "right" }}
        onClick={handleClick}
      >
        {paying ? <div className="spinner tiny" /> : "Pay"}
      </button>
    </>
  );
};

export const CreditCardInput = () => {
  return (
    <PayPalHostedFieldsProvider
      createOrder={() => {
        return Promise.resolve("Test");
      }}
    >
      <p>
        Card Number
        <span>*</span>
      </p>
      <PayPalHostedField
        id="card-number"
        className="card-field"
        hostedFieldType="number"
        options={{
          selector: "#card-number",
          placeholder: "4111 1111 1111 1111",
        }}
      />
      <p>
        CVV<span>*</span>
      </p>
      <PayPalHostedField
        id="cvv"
        className="card-field"
        hostedFieldType="cvv"
        options={{
          selector: "#cvv",
          placeholder: "123",
          maskInput: true,
        }}
      />
      <p>
        Expiration Date
        <span>*</span>
      </p>
      <PayPalHostedField
        id="expiration-date"
        className="card-field"
        hostedFieldType="expirationDate"
        options={{
          selector: "#expiration-date-field",
          placeholder: "MM/YYYY",
        }}
      />
      <SubmitPayment />
    </PayPalHostedFieldsProvider>
  );
};
