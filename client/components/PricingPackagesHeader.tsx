"use client";

import { useGlobalData } from "@/hooks/useGlobalData";

export const PricingPackagesHeader = () => {
  const { price } = useGlobalData();

  return (
    <div className="flex border-b px-14 py-7 justify-between">
      <h3 className="h4 md:h3 w-1/3">Features</h3>
      <div className="text-center w-1/4">
        <h3 className="h4 md:h3">Basic</h3>
        <p className="font-semibold text-base">
          {price.basic} {price.currency} / month
        </p>
      </div>
      <div className="text-center w-1/4">
        <h3 className="h4 md:h3">Premium</h3>
        <p className="font-semibold text-base">
          {price.advanced} {price.currency} / month
        </p>
      </div>
    </div>
  );
};
