import React from "react";
import PrimaryButton from "./PrimaryButton";

const CreditCardInput = () => {
  return (
    <div className="px-5">
      <p className="mt-3 text-sm font-semibold">Card Name</p>
      <p className="text-xs text-gray-500">Enter the name on the card</p>
      <input
        type="text"
        className="w-full bg-gray-100 text-sm px-3 py-3 rounded-sm outline-none mt-2"
      />
      <p className="mt-3 text-sm font-semibold">Card Number</p>
      <p className="text-xs text-gray-500">
        Enter the 16-digit number on the card
      </p>
      <input
        type="text"
        className="w-full bg-gray-100 text-sm px-3 py-3 rounded-sm outline-none mt-2"
      />
      <div className="mt-3 flex justify-between">
        <div className="w-[48%]">
          <p className="mt-3 text-sm font-semibold">Expiry Date</p>
          <p className="text-gray-500 text-xs">
            Enter the expiration date on the card
          </p>
          <div className="flex justify-between">
            <input
              type="number"
              className="w-[48%] bg-gray-100 text-sm px-3 py-3 rounded-sm outline-none mt-2"
            />
            <input
              type="number"
              className="w-[48%] bg-gray-100 text-sm px-3 py-3 rounded-sm outline-none mt-2"
            />
          </div>
        </div>
        <div className="w-[48%]">
          <p className="mt-3 text-sm font-semibold">CVV</p>
          <p className="text-gray-500 text-xs">
            Enter the 3-4 digit on the card
          </p>
          <input
            type="number"
            className="w-full bg-gray-100 text-sm px-3 py-3 rounded-sm outline-none mt-2"
          />
        </div>
      </div>
      <div className="flex mt-3 items-center">
        <input type="checkbox" />
        <p className="ml-2 text-xs">
          I accept the Fare Rules , the{" "}
          <span className="cursor-pointer text-sky-600">Privacy Policy</span>
        </p>
      </div>
      <PrimaryButton
        text="Add Payment Method"
        className="w-full mt-6 hover:scale-100"
      />
    </div>
  );
};

export default CreditCardInput;
