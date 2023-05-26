import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useContext } from "react";
import { globalData } from "../../../Pages/DashBoard";

const PayPalInput = () => {
  const { setPopUpInfo } = useContext(globalData);
  return (
    <div className="px-5">
      <p className="mt-2 text-sm font-semibold">Paypal connection</p>
      <p className="text-xs text-gray-500">
        This is just to link your account. You are not going to charged.
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
              setPopUpInfo({
                showing: true,
                text: `You successfully connected your paypal account!`,
                type: "success",
              });
            }
          });
          return Promise.resolve();
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "0.01",
                  currency_code: "USD",
                },
              },
            ],
            // application_context: ,
            // payer ,
            // intent: "AUTHORIZE",
          });
        }}
        onError={(err: Record<string, unknown>) =>
          setPopUpInfo({
            showing: true,
            text: err.message as string,
            type: "error",
          })
        }
        onCancel={(err: Record<string, unknown>) =>
          setPopUpInfo({
            showing: true,
            text: "You just cancelled the paypal connection",
            type: "error",
          })
        }
        style={{
          tagline: true,
          layout: "horizontal",
        }}
      />
    </div>
  );
};

export default PayPalInput;
