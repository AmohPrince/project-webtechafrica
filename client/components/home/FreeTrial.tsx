"use client";

import { assets } from "@/public/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const FreeTrial = ({ className }: { className?: string }) => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  return (
    <section
      className={`py-4 md:py-11 px-6 md:px-16 md:flex justify-between mt-[10%] text-white free-trial rounded-2xl ${className}`}
    >
      <div className="w-full md:w-1/2">
        <h2 className="h2">
          Make your website request
          <br />
          today
        </h2>
        <p>
          Unleash the true potential of your business by getting a site! Give us
          a call or text us on whatsapp and lets work together!
        </p>
        <form
          className="flex gap-x-2 mt-8 justify-between items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const userEmail = emailRef.current?.value;
            router.push(`/contact/?email=${userEmail}`);
          }}
        >
          <input
            type="email"
            className="bg-emailInput py-3 px-8 focus:outline-none rounded-full placeholder:text-white flex-1 md:w-auto"
            placeholder="your email here..."
            ref={emailRef}
            required
          />
          <button
            className="text-xs bg-white px-7 py-4 text-primaryOne rounded-full font-bold"
            type="submit"
          >
            Contact Us
          </button>
        </form>
      </div>
      <Image
        src={assets.Departments}
        alt="Departments"
        className="w-1/2 mt-7 md:mt-0 ml-auto md:ml-0"
      />
    </section>
  );
};

export default FreeTrial;
