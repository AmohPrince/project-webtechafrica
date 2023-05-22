import React from "react";
import { Link } from "react-router-dom";
import { PRICES } from "../App";
import { getYearly, scrollToTop } from "../Util/Utilities";
import Billed from "./Billed";

export const AdvancedPricing = ({ className }: { className: string }) => {
  return (
    <div
      className={`py-12 px-4 sm:px-8 rounded-2xl text-center bg-gray-100 ${className}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Advanced</h3>
        <p className="text-xs bg-gray-200 text-primaryOne py-2 px-3 rounded-full w-max font-bold">
          Popular
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          Ksh. {PRICES.advanced} <span className="text-sm">/ month</span>
        </p>
        <Billed
          text={`Billed as Ksh. ${getYearly(PRICES.advanced)} per year`}
        />
      </div>
      <div className="text-secondaryFour">
        <p>
          <span className="font-semibold text-primaryOne">Unlimited</span>{" "}
          customer support
        </p>
        <p>Hosting</p>
        <p>Custom domain name</p>
        <p>
          Complete{" "}
          <span className="font-semibold text-primaryOne">
            website design and development
          </span>
        </p>
        <p>Social media management</p>
        <p>Custom Ads management</p>
        <p>
          Fully <span className="font-semibold text-primaryOne"> designed</span>{" "}
          and <span className="font-semibold text-primaryOne"> deployed</span>{" "}
          web shop
        </p>
        <p>Payments covered!</p>
        <p>
          <span className="font-semibold text-primaryOne"> Sell</span> products
          online
        </p>
      </div>
      <Link to="/pricing/advanced" onClick={scrollToTop}>
        <button className="py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 bg-primaryTwo text-white hover:bg-primaryTwoLight">
          Learn more
        </button>
      </Link>
    </div>
  );
};
