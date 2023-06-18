import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../Assets/assets";
import { CircleBackGround } from "../Components/CircleBackGround";
import Faq from "../Components/Faq";
import Location from "../Components/Location";
import { pageTransition } from "../FramerMotion/PageTransitions";
import Faqs from "../Json/Faqs.json";
import { email } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "@formspree/react";
import { useGlobalData } from "../Hooks/useGlobalData";

const Contact = () => {
  const [state, handleSubmit, ResetFunction] = useForm("xrgvnyrk");
  const { showNotification } = useGlobalData();

  useEffect(() => {
    if (state.succeeded) {
      showNotification("success! We will get back to you in a few!", "success");
      ResetFunction();
    }
    if (state.errors.length > 0) {
      showNotification("an error occurred", "error");
    }
    console.log(state);
  }, [ResetFunction, showNotification, state]);

  return (
    <motion.div variants={pageTransition} className="px-[5%] sm:px-[12%]">
      <CircleBackGround />
      <img
        src={assets.contactBlob}
        alt="blob"
        className="absolute right-0 z-0 w-1/3 overflow-hidden"
      />
      <div className="mt-[10%] relative z-10">
        <h1 className="h2 sm:h1 text-center">Get in touch today!</h1>
        <div className="flex justify-between mt-10 items-stretch sm:items-center w-11/12 sm:w-3/4 mx-auto text-sm gap-x-4">
          <div className="sm:flex rounded-[28px] justify-between items-center p-4 sm:p-6 w-1/2 shadow-xl border bg-white">
            <img src={assets.MailLarge} alt="Mail" className="w-12 h-12 mr-2" />
            <div className="sm:flex mt-3 sm:mt-0">
              <p className="font-semibold sm:mr-2">Mail Us</p>
              <p className="text-secondaryFour ml-auto text-ellipsis whitespace-nowrap overflow-hidden">
                {email}
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
          onSubmit={handleSubmit}
        >
          <div className="w-[48%]">
            <p className="font-medium">Full Name *</p>
            <input
              type="text"
              name="FirstName"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="wedontmind nicknames"
              required
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Email *</p>
            <input
              type="email"
              name="Email"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="youremail@somedomain.com"
              required
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Company *</p>
            <input
              type="text"
              name="Company"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="you know how hard you worked for it"
              required
            />
          </div>
          <div className="w-[48%]">
            <p className="font-medium">Subject *</p>
            <input
              type="text"
              name="Subject"
              className="border p-3 w-full rounded-xl mt-3"
              placeholder="a h1 tag"
              required
            />
          </div>
          <div className="w-full">
            <p className="font-medium">Message *</p>
            <textarea
              name="Message"
              className="border p-3 w-full rounded-xl mt-3 h-[20vh]"
              placeholder="Hello there,I would like to talk about how to..."
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-full px-8 py-3 bg-secondaryThree text-white mx-auto hover:scale-110 transition-all mt-4"
          >
            {state.submitting ? (
              <FontAwesomeIcon icon={faSpinner} spin className="m-auto" />
            ) : (
              "send message"
            )}
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
