import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../Assets/assets";

const FreeTrial = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState<string>("");
  return (
    <section
      className={`py-4 sm:py-11 px-6 sm:px-16 sm:flex justify-between mt-[10%] text-white free-trial rounded-2xl ${className}`}
    >
      <div className="w-full sm:w-1/2">
        <h2 className="h2">
          Start your free trial <br />
          today
        </h2>
        <p>
          Unleash the true potential of your business with our one month free
          trial, get the second month of your basic subscription for free! start
          today and see the difference!
        </p>
        <div className="flex gap-x-2 mt-8 justify-between items-center">
          <input
            type="email"
            className="bg-emailInput py-3 px-8 focus:outline-none rounded-full placeholder:text-white w-3/4 sm:w-auto"
            placeholder="your email here..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link
            to={`/sign-up/?email=${email}`}
            className="text-xs bg-white px-7 py-4 text-primaryOne rounded-full font-bold"
          >
            <button type="submit">Create account</button>
          </Link>
        </div>
      </div>
      <img
        src={assets.Departments}
        alt="Departments"
        className="w-1/2 mt-7 sm:mt-0 ml-auto sm:ml-0"
      />
    </section>
  );
};

export default FreeTrial;
