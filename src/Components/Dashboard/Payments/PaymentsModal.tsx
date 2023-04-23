import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { assets } from "../../../Assets/assets";
import { globalData } from "../../../Pages/DashBoard";
import CreditCardInput from "./CreditCardInput";
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

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDashBoardTitleInfo({
        h1: "Payments",
        sub: "Add your preferred payment method",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`flex-grow bg-white rounded-xl ${className}`}>
      <div className="py-3 px-5 border-b flex justify-between items-center">
        <p className="font-semibold">Payment</p>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setShowPaymentMethodsModal(false)}
          className="cursor-pointer hidden sm:block"
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
            <p className="text-xs ml-2 font-medium">Credit/Debit Card</p>
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
      {selectingPaymentMethod === "credit-card" ? (
        <CreditCardInput />
      ) : (
        <PayPalInput />
      )}
    </div>
  );
};
