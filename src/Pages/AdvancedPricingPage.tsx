import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";

const AdvancedPricingPage = () => {
  return (
    <>
      <CircleBackGround />
      <section className="z-10 mt-[8%] relative flex justify-between">
        <div className="border-b pb-5 w-1/2">
          <h1 className="h2">Advanced Plan</h1>
          <p className="default-paragraph mb-7">
            The advanced package offers more options than the basic package. Do
            you know what it offers?
          </p>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Social media management</p>
          </div>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Custom Ads management</p>
          </div>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Sell products online</p>
          </div>
        </div>
        <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-[45%]">
          <h2 className="h3">So how much will it cost me?</h2>
          <p className="default-paragraph mb-8">
            The advanced plan currently goes for as little as Ksh 1499 / month.
            This is inclusive of everything listed in both the basic and
            advanced plan.
          </p>
          <p className="font-bold text-5xl">
            Ksh 1499 <span className="text-base">/ month</span>
          </p>
          <button className="rounded-full w-full text-xs text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all hover:scale-110">
            Add to cart 🚀
          </button>
        </div>
      </section>
      <section className="mt-[8%] w-3/5">
        <h2 className="h3">Is the basic plan a good choice for me ?</h2>
        <p className="default-paragraph my-5">
          Whilst it is always temptation to go for the advanced plan, it is
          possible that you might not need the features it offers. Take a look
          at the basic plan below
        </p>
        <div>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">01</span>. Unlimited
            customer support
          </p>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">02</span>. Hosting
          </p>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">03</span>. Custom domain
            name
          </p>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">04</span>. Complete
            website design and development
          </p>
        </div>
        <Link to="/pricing/basic">
          <button className="rounded-full text-xs px-6 text-white bg-orangeText py-4 mt-5 hover:bg-primaryOneLight transition-all">
            Check out basic plan
          </button>
        </Link>
      </section>
    </>
  );
};

export default AdvancedPricingPage;
