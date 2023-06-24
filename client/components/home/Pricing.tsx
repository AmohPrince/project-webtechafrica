import { faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GreyButton } from "../buttons/GreyButton";
import { BasicPricing } from "../prices/BasicPricing";
import { PremiumPricing } from "../prices/PremiumPricing";

export const Pricing = () => {
  return (
    <section className="flex flex-col md:flex-row gap-x-3 items-start mt-[10%] px-[5%] md:px-[12%]">
      <div className="w-full md:w-1/3 text-left mb-5">
        <GreyButton text="Pricing" className="ml-auto md:ml-0 mr-auto" />
        <h3 className="h3 mt-7 mb-6">
          Simple and <br />
          flexible pricing
        </h3>
        <p className="default-paragraph">
          Simplify your budgeting with our transparent and adaptable pricing
          options.
        </p>
        <h4 className="h4 my-4">Accepted Payment Methods</h4>
        <div className="bg-gray-50 flex py-2 px-2 rounded-md">
          <FontAwesomeIcon
            icon={faCcPaypal}
            className="w-1/3 h-[55px] text-primaryOne"
          />
          <FontAwesomeIcon
            icon={faCcVisa}
            className="w-1/3 h-[55px] text-primaryOne"
          />
        </div>
      </div>
      <div className="md:flex justify-between gap-x-2 w-full">
        <BasicPricing className="md:w-1/2 mb-5 md:mb-0" />
        <PremiumPricing className="md:w-1/2" />
      </div>
    </section>
  );
};
