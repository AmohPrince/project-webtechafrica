import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets";

export const CheapAndPowerful = () => {
  return (
    <section className="mt-[6%] relative items-stretch mx-[5%] md:mx-[12%]">
      <div className="w-11/12 md:w-4/5 bg-gray-50 py-[8%] pl-[5%] rounded-xl md:rounded-[50px]">
        <div className="w-full md:w-3/5">
          <h3 className="h3">
            Cheap and powerful websites for your business to <br /> ensure
            people notice you online
          </h3>
          <p className="default-paragraph mt-6 mb-10 text-md">
            We have a team of expert designers and developers who work
            tirelessly to deliver top-notch designs and user experiences that
            exceed our client's expectations. Our goal is to help businesses
            succeed online and we take pride in achieving it.
          </p>
          <div className="flex items-center">
            <Image src={assets.Coin} alt="coin" className="mr-5 w-16 h-16" />
            <div>
              <h4 className="h4">Cost effective</h4>
              <p className="default-paragraph text-sm">
                We offer affordable web development solutions for businesses
                looking to establish a strong online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={assets.Dashboard}
        alt="dashboard"
        className="hidden md:inline absolute top-1/2 -translate-y-1/2 -right-14 w-1/2 z-10"
      />
      <div className="bg-primaryOne h-full w-1/4 absolute top-0 right-0 rounded-l-[50px] translate-x-full z-0" />
    </section>
  );
};
