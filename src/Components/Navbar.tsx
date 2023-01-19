import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../Assets/assets";
import { getBaseUrl } from "../Util/Utilities";

const Navbar = () => {
  const { pathname } = useLocation();
  const basePath = getBaseUrl(pathname);

  return (
    <section className="flex justify-between items-center z-10 relative">
      <div className="flex">
        <img
          src={assets.Logo}
          alt="Web vira"
          className="w-[60px] h-[40px] object-cover"
        />
        <h3 className="h3">WebTech Africa</h3>
      </div>
      <div className="flex text-sm">
        <div
          className={`flex transition-all rounded-full px-9 py-3 ${
            basePath !== "/" ? "navbar-gray" : "text-white"
          } navbar gap-x-11`}
        >
          <Link
            to="/"
            className={`active:text-primaryOne ${
              basePath === "/" && "text-primaryOne font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`active:text-primaryOne ${
              basePath === "/about-us" && "text-primaryOne font-bold"
            }`}
          >
            About
          </Link>
          <Link
            to="/features"
            className={`active:text-primaryOne ${
              basePath === "/features" && "text-primaryOne font-bold"
            }`}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className={`active:text-primaryOne ${
              basePath === "/pricing" && "text-primaryOne font-bold"
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className={`active:text-primaryOne ${
              basePath === "/blog" && "text-primaryOne font-bold"
            }`}
          >
            Blog
          </Link>
        </div>
        <button
          className={`bg-white px-8 rounded-full ml-10 font-semibold ${
            basePath !== "/" && "bg-primaryOne text-white"
          }`}
        >
          Sign in
        </button>
      </div>
    </section>
  );
};

export default Navbar;
