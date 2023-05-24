import React from "react";
import { Link } from "react-router-dom";
import { PREMIUM_FEATURES, PRICES } from "../App";
import { getYearly, scrollToTop } from "../Util/Utilities";
import Billed from "./Billed";
import { FeatureString } from "./FeatureString";

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
      <div className="text-secondaryFour flex flex-col items-center">
        {PREMIUM_FEATURES.map((feature) => {
          const str = feature.split(",");
          return (
            <div className="flex">
              {str.map((str) => (
                <FeatureString feature={str} source="Premium" />
              ))}
            </div>
          );
        })}
      </div>
      <Link to="/pricing/advanced" onClick={scrollToTop}>
        <button className="py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 bg-primaryTwo text-white hover:bg-primaryTwoLight">
          Learn more
        </button>
      </Link>
    </div>
  );
};
