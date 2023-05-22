import React from "react";
import { Link } from "react-router-dom";
import { PRICES } from "../App";
import { getYearly, scrollToTop } from "../Util/Utilities";
import Billed from "./Billed";

export const BasicPricing = ({ className }: { className: string }) => {
  return (
    <div
      className={`py-12 px-4 sm:px-8 bg-gray-100 rounded-2xl text-center ${className}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl sm:text-4xl font-extrabold">Basic</h3>
        <p className="text-xs px-3 py-2 rounded-full bg-white font-semibold text-secondaryFour">
          Save 30%
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          Ksh. {PRICES.basic} <span className="text-sm">/ month</span>
        </p>
        <Billed text={`Billed as Ksh ${getYearly(PRICES.basic)} per year`} />
      </div>
      <div className="text-secondaryFour">
        {/* TODO do not hardcode this features. use the feature array on App.tsx to create a single point of reference */}
        <p>
          <span className="font-semibold text-black">Unlimited</span> customer
          support
        </p>
        <p>Hosting</p>
        <p>Custom domain name</p>
        <p>
          Complete{" "}
          <span className="font-semibold text-black">
            website design and development
          </span>
        </p>
      </div>
      <Link to="/pricing/basic" onClick={scrollToTop}>
        <button className="py-3 px-7 rounded-full border mt-8 hover:bg-orange transition-all text-sm font-bold hover:border-orange">
          Learn more
        </button>
      </Link>
    </div>
  );
};
