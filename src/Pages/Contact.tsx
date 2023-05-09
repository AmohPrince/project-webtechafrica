import React from "react";
import { motion } from "framer-motion";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import Faq from "../Components/Faq";
import Location from "../Components/Location";
import { pageTransition } from "../FramerMotion/PageTransitions";
import Faqs from "../Json/Faqs.json";

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target.value);
    //TODO submit to my email
  };
  return (
    <motion.div variants={pageTransition} className="px-[5%] sm:px-[12%]">
      <CircleBackGround />
      <svg
        width="702"
        height="1597"
        viewBox="0 0 702 1597"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 z-0 w-1/3 overflow-hidden"
      >
        <path
          d="M560.199 85.4764C624.195 47.6996 705 93.8337 705 168.147L705 1196.74C705 1376.5 512.055 1490.26 354.761 1403.25L-5.27596e-05 1207L-2.51538e-05 575.453C-2.08389e-05 476.738 52.1637 385.371 137.172 335.19L560.199 85.4764Z"
          fill="url(#paint0_linear_1_1234)"
        />
        <mask
          id="mask0_1_1234"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="705"
          height="1207"
        >
          <path
            d="M705 0L705 1207L-5.27596e-05 1207L-1.94389e-05 444.71C-1.86656e-05 427.019 9.34832 410.645 24.5829 401.652L705 0Z"
            fill="#F9F8FF"
          />
        </mask>
        <g mask="url(#mask0_1_1234)">
          <ellipse
            rx="311.839"
            ry="391.875"
            transform="matrix(0.439055 0.89846 -0.947572 0.319541 709.245 997.426)"
            fill="url(#paint1_linear_1_1234)"
            fill-opacity="0.44"
            style={{
              mixBlendMode: "multiply",
            }}
          />
          <ellipse
            rx="267.865"
            ry="218.492"
            transform="matrix(0.993649 -0.112529 0.00197165 0.999998 242.091 344.634)"
            fill="url(#paint2_linear_1_1234)"
            fill-opacity="0.42"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_1234"
            x1="705"
            y1="254.189"
            x2="140.116"
            y2="1283.87"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#684FFF" />
            <stop offset="1" stop-color="#B871FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1234"
            x1="311.839"
            y1="0"
            x2="311.839"
            y2="783.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#684FFF" />
            <stop offset="1" stop-color="#FFF8F0" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_1234"
            x1="267.865"
            y1="0"
            x2="267.865"
            y2="436.983"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#684FFF" />
            <stop offset="1" stop-color="#FFF8F0" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mt-[10%] relative z-10">
        <h1 className="h2 sm:h1 text-center">Get in touch today!</h1>
        <div className="flex justify-between mt-10 items-stretch sm:items-center w-11/12 sm:w-3/4 mx-auto text-sm gap-x-4">
          <div className="sm:flex rounded-[28px] justify-between items-center p-4 sm:p-6 w-1/2 shadow-xl border bg-white">
            <img src={assets.MailLarge} alt="Mail" className="w-12 h-12 mr-2" />
            <div className="sm:flex mt-3 sm:mt-0">
              <p className="font-semibold sm:mr-2">Mail Us</p>
              <p className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden">
                customercare@webtechafrica.com
              </p>
            </div>
          </div>
          <div className="sm:flex rounded-[28px] items-center p-4 sm:p-6 bg-white w-1/2 shadow-xl border">
            <img src={assets.Phone} alt="Mail" className="w-12 h-12 mr-2" />
            <div className="sm:flex mt-3 sm:mt-0">
              <p className="font-semibold mr-2">Call Us</p>
              <p className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden">
                +254 7194 280 19
              </p>
            </div>
          </div>
        </div>
        <form
          className="rounded-3xl bg-white px-10 sm:px-14 py-[4%] mt-10 shadow-lg text-sm flex flex-wrap justify-between gap-y-7"
          onSubmit={handleFormSubmit}
        >
          <div className="w-[48%]">
            <p className="font-medium">Full Name *</p>
            <input
              type="text"
              name="FirstName"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="wedontmind nicknames"
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Email *</p>
            <input
              type="email"
              name="Email"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="youremail@somedomain.com"
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Company *</p>
            <input
              type="text"
              name="Company"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="you know how hard you worked for it"
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Subject *</p>
            <input
              type="text"
              name="Subject"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="a h1 tag"
            />
          </div>
          <div className="w-full">
            <p className="font-medium">Message *</p>
            <textarea
              name="Message"
              className="border p-3 w-full rounded-xl mt-3 h-[20vh]"
              placeholder="Hello there,I would like to talk about how to..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full px-8 py-3 bg-secondaryThree text-white mx-auto hover:scale-110 transition-all mt-4"
          >
            Send Message
          </button>
        </form>
        <section className="mt-[10%]">
          <h3 className="h3 sm:w-3/4 text-center mx-auto">
            We help small businesses with big hearts find clients they didn't
            even know they had.
          </h3>
          <div className="w-2/3 sm:w-1/4 flex flex-col items-center border rounded-3xl py-9 mx-auto mt-10 shadow-xl">
            <Location color="#FAD5E9" />
            <h4 className="font-bold h4 text-base mt-3">Nairobi</h4>
            <p className="default-paragraph text-center text-sm">
              00100 Moi avenue,
              <br /> Nairobi
            </p>
            <p className="bg-purple rounded-full py-3 px-7 mt-2 font-semibold text-purpleText">
              (071) 942 – 8019
            </p>
          </div>
        </section>
        <section className="bg-primaryOne mt-[10%] faqs py-[10%]">
          <h3 className="h2 sm:h3 text-white text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="w-2/3 sm:w-1/2 mx-auto">
            {Faqs.map((faq, i) => (
              <Faq answer={faq.answer} question={faq.Question} key={i} />
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
