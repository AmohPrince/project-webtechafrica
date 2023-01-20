import React from "react";
import { assets } from "../Assets/assets";

const FreeTrial = () => {
  return (
    <section className="mt-[10%] relative text-white">
      <img
        src={assets.FreeTrial}
        alt="free trial"
        className="absolute top-0 left-0 right-0 z-0"
      />
      <div className="relative z-10 py-11 px-16 flex justify-between">
        <div className="w-1/2">
          <h2 className="h2">
            Start your free trial <br />
            today
          </h2>
          <p>
            Unleash the true potential of your business with our one month free
            trial, start today and see the difference!
          </p>
          <div className="flex mt-8 justify-between">
            <input
              type="email"
              className="email-input py-3 px-8 focus:outline-none rounded-full placeholder:text-white"
              placeholder="your email here..."
            />
            <button className="text-xs bg-white px-7 text-primaryOne rounded-full font-bold">
              Get started
            </button>
          </div>
        </div>
        <img src={assets.Departments} alt="Departments" className="w-1/2" />
      </div>
    </section>
  );
};

export default FreeTrial;
