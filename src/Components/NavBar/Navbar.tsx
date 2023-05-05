import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoColor } from "../../Assets/assets";
import { useAuth } from "../../Hooks/UseAuth";
import { getBaseUrl } from "../../Util/Utilities";
import HamburgerMenu from "../HamburgerMenu";
import { Logo } from "../Logo";
import { SmallScreenMenu } from "./SmallScreenMenu";

const Navbar = () => {
  const { pathname } = useLocation();
  const basePath = getBaseUrl(pathname);
  const { user } = useAuth();
  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center fixed right-0 left-0 py-6 px-2 sm:px-0 sm:py-0 top-0 sm:relative bg-white sm:bg-transparent z-50`}
    >
      <div className="flex items-center">
        <Logo
          color={LogoColor.primary}
          className="w-[60px] h-[40px] object-cover"
        />
        <h3 className="h4 sm:h3">WebTech Africa</h3>
      </div>
      <div className="hidden sm:flex text-sm">
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
          <Link
            to="/contact"
            className={`active:text-primaryOne ${
              basePath === "/contact" && "text-primaryOne font-bold"
            }`}
          >
            Contact
          </Link>
        </div>
        {user ? (
          <Link
            className={`px-4 rounded-full ml-10 font-semibold flex items-center ${
              basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
            }`}
            to="/dashboard"
          >
            My Dashboard 🚀
          </Link>
        ) : (
          <Link
            className={`bg-white px-8 rounded-full ml-10 font-semibold flex items-center ${
              basePath !== "/" && "bg-primaryOne text-white"
            }`}
            to="/sign-in"
          >
            Sign in
          </Link>
        )}
      </div>
      <div className="absolute right-0">
        <HamburgerMenu
          location="menu"
          setShowingSmallScreenMenu={setShowingMenu}
        />
      </div>
      {showingMenu && <SmallScreenMenu />}
    </nav>
  );
};

export default Navbar;
