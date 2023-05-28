import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext, useEffect, useState } from "react";
import { assets } from "../../../Assets/assets";
import { usePaypal } from "../../../Hooks/usePayPal";
import { globalData } from "../../../Pages/DashBoard";
import { isSmallScreen } from "../../../Util/Utilities";
import { CreditCardInput } from "./CreditCardInput";
import PayPalInput from "./PayPalInput";

export const PaymentsModal = ({
  setShowPaymentMethodsModal,
  className,
}: {
  setShowPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] =
    useState("credit-card");

  const { setDashBoardTitleInfo } = useContext(globalData);
  const { clientTokenResponse, errors, isLoading } = usePaypal();

  useEffect(() => {
    if (isSmallScreen()) {
      setDashBoardTitleInfo({
        h1: "Payments",
        sub: "Add your preferred payment method",
      });
    }
  }, [setDashBoardTitleInfo]);
  return (
    <div
      className={`flex flex-col flex-grow bg-white rounded-xl ${className} absolute center-absolutely border-primaryOne border-2 z-10 transition-all`}
    >
      <div className="py-3 px-5 border-b flex justify-between items-center">
        <p className="font-semibold">Payment</p>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setShowPaymentMethodsModal(false)}
          className="cursor-pointer hidden sm:block text-white bg-primaryOne py-1 px-[6px] rounded-full"
          size="xs"
        />
      </div>
      <div className="px-5 py-2">
        <p className="text-sm font-semibold">Select payment method</p>
        <div className="flex gap-x-4 sm:gap-x-2 mt-2">
          <div
            className={`border-primaryOne p-2 border rounded-sm flex items-center cursor-pointer ${
              selectingPaymentMethod === "credit-card"
                ? "text-white bg-primaryOne shadow-lg"
                : ""
            }`}
            onClick={() => setSelectingPaymentMethod("credit-card")}
          >
            <img src={assets.creditCard} alt="credit card" />
            <p className="text-xs ml-2 font-medium">Credit or Debit Card</p>
          </div>
          <div
            className={`border-primaryOne p-2 border rounded-sm flex items-center cursor-pointer ${
              selectingPaymentMethod === "paypal"
                ? "text-white bg-primaryOne shadow-lg"
                : ""
            }`}
            onClick={() => setSelectingPaymentMethod("paypal")}
          >
            <FontAwesomeIcon
              icon={faPaypal}
              className="transition-all duration-300"
            />
            <p className="text-xs ml-2 font-medium">Paypal</p>
          </div>
        </div>
      </div>
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="w-5 h-5 mx-auto my-5"
        />
      ) : errors.length > 0 ? (
        <p>An error occurred </p>
      ) : (
        clientTokenResponse && (
          <PayPalScriptProvider
            options={{
              "client-id": process.env.REACT_APP_PAYPAL_SANDBOX_CLIENT_ID!,
              components: "buttons,hosted-fields",
              "data-client-token": clientTokenResponse.client_token,
              intent: "capture",
              vault: false,
            }}
          >
            {selectingPaymentMethod === "credit-card" ? (
              <CreditCardInput />
            ) : (
              <PayPalInput />
            )}
          </PayPalScriptProvider>
        )
      )}
    </div>
  );
};
