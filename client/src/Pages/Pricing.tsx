import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { AdvancedPricing } from "../Components/AdvancedPricing";
import { BasicPricing } from "../Components/BasicPricing";
import { BlankTableRow } from "../Components/BlankTableRow";
import { CircleBackGround } from "../Components/CircleBackGround";
import { SecondaryButton } from "../Components/SecondaryButton";
import { pageTransition } from "../FramerMotion/PageTransitions";
import Row from "./Row";

const Pricing = () => {
  return (
    <motion.div variants={pageTransition} className="px-[5%] sm:px-[12%]">
      <CircleBackGround />
      <section className="mt-[8%]">
        <h1 className="h2 sm:h1 text-center">Pricing</h1>
        <p className="default-paragraph text-center mt-3 w-5/6 mx-auto bg-white">
          Our pricing plans are designed to be flexible and affordable, with
          options that can accommodate the needs of businesses of all sizes,
          regardless of their budget or requirements. We work closely with our
          clients to understand their specific needs and provide them with the
          best plan that will meet their budget and deliver optimal results.
        </p>
      </section>
      <div className="mt-10 sm:flex justify-between sm:w-2/3 mx-auto gap-x-4">
        <BasicPricing className="sm:w-1/2 mb-7" />
        <AdvancedPricing className="sm:w-1/2" />
      </div>
      <section className="mt-[8%]">
        <h4 className="h4 mb-12 text-center">Compare pricing packages</h4>
        <div className="rounded-[30px] bg-secondaryOne pb-6">
          <div className="flex border-b px-14 py-7 justify-between">
            <h3 className="h3 w-1/3">Features</h3>
            <div className="text-center w-1/4">
              <h3 className="h4 sm:h3">Basic</h3>
              <p className="font-semibold text-base">Ksh. 899 / month</p>
            </div>
            <div className="text-center w-1/4">
              <h3 className="h4 sm:h3">Advanced</h3>
              <p className="font-semibold text-base">Ksh. 1499 / month</p>
            </div>
          </div>
          <BlankTableRow name="Web Development" />
          <Row text="Unlimited customer support" basic advanced />
          <Row text="Hosting" basic advanced />
          <Row text="Custom domain name" basic advanced />
          <Row text="Complete website design and development" basic advanced />
          <BlankTableRow name="Social Media and Ads" />
          <Row text="Custom Ads design and management" advanced />
          <Row text="Social media management" advanced />
          <BlankTableRow name="Online business" />
          <Row text="Sell products online" advanced />
          <div className="flex justify-between px-14 pt-4">
            <div className="w-1/3" />
            <Link className="w-1/4 flex justify-center" to="/pricing/basic">
              <SecondaryButton text="Get Started" />
            </Link>
            <Link className="w-1/4 flex justify-center" to="/pricing/advanced">
              <SecondaryButton text="Get Started" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
