import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalSubscriber = () => {
  return (
    <div className="bg-white p-5 flex flex-col">
      <p className="w-3/4">
        Please subscribe with paypal, no need to worry, no amount of money is
        going to be extracted from your account for the 1st month!
      </p>
      <PayPalButtons
        className="mt-6 playfair w-1/2 mx-auto"
        createSubscription={async (data, actions) => {
          const orderId = await actions.subscription.create({
            plan_id: "sgsgsggsgsg",
            // plan : "basic",
          });
          console.log(data);
          console.log(orderId);
          return orderId;
        }}
        style={{
          label: "subscribe",
          color: "gold",
          height: 40,
        }}
      />
    </div>
  );
};
