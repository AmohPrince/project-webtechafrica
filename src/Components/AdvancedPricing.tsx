import React from "react";
import { Link } from "react-router-dom";
import Billed from "./Billed";

export const AdvancedPricing = ({ className }: { className?: string }) => {
  return (
    <div
      className={`py-12 px-8 rounded-2xl text-center ${
        !className ? "bg-gray-100 w-1/3" : className
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-extrabold">Advanced</h3>
        <p className="text-xs bg-gray-200 text-primaryOne py-2 px-3 rounded-full w-max font-bold">
          Popular
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          kes.1499 <span className="text-sm">/ month</span>
        </p>
        <Billed text="Billed as Ksh 15,599 per year" />
      </div>
      <div className={`${!className ? "text-secondaryFour" : "text-white"}`}>
        <p>
          <span
            className={`font-semibold ${
              !className ? "text-primaryOne" : "text-white"
            }`}
          >
            Unlimited
          </span>{" "}
          customer support
        </p>
        <p>Hosting</p>
        <p>Custom domain name</p>
        <p>
          Complete{" "}
          <span
            className={`font-semibold ${
              !className ? "text-primaryOne" : "text-white"
            }`}
          >
            website design and development
          </span>
        </p>
        <p>Social media management</p>
        <p>Custom Ads management</p>
        <p>
          <span
            className={`font-semibold ${
              !className ? "text-primaryOne" : "text-white"
            }`}
          >
            {" "}
            Sell
          </span>{" "}
          products online
        </p>
      </div>
      <Link to="/pricing/advanced">
        <button
          className={`py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 ${
            !className
              ? "bg-primaryTwo text-white hover:bg-primaryTwoLight"
              : "bg-white text-black"
          }`}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};
