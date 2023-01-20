import React from "react";
import { AdvancedPricing } from "../Components/AdvancedPricing";
import { BasicPricing } from "../Components/BasicPricing";
import { CircleBackGround } from "../Components/CircleBackGround";

const Pricing = () => {
  return (
    <>
      <CircleBackGround />
      <section className="mt-[8%]">
        <h1 className="h1 text-center">Pricing</h1>
        <p className="default-paragraph text-center mt-3 w-5/6 mx-auto bg-white">
          Our pricing plans are designed to be flexible and affordable, with
          options that can accommodate the needs of businesses of all sizes,
          regardless of their budget or requirements. We work closely with our
          clients to understand their specific needs and provide them with the
          best plan that will meet their budget and deliver optimal results.
        </p>
      </section>
      <div className="mt-10 flex justify-between w-2/3 mx-auto">
        <BasicPricing className="w-[47%]" />
        <AdvancedPricing className="w-[47%] bg-primaryOne text-white" />
      </div>
    </>
  );
};

export default Pricing;
