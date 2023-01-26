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
  };
  return (
    <motion.div variants={pageTransition}>
      <CircleBackGround />
      <img
        src={assets.contactBlob}
        alt="contact blob"
        className="absolute right-0 z-0 w-1/3"
      />
      <div className="mt-[10%] relative z-10">
        <h1 className="h1 text-center">Get in touch today!</h1>
        <div className="flex justify-between mt-10 items-center w-3/4 mx-auto text-sm">
          <div className="flex rounded-[28px] items-center p-6 w-[49%] shadow-xl border bg-white">
            <img src={assets.MailLarge} alt="Mail" className="w-12 h-12" />
            <p className="font-semibold mx-3">Mail Us</p>
            <p className="text-secondaryFour ml-auto">
              customercare@webtechafrica.com
            </p>
          </div>
          <div className="flex rounded-[28px] items-center p-6 bg-white w-[49%] shadow-xl border">
            <img src={assets.Phone} alt="Mail" className="w-12 h-12" />
            <p className="font-semibold ml-3">Call Us</p>
            <p className="text-secondaryFour ml-auto">+254 7194 280 19</p>
          </div>
        </div>
        <form
          className="rounded-3xl bg-white px-14 py-[4%] mt-10 shadow-lg text-sm flex flex-wrap justify-between gap-y-7"
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
          <h3 className="h3 w-3/4 text-center mx-auto">
            We help small businesses with big hearts find clients they didn't
            even know they had.
          </h3>
          <div className="w-1/4 flex flex-col items-center border rounded-3xl py-9 mx-auto mt-10 shadow-xl">
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
          <h3 className="h3 text-white text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="w-1/2 mx-auto">
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
