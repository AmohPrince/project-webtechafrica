import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import PrimaryButton from "../../PrimaryButton";
import { Country } from "../../../Util/FetchCountries";

const PayPalInput = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    fetchCountries().then((res) => setCountries(res));
  }, []);

  return (
    <div className="px-5">
      <p className="mt-2 text-sm font-semibold">Select Country</p>
      <p className="text-xs text-gray-500">
        Select the country your account was created in
      </p>
      <select className="w-full bg-gray-100 text-sm px-3 py-2 outline-primaryOne mt-2">
        {countries
          .sort((a, b) => {
            if (a.name.common < b.name.common) {
              return -1;
            }
            if (a.name.common > b.name.common) {
              return 1;
            }
            return 0;
          })
          .map((country, i) => (
            <option value={country.name.official} key={i}>
              {country.name.common}
            </option>
          ))}
      </select>
      <div className="mt-2">
        <p className="mt-2 text-sm font-semibold">Card Number</p>
        <p className="text-xs text-gray-500">
          Enter the 16-digit number on the card
        </p>
        <div className="relative h-max w-full">
          <input
            type="text"
            className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2 pl-10"
          />
          <FontAwesomeIcon
            icon={faPaypal}
            className="left-4 top-[60%] -translate-y-1/2 absolute"
          />
        </div>
      </div>
      <div className="flex gap-x-3 mt-2">
        <div className="flex-grow">
          <p className="mt-2 text-sm font-semibold">Expiry Date</p>
          <p className="text-xs text-gray-500">
            Enter the expiry date on the card
          </p>
          <div className="flex gap-x-1">
            <input
              type="number"
              className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
            />
            <input
              type="number"
              className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
            />
          </div>
        </div>
        <div className="flex-grow">
          <p className="mt-2 text-sm font-semibold">CSC</p>
          <p className="text-xs text-gray-500">
            Enter the 3-4 digit on the card
          </p>
          <input
            type="number"
            className="w-full bg-gray-100 text-sm px-3 py-2 rounded-sm outline-none mt-2"
          />
        </div>
      </div>
      <div className="flex mt-2 items-center">
        <input type="checkbox" />
        <p className="ml-2 text-xs">
          I accept the Fare Rules , the{" "}
          <span className="cursor-pointer text-sky-600">Privacy Policy</span>
        </p>
      </div>
      <PrimaryButton
        text="Add Payment Method"
        className="w-full my-6 hover:scale-100"
      />
    </div>
  );
};

export default PayPalInput;

const fetchCountries = (): Promise<Country[]> => {
  const options = {
    method: "GET",
  };

  return fetch("https://restcountries.com/v3.1/all", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
