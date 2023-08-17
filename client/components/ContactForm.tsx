"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import { useForm } from "@formspree/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const ContactForm = () => {
  const [state, handleSubmit, ResetFunction] = useForm("xrgvnyrk");
  const { showNotification } = useGlobalData();

  useEffect(() => {
    if (state.succeeded) {
      showNotification("success! We will get back to you in a few!", "success");
      ResetFunction();
    }
    if (state.errors) {
      showNotification("an error occurred", "error");
    }
  }, [ResetFunction, showNotification, state]);

  return (
    <form
      className="rounded-3xl bg-white px-10 md:px-14 py-[4%] mt-10 shadow-lg text-sm flex flex-wrap justify-between gap-y-7"
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
  );
};
