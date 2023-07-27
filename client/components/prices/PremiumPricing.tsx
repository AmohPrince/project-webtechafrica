import { useGlobalData } from "@/hooks/useGlobalData";
import { getYearly, PREMIUM_FEATURES, scrollToTop } from "@/util/utilities";
import Link from "next/link";
import React from "react";
import Billed from "./Billed";
import { FeatureSpan } from "./FeatureSpan";

export const PremiumPricing = ({ className }: { className: string }) => {
  const { price } = useGlobalData();
  return (
    <div
      className={`py-12 px-4 md:px-8 rounded-2xl text-center bg-gray-100 ${className}`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-extrabold">Premium</h3>
        <p className="text-xs bg-gray-200 text-primaryOne py-2 px-3 rounded-full w-max font-bold">
          Popular
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          {price.advanced} {price.currency}{" "}
          <span className="text-sm">/ month</span>
        </p>
        <Billed
          text={`Billed as ${getYearly(price.advanced)}  ${
            price.currency
          } per year`}
        />
      </div>
      <div className="text-secondaryFour flex flex-col items-center">
        {PREMIUM_FEATURES.map((feature) => feature.text).map((feature, i) => {
          const str = feature.split(" ");
          return (
            <p key={i}>
              {str.map((str) => (
                <FeatureSpan text={str} source="Premium" key={str} />
              ))}
            </p>
          );
        })}
      </div>
      <Link href="/pricing/premium" onClick={scrollToTop}>
        <button className="py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 bg-primaryTwo text-white hover:bg-primaryTwoLight">
          Learn more
        </button>
      </Link>
    </div>
  );
};
