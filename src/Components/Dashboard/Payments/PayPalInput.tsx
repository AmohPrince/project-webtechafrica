import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useContext } from "react";
import { usePaypal } from "../../../Hooks/usePayPal";
import { globalData } from "../../../Pages/Dashboard/DashBoard";

const PayPalInput = () => {
  const { showNotification } = useContext(globalData);
  const { clientTokenResponse, errors, isLoading } = usePaypal();
  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="w-5 h-5 mx-auto my-5"
        />
      ) : errors ? (
        <p className="mx-auto my-5 text-sm">
          An error occurred loading paypal{" "}
        </p>
      ) : clientTokenResponse ? (
        <PayPalScriptProvider
          options={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID!,
            components: "buttons,hosted-fields",
            "data-client-token": clientTokenResponse.client_token,
            intent: "capture",
            vault: true,
          }}
        >
          <div>
            <p className="mt-2 text-sm font-semibold">Paypal</p>
            <p className="text-xs text-gray-500">
              You can pay with your paypal account but no worries if you dont
              have a paypal account! You can pay with your credit card by
              clicking on the Debit or Credit Card option.You can pay regardless
              of whether or not you have a paypal account!
            </p>
            <PayPalButtons
              className="mt-6 playfair mx-auto"
              onApprove={(data: any, actions): Promise<void> => {
                console.log(data, "onApproveData");
                // actions.restart();
                // capture is for capturing for later withdrawal.
                // actions.order
                //   ?.capture()
                //   .then((captured) => console.log(captured, "Captured"));
                actions.order?.get().then((get) => {
                  console.log(get, "get");
                  //add paypal to user database
                  if (get.status === "APPROVED") {
                    showNotification(
                      "Payment was successful, somebody is now working on your website!",
                      "success"
                    );
                  }
                });
                return Promise.resolve();
              }}
              createSubscription={(data, actions) => {
                console.log(data);
                return actions.subscription
                  .create({
                    plan_id: "P-3RX065706M3469222L5IFM4I",
                  })
                  .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                  });
              }}
              style={{
                label: "subscribe",
              }}
              onError={(err: Record<string, unknown>) => {
                console.log(err);
                showNotification("An error might have occurred :-(", "error");
              }}
              onCancel={(_err: Record<string, unknown>) => {
                showNotification(
                  "You cancelled the paypal transaction",
                  "error"
                );
              }}
            />
          </div>
        </PayPalScriptProvider>
      ) : (
        <p>TF</p>
      )}
    </>
  );
};

export default PayPalInput;
