import { useState, useRef } from "react";
import {
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from "@paypal/react-paypal-js";

const CUSTOM_FIELD_STYLE = {
  border: "1px solid #606060",
  boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)",
};
const INVALID_COLOR = {
  color: "#dc3545",
};

// Example of custom component to handle form submit
const SubmitPayment = ({
  customStyle,
}: {
  customStyle: React.CSSProperties;
}) => {
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
          style={{ ...customStyle, outline: "none" }}
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
        <span style={INVALID_COLOR}>*</span>
      </p>
      <PayPalHostedField
        id="card-number" // Unique ID for card number field
        className="card-field"
        hostedFieldType="number"
        options={{
          selector: "#card-number", // Unique selector for card number field
          placeholder: "4111 1111 1111 1111",
        }}
      />
      <p>
        CVV<span style={INVALID_COLOR}>*</span>
      </p>
      <PayPalHostedField
        id="cvv" // Unique ID for CVV field
        className="card-field"
        style={CUSTOM_FIELD_STYLE}
        hostedFieldType="cvv"
        options={{
          selector: "#cvv", // Unique selector for CVV field
          placeholder: "123",
          maskInput: true,
        }}
      />
      <p>
        Expiration Date
        <span style={INVALID_COLOR}>*</span>
      </p>
      <PayPalHostedField
        id="expiration-date" // Unique ID for expiration date field
        className="card-field"
        style={CUSTOM_FIELD_STYLE}
        hostedFieldType="expirationDate"
        options={{
          selector: "#expiration-date-field", // Unique selector for expiration date field
          placeholder: "MM/YYYY",
        }}
      />
      <SubmitPayment
        customStyle={{
          border: "1px solid #606060",
          boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)",
        }}
      />
    </PayPalHostedFieldsProvider>
  );
};
