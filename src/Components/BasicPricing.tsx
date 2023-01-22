import React from "react";
import { Link } from "react-router-dom";
import Billed from "./Billed";

export const BasicPricing = ({ className }: { className?: string }) => {
  return (
    <div
      className={`py-12 px-8 bg-gray-100 rounded-2xl text-center ${
        !className ? "w-1/3" : className
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-4xl font-extrabold">Basic</h3>
        <p className="text-xs px-3 py-2 rounded-full bg-white font-semibold text-secondaryFour">
          Save 30%
        </p>
      </div>
      <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
        <p className="font-extrabold text-4xl mb-4">
          kes.899 <span className="text-sm">/ month</span>
        </p>
        <Billed text="Billed as Ksh 9,699 per year" />
      </div>
      <div className="text-secondaryFour">
        <p>
          <span className="font-semibold text-black">Unlimited</span> customer
          support
        </p>
        <p>Hosting</p>
        <p>Custom domain name</p>
        <p>
          Complete{" "}
          <span className="font-semibold text-black">
            website design and development
          </span>
        </p>
      </div>
      <Link to="/pricing/basic">
        <button className="py-3 px-7 rounded-full border mt-8 hover:bg-orange transition-all text-sm font-bold hover:border-orange hover:scale-105">
          Get Started
        </button>
      </Link>
    </div>
  );
};
