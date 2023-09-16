"use client";

import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlackIshButton from "../buttons/BlackIshButton";
import { GreyButton } from "../buttons/GreyButton";
import { HowWeWorkLink } from "../HowWeWorkLink";

export const HowWeWork = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  return (
    <section className="text-center mt-[10%] px-[5%] md:px-[12%]">
      <GreyButton text="How we work" />
      <h3 className="h2 mt-8 mb-12">Work smarter, work faster..</h3>
      <div className="flex justify-between gap-x-2">
        <button
          className={`bg-gray-200 py-5 md:px-16 rounded-md ${
            activeButton === 1 ? "active" : ""
          }`}
          onClick={() => setActiveButton(1)}
        >
          01. Make a site request
        </button>
        <button
          className={`bg-gray-200 py-5 md:px-10 rounded-md ${
            activeButton === 2 ? "active" : ""
          }`}
          onClick={() => setActiveButton(2)}
        >
          02. Negotiate your pricing
        </button>
        <button
          className={`bg-gray-200 py-5 md:px-16 rounded-md ${
            activeButton === 3 ? "active" : ""
          }`}
          onClick={() => setActiveButton(3)}
        >
          03. Track your progress
        </button>
      </div>
      {activeButton === 1 && (
        <div className="pt-[5%] text-left md:flex items-start">
          <div className="w-full md:w-3/5">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Person}
                alt="person"
                className="w-16 h-16 mr-5"
              />
              <h4 className="h4 md:h3">
                Make a site request <br /> today!
              </h4>
            </div>
            <p className="default-paragraph w-[95%] my-5">
              We strongly encourage clients to reach out to us either by phone
              or by filling out the form on our website. This will allow us to
              gather all the necessary information to build the perfect website
              tailored to your needs and preferences. Your input is crucial in
              creating a website that meets your goals and exceeds your
              expectations. So please don't hesitate to contact us, we are here
              to help and guide you through the process.
            </p>
            <Link href="/contact">
              <BlackIshButton text="Request site" />
            </Link>
          </div>
          <Image
            src={assets.Accounts}
            alt="account"
            className="hidden md:inline w-2/5"
          />
        </div>
      )}
      {activeButton === 2 && (
        <div className="pt-[5%] text-left flex items-start">
          <Image
            src={assets.BlueCard}
            alt="account"
            className="hidden md:inline w-2/5 mr-3"
          />
          <div className="flex justify-end flex-col">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Phone}
                alt="Phone"
                className="mr-3 w-16 h-16"
              />
              <h4 className="h4 md:h3">50% upfront, 50% on Job completion</h4>
            </div>
            <p className="default-paragraph my-5">
              The easiest way to reduce risk and ensure fast site development.
              Immediately after making your initial deposit your site will begin
              being developed by our team of highly talented developers.
            </p>
            <Link href={"/contact"} className="ml-auto">
              <BlackIshButton text="Create a website now !" />
            </Link>
          </div>
        </div>
      )}
      {activeButton === 3 && (
        <div className="pt-[5%] text-left flex items-start justify-between">
          <div className="md:w-1/2">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Clock}
                alt="Phone"
                className="mr-3 w-16 h-16"
              />
              <h4 className="h4 md:h3">Sit back and watch the magic happen</h4>
            </div>
            <div className="flex my-5 gap-x-2">
              <p className="default-paragraph ">
                Get ready to be amazed! With our unique system, clients can sit
                back and watch as their website is built before their eyes.
                Whether they choose to track their progress through a convenient
                link or view it directly on their dashboards, you'll be able to
                see the magic happen in real-time.
              </p>
              <Image
                src={assets.Magic}
                alt="account"
                className="md:hidden w-2/5 object-cover"
              />
            </div>
            <HowWeWorkLink />
          </div>
          <Image
            src={assets.Magic}
            alt="account"
            className="hidden md:inline w-2/5 ml-3 object-cover"
          />
        </div>
      )}
    </section>
  );
};
