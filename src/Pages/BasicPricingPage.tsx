import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";

const BasicPricingPage = () => {
  return (
    <>
      <CircleBackGround />
      <section className="z-10 mt-[8%] relative flex justify-between">
        <div className="border-b pb-5 w-1/2">
          <h1 className="h2">Basic Plan</h1>
          <p className="default-paragraph mb-7">
            The basic plan offers the basic but powerful services that ensures
            you get yourself a website online.
          </p>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Unlimited customer support</p>
          </div>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Hosting</p>
          </div>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">Custom domain name</p>
          </div>
          <div className="flex items-center mb-5">
            <img src={assets.Tick} alt="tick" className="w-5 h-5 mr-5" />
            <p className="default-paragraph">
              Complete website design and development
            </p>
          </div>
        </div>
        <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-[45%]">
          <h2 className="h3">So how much will it cost me?</h2>
          <p className="default-paragraph mb-8">
            The basic plan currently goes for as little as Ksh 899 / month. This
            is inclusive of everything listed in the basic plan. All you have is
            sit and watch
          </p>
          <p className="font-bold text-5xl">
            Ksh 899 <span className="text-base">/ month</span>
          </p>
          <button className="rounded-full w-full text-xs text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all hover:scale-110">
            Add to cart 🚀
          </button>
        </div>
      </section>
      <section className="mt-[8%] w-3/5">
        <h2 className="h3">Is the advanced plan a better choice for me ?</h2>
        <p className="default-paragraph my-5">
          The advanced plan package offers more, for example social media
          management and the ability to sell products online. Sounds like you?
        </p>
        <div>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">01</span>. Social media
            management
          </p>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">02</span>. Custom Ads
            management
          </p>
          <p className="default-paragraph mb-5">
            <span className="text-black font-semibold">03</span>. Sell products
            online
          </p>
        </div>
        <Link to="/pricing/advanced">
          <button className="rounded-full text-xs px-6 text-white bg-orangeText py-4 mt-5 hover:bg-primaryOneLight transition-all">
            Check out advanced plan
          </button>
        </Link>
      </section>
    </>
  );
};

export default BasicPricingPage;
