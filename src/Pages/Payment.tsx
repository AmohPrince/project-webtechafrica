import React, { useState } from "react";
import { assets } from "../Assets/assets";
import CreditCardInput from "../Components/CreditCardInput";
import PayPalInput from "../Components/PayPalInput";
import { useAuth } from "../Hooks/UseAuth";
import { Card } from "../Types/Global";

const Payment = () => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] =
    useState("credit-card");
  const { user } = useAuth();
  return (
    <div className="flex justify-between">
      <div className="w-2/3 bg-white rounded-xl">
        <p className="font-semibold py-4 px-3 border-b">Payment</p>
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
      <div className="w-1/4 bg-white rounded-xl h-max">
        <p className="font-semibold border-b text-center py-4 px-3">Cards</p>
        {user?.cards === undefined ? (
          <p className="text-sm text-gray-500 text-center mx-4 my-4">
            You’ve not added any payment method yet
          </p>
        ) : (
          user.cards.map((card) => <CardInfo card={card} />)
        )}
      </div>
    </div>
  );
};

export default Payment;

export const CardInfo = ({ card }: { card: Card }) => {
  return (
    <div className="py-4 px-3 shadow-md mx-3 my-2 flex flex-col">
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
