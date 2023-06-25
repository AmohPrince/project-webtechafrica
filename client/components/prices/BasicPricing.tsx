import { useGlobalData } from "@/hooks/useGlobalData";
import Link from "next/link";
import React from "react";
import { BASIC_FEATURES, getYearly, scrollToTop } from "../../util/utilities";
import Billed from "./Billed";
import { FeatureSpan } from "./FeatureSpan";
import Image from "next/image";

export const BasicPricing = ({ className }: { className: string }) => {
  const { price } = useGlobalData();

  return (
    <div
      className={`py-12 px-4 md:px-8 bg-gray-100 rounded-2xl text-center relative ${className}`}
    >
      <Image
        src="/fiftypercent.png"
        width={100}
        height={100}
        alt="50% off"
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-extrabold">Basic</h3>
        <p className="text-xs px-3 py-2 rounded-full bg-white font-semibold text-secondaryFour">
          Save{" "}
          {(((price.advanced - price.basic) / price.advanced) * 100).toFixed(
            0
          ) + "%"}
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          {price.basic} {price.currency}{" "}
          <span className="text-sm">/ month</span>
        </p>
        <Billed
          text={`Billed as ${getYearly(price.basic)} ${
            price.currency
          } per year`}
        />
      </div>
      <div className="flex flex-col items-center text-secondaryFour">
        {BASIC_FEATURES.map((feature) => feature.text).map((feature) => {
          const str = feature.split(" ");
          return (
            <p key={feature}>
              {str.map((str) => (
                <FeatureSpan text={str} source="Basic" key={str} />
              ))}
            </p>
          );
        })}
      </div>
      <Link href="/pricing/basic" onClick={scrollToTop}>
        <button className="py-3 px-7 rounded-full border mt-8 hover:bg-orange transition-all text-sm font-bold hover:border-orange">
          Learn more
        </button>
      </Link>
    </div>
  );
};
