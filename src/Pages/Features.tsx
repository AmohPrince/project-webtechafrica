import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import { FeaturesComponent } from "../Components/Home/FeaturesComponent";
import FreeTrial from "../Components/Home/FreeTrial";
import { GreyButton } from "../Components/GreyButton";
import { pageTransition } from "../FramerMotion/PageTransitions";

const Features = () => {
  return (
    <motion.div variants={pageTransition}>
      <CircleBackGround />
      <section className="mt-[10%]">
        <h1 className="h2 sm:h1 text-center">Features</h1>
        <p className="default-paragraph text-center w-3/4 sm:w-1/2 mx-auto mt-5">
          We offer advanced analytics capabilities to monitor website engagement
          and manage ads effectively, ensuring the growth of your brand.
        </p>
      </section>
      <FeaturesComponent />
      <section className="border-t mt-[8%] pt-[8%]">
        <GreyButton text="One Platform" />
        <h2 className="h3 sm:h2 text-center mt-8">
          One platform to rule <br /> them all
        </h2>
        <div className="sm:flex justify-between">
          <div className="text-center sm:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.allInOne}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h3 className="h4 mt-3">All-in-one platform</h3>
            <p className="default-paragraph my-6">
              We offer a comprehensive, all-in-one platform that covers all your
              web development and online presence needs.
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center sm:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.advancedCharts}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h3 className="h4 mt-3">Advanced charts</h3>
            <p className="default-paragraph my-6">
              We provide advanced charting features that allows you to visualize
              your data in a clear and meaningful way.
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center sm:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.Magic}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h3 className="h4 mt-3">Multiple integrations</h3>
            <p className="default-paragraph my-6">
              We are excited to offer you an unparalleled level of service
              through our global partnerships. Get ready for an experience
              beyond your imagination. Keep an eye out for updates!
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <FreeTrial />
    </motion.div>
  );
};

export default Features;
