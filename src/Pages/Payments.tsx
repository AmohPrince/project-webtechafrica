import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../Assets/assets";
import CreditCardInput from "../Components/CreditCardInput";
import PayPalInput from "../Components/PayPalInput";
import PrimaryButton from "../Components/PrimaryButton";
import SinglePayment from "../Components/SinglePayment";
import { useAuth } from "../Hooks/UseAuth";
import { Card } from "../Types/Global";
import { globalData } from "./DashBoard";

const Payments = () => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] =
    useState("credit-card");
  const { user } = useAuth();
  const [showPaymentMethodsModal, setShowPaymentMethodsModal] =
    useState<boolean>(false);
  const { setDashBoardTitleInfo } = useContext(globalData);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Payments",
      sub: "Your upcoming and past payments",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="flex justify-between items-start gap-x-5 p-6 mt-4 bg-white">
      {showPaymentMethodsModal ? (
        <div className="flex-grow bg-white rounded-xl">
          <div className="py-3 px-5 border-b flex justify-between items-center">
            <p className="font-semibold">Payment</p>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowPaymentMethodsModal(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="px-5 py-2">
            <p className="text-sm font-semibold">Select payment method</p>
            <div className="flex flex-wrap mt-2">
              <div
                className={`border-primaryOne p-2 border rounded-sm flex items-center cursor-pointer mr-2 ${
                  selectingPaymentMethod === "credit-card"
                    ? "text-white bg-primaryOne shadow-lg"
                    : ""
                }`}
                onClick={() => setSelectingPaymentMethod("credit-card")}
              >
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="transition-all duration-300"
                />
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
      ) : (
        <div className="flex-grow border p-2 rounded-md">
          <div className="flex justify-between text-sm mt-2 text-gray-500">
            <p className="w-1/4">Website url</p>
            <p className="w-1/5">Payment Date</p>
            <p className="w-1/5">Card used</p>
            <p className="w-[10%]">Total</p>
            <p className="w-1/5">Billing date</p>
          </div>
          {user?.activeWebsites ? (
            user?.activeWebsites.map((website) => (
              <SinglePayment website={website} />
            ))
          ) : (
            <p>No Payments yet 😁</p>
          )}
        </div>
      )}
      <div className="w-1/4 flex flex-col">
        <div className="w-full bg-white rounded-xl border">
          <p className="font-semibold border-b text-center py-4 px-3">Cards</p>
          {user?.cards ? (
            user.cards.map((card) => <CardInfo card={card} />)
          ) : (
            <p className="text-sm text-gray-500 text-center mx-4 my-4">
              You’ve not added any payment method yet
            </p>
          )}
        </div>
        <PrimaryButton
          text="Add Payment Method"
          className="hover:scale-100 ml-auto mt-5"
          onClick={() => setShowPaymentMethodsModal(true)}
        />
      </div>
    </div>
  );
};

export default Payments;

export const CardInfo = ({ card }: { card: Card }) => {
  return (
    <div className="py-4 px-2 mx-2 shadow-md my-4 flex flex-col rounded-md">
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
