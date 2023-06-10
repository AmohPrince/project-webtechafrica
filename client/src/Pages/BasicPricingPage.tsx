import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { BASIC_FEATURES, PREMIUM_FEATURES } from "../App";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import { useAuth } from "../Hooks/UseAuth";
import { useGlobalData } from "../Hooks/useGlobalData";
import { scrollToTop } from "../Util/Utilities";

const BasicPricingPage = () => {
  const { user } = useAuth();
  const { price } = useGlobalData();
  return (
    <section className="mx-[5%] sm:mx-[12%]">
      <CircleBackGround />
      <section className="z-10 mt-[8%] relative flex justify-between flex-col sm:flex-row">
        <div className="border-b pb-5 w-full sm:w-1/2">
          <h1 className="h2">Basic Plan</h1>
          <p className="default-paragraph mb-7">
            The basic plan offers the basic but powerful services that ensures
            you get yourself a website online.
          </p>
          {BASIC_FEATURES.map((features) => (
            <div className="flex items-center mb-5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#25b636" }}
                className="w-5 h-5 mr-5"
              />
              <p className="default-paragraph">
                {features.replace(/<\/?sp>|,/g, "")}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-full mt-5 sm:mt-0 sm:w-[45%]">
          <h2 className="h3">So how much will it cost me?</h2>
          <p className="default-paragraph mb-8">
            The basic plan currently goes for as little as {price.currency}{" "}
            {price.basic} / month. This is inclusive of everything listed in the
            basic plan. All you have is sit and watch
          </p>
          <p className="font-bold text-5xl">
            {price.currency} {price.basic}{" "}
            <span className="text-base">/ month</span>
          </p>
          <Link to={user ? "/dashboard/new-website" : "/sign-in"}>
            <button className="rounded-full w-full text-xs text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all hover:scale-110">
              Get Website
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-[8%] flex justify-between flex-col sm:flex-row items-end">
        <div className="w-full sm:w-3/5">
          <h2 className="h3">Is the advanced plan a better choice for me ?</h2>
          <p className="default-paragraph my-5">
            The advanced plan package offers more, for example social media
            management and the ability to sell products online. Sounds like you?
          </p>
          {PREMIUM_FEATURES.map((feature, i) => (
            <div className="flex items-center mb-5">
              <p className="default-paragraph">
                <span className="text-black font-semibold">0{i + 1}</span>.{" "}
                {feature.replace(/<\/?sp>|,/g, "")}
              </p>
            </div>
          ))}
          <Link to="/pricing/advanced" onClick={scrollToTop}>
            <button className="rounded-full text-xs px-6 text-white bg-orangeText py-4 mt-5 hover:bg-primaryOneLight transition-all">
              Check out advanced plan
            </button>
          </Link>
        </div>
        <img
          src={assets.womanWritingCode}
          alt="Woman writing code"
          className="ml-auto mt-5 sm:mt-0 w-1/2 sm:w-1/4"
        />
      </section>
    </section>
  );
};

export default BasicPricingPage;
