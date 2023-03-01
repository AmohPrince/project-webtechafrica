import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { assets } from "../Assets/assets";
import CreditCardInput from "../Components/CreditCardInput";
import DashBoardTitle from "../Components/DashBoardTitle";
import PayPalInput from "../Components/PayPalInput";
import PrimaryButton from "../Components/PrimaryButton";
import SinglePayment from "../Components/SinglePayment";
import { useAuth } from "../Hooks/UseAuth";
import { Card } from "../Types/Global";

const Payments = () => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] =
    useState("credit-card");
  const { user } = useAuth();
  const [showPaymentMethodsModal, setShowPaymentMethodsModal] =
    useState<boolean>(false);
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <DashBoardTitle h1="Payments" sub="Your upcoming and past payments" />
        <PrimaryButton
          text="Add Payment Method"
          className="hover:scale-100"
          onClick={() => setShowPaymentMethodsModal(true)}
        />
      </div>
      <div className="flex justify-between mt-7 items-start">
        {user?.activeWebsites ? (
          user?.activeWebsites.map((website) => (
            <SinglePayment website={website} />
          ))
        ) : (
          <p>No Payments yet 😁</p>
        )}
        <div className="w-1/4 bg-white rounded-xl">
          <p className="font-semibold border-b text-center py-4 px-3">Cards</p>
          {user?.cards ? (
            user.cards.map((card) => <CardInfo card={card} />)
          ) : (
            <p className="text-sm text-gray-500 text-center mx-4 my-4">
              You’ve not added any payment method yet
            </p>
          )}
        </div>
      </div>
      {showPaymentMethodsModal && (
        <div className="w-1/2 bg-white rounded-xl absolute center-absolutely shadow-lg pb-7 transition-all">
          <div className="py-4 px-5 border-b flex justify-between items-center">
            <p className="font-semibold">Payment</p>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowPaymentMethodsModal(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold">Select payment method</p>
            <div className="flex flex-wrap mt-3">
              <div
                className="border-primaryOne p-2 border rounded-sm flex items-center mr-3 cursor-pointer"
                onClick={() => setSelectingPaymentMethod("credit-card")}
              >
                <img src={assets.creditCard} alt="Credit card" />
                <p className="text-xs ml-2 font-medium">Credit/Debit Card</p>
              </div>
              <div
                className="border-primaryOne p-2 border rounded-sm flex items-center cursor-pointer"
                onClick={() => setSelectingPaymentMethod("paypal")}
              >
                <img src={assets.payPalSm} alt="Credit card" />
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
      )}
    </div>
  );
};

export default Payments;

export const CardInfo = ({ card }: { card: Card }) => {
  return (
    <div className="py-4 px-3 shadow-md mx-3 my-4 flex flex-col">
      <div className="flex items-start">
        <img src={getCardTypeIcon(card.type)} alt={`${card.type}'s logo `} />
        <div className="ml-3 text-sm">
          <p>
            {card.type} ending in {card.endsIn}
          </p>
          <p className="text-gray-500 text-xs">Expiry date {card.expiryDate}</p>
        </div>
      </div>
      <button className="text-xs py-2 px-3 rounded-full border border-primaryOne mt-3 ml-auto">
        Remove Card
      </button>
    </div>
  );
};

function getCardTypeIcon(type: string): string | undefined {
  if (type.toLowerCase() === "mastercard") {
    return assets.mastercard;
  }
}
