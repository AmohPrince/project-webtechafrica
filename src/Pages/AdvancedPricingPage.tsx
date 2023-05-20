import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { BASIC_FEATURES, PREMIUM_FEATURES, PRICES } from "../App";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import { useAuth } from "../Hooks/UseAuth";
import { scrollToTop } from "../Util/Utilities";

const AdvancedPricingPage = () => {
  const { user } = useAuth();
  return (
    <section className="mx-[5%] sm:mx-[12%]">
      <CircleBackGround />
      <section className="z-10 mt-[8%] relative flex flex-col sm:flex-row justify-between w-full">
        <div className="border-b pb-5 w-full sm:w-1/2">
          <h1 className="h2">Advanced Plan</h1>
          <p className="default-paragraph mb-7">
            Unleash your online potential with the advanced package! This
            comprehensive plan goes above and beyond the basic option by
            delivering a fully customized e-commerce platform for you to sell
            all your goods. Your personal clients can easily access your site
            via a unique link, and we've got you covered for payments. Ready for
            the full rundown of all the advanced features?
          </p>
          {PREMIUM_FEATURES.map((feature) => (
            <div className="flex items-center mb-5">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#25b636" }}
                className="w-5 h-5 mr-5"
              />
              <p className="default-paragraph">{feature}</p>
            </div>
          ))}
        </div>
        <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-full sm:w-[45%] mt-5 sm:mt-0">
          <h2 className="h3">So how much will it cost me?</h2>
          <p className="default-paragraph mb-8">
            The advanced plan currently goes for as little as Ksh{" "}
            {PRICES.advanced} / month. This is inclusive of everything listed in
            both the basic and advanced plan.
          </p>
          <p className="font-bold text-5xl">
            Ksh {PRICES.advanced} <span className="text-base">/ month</span>
          </p>
          <Link to={user ? "/dashboard/new-website" : "/sign-in"}>
            <button className="rounded-full w-full text-xs text-white bg-orangeText py-4 mt-5 hover:bg-primaryOne transition-all hover:scale-110">
              Get me a website 🚀
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-[8%] flex justify-between flex-col sm:flex-row">
        <div className="w-full sm:w-3/5">
          <h2 className="h3">Is the basic plan a good choice for me ?</h2>
          <p className="default-paragraph my-5">
            Whilst it is always temptation to go for the advanced plan, it is
            possible that you might not need the features it offers. Take a look
            at the basic plan below
          </p>
          <div>
            {BASIC_FEATURES.map((feature, i) => (
              <p className="default-paragraph mb-5">
                <span className="text-black font-semibold">0{i + 1}</span>.
                {feature}
              </p>
            ))}
          </div>
          <Link to="/pricing/basic" onClick={scrollToTop}>
            <button className="rounded-full text-xs px-6 text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all">
              Check out basic plan
            </button>
          </Link>
        </div>
        <img
          src={assets.manSlidingImages}
          alt="man sliding images"
          className="ml-auto w-1/2 sm:w-1/4 mt-5 sm:mt-0"
        />
      </section>
    </section>
  );
};

export default AdvancedPricingPage;
