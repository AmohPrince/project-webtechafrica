import { useAuth } from "@/hooks/useAuth";
import { Transaction } from "@/types/Global";
import { backendURL } from "@/util/utilities";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
<<<<<<< HEAD:client/src/Components/Dashboard/Payments/PayPalInput.tsx
import { backendURL } from "../../../App";
import { addOrUpdateUserDataInDB } from "../../../Firebase/firestore";
import { useAuth } from "../../../Hooks/UseAuth";
import { DEFAULT_PRICE, useGlobalData } from "../../../Hooks/useGlobalData";
import { Transaction } from "../../../Types/Global";
=======
import { addOrUpdateUserDataInDB } from "../../../firebase/firestore";
import { DEFAULT_PRICE, useGlobalData } from "../../../hooks/useGlobalData";
>>>>>>> work-branch:client/components/dashboard/payments/PayPalInput.tsx

export const PayPalInput = ({ websiteURL }: { websiteURL: string }) => {
  const { showNotification } = useGlobalData();
  const { user, userData } = useAuth();

  const createOrder = async (data: any, actions: any): Promise<string> => {
    try {
      const response = await fetch(`${backendURL}/create-order`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          price: DEFAULT_PRICE.basic,
        }),
      });
      return await response.text();
    } catch (err) {
      console.error(err);
      throw new Error("error");
    }
  };

  const onApprove = async (data: any, actions: any) => {
    const get = await actions.order.get();
    if (get.status === "APPROVED") {
      const newTransaction: Transaction = {
        id: get.id,
        amount: get.purchase_units[0].amount.value,
        billingDate: get.create_time,
        card: "Paypal",
        currencyCode: get.purchase_units[0].amount.currency_code!,
        lastPaymentDate: get.create_time,
        lastPaymentTime: get.create_time,
        plan: "Basic",
        websiteUrl: websiteURL,
      };
      await addOrUpdateUserDataInDB(
        {
          ...userData!,
          pastTransactions: userData?.pastTransactions
            ? [...userData.pastTransactions, newTransaction]
            : [newTransaction],
        },
        user!.uid
      );
      showNotification(
        "Payment was successful, somebody is now working on your website!",
        "success"
      );
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        components: "buttons",
        intent: "capture",
        vault: true,
      }}
    >
      <div>
        <p className="mt-2 text-sm font-semibold">Paypal</p>
        <p className="text-xs text-gray-500">
          You can pay with your paypal account but no worries if you dont have a
          paypal account! You can pay with your credit card by clicking on the
          Debit or Credit Card option.You can pay regardless of whether or not
          you have a paypal account!
        </p>
        <PayPalButtons
          className="mt-6 playfair mx-auto"
          onApprove={onApprove}
          createOrder={createOrder}
          onError={(err: Record<string, unknown>) =>
            showNotification("An error might have occurred :-(", "error")
          }
          onCancel={(err: Record<string, unknown>) =>
            showNotification("You cancelled the paypal transaction", "error")
          }
        />
      </div>
    </PayPalScriptProvider>
  );
};
