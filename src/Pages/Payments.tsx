import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../Assets/assets";
import CreditCardInput from "../Components/CreditCardInput";
import PayPalInput from "../Components/PayPalInput";
import PrimaryButton from "../Components/PrimaryButton";
import SinglePayment from "../Components/SinglePayment";
// import { useAuth } from "../Hooks/UseAuth";
import { Card, User } from "../Types/Global";
import { globalData } from "./DashBoard";
import { testUser } from "../Firebase/firebase";

const Payments = () => {
  // const { user } = useAuth();
  const user = testUser;
  const [
    showPaymentMethodsModalLargeScreen,
    setShowPaymentMethodsModalLargeScreen,
  ] = useState<boolean>(false);
  const [
    showPaymentMethodsModalSmallScreen,
    setShowPaymentMethodsModalSmallScreen,
  ] = useState(false);
  const { setDashBoardTitleInfo } = useContext(globalData);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Payments",
      sub: "Your upcoming and past payments",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-x-5 px-4 py-3 sm:p-6 mt-4">
      <div className="text-sm flex justify-around mx-auto gap-x-4 mb-5 sm:hidden">
        <button
          className={`px-3 py-2 border border-primaryOne font-semibold ${
            showPaymentMethodsModalSmallScreen
              ? ""
              : "bg-primaryOne shadow-md text-white"
          }`}
          onClick={() => setShowPaymentMethodsModalSmallScreen(false)}
        >
          Cards & payments list
        </button>
        <button
          className={`px-3 py-2 rounded-sm border border-primaryOne ${
            showPaymentMethodsModalSmallScreen
              ? "bg-primaryOne shadow-md text-white"
              : ""
          } `}
          onClick={() => setShowPaymentMethodsModalSmallScreen(true)}
        >
          Payment methods
        </button>
      </div>
      <div className="sm:hidden">
        {showPaymentMethodsModalSmallScreen ? (
          <PaymentsModal
            setShowPaymentMethodsModal={setShowPaymentMethodsModalSmallScreen}
          />
        ) : (
          <div>
            <PaymentsTable user={user} />
            <CardsAndAddButton
              setShowPaymentMethodsModal={setShowPaymentMethodsModalSmallScreen}
              user={user}
              className="w-full"
            />
          </div>
        )}
      </div>
      {showPaymentMethodsModalLargeScreen ? (
        <PaymentsModal
          setShowPaymentMethodsModal={setShowPaymentMethodsModalLargeScreen}
        />
      ) : (
        <PaymentsTable user={user} className="hidden sm:block" />
      )}
      <CardsAndAddButton
        setShowPaymentMethodsModal={setShowPaymentMethodsModalLargeScreen}
        user={user}
        className="hidden sm:block w-1/4"
      />
    </div>
  );
};

export default Payments;

const CardInfo = ({ card }: { card: Card }) => {
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

const PaymentsModal = ({
  setShowPaymentMethodsModal,
  className,
}: {
  setShowPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  const [selectingPaymentMethod, setSelectingPaymentMethod] =
    useState("credit-card");
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
        <div className="flex flex-wrap gap-x-2 mt-2 sm:justify-start">
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

const PaymentsTable = ({
  user,
  className,
}: {
  user: User | null;
  className?: string;
}) => {
  return (
    <div className={`flex-grow border p-2 mb-2 rounded-md ${className}`}>
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
  );
};

const CardsAndAddButton = ({
  user,
  setShowPaymentMethodsModal,
  className,
}: {
  user: User | null;
  setShowPaymentMethodsModal: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
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
        className="hover:scale-100 mx-auto sm:ml-auto mt-5"
        onClick={() => setShowPaymentMethodsModal(true)}
      />
    </div>
  );
};

const getCardTypeIcon = (type: string): string | undefined => {
  if (type.toLowerCase() === "mastercard") {
    return assets.mastercard;
  }
};
