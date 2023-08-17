"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { LogoColor } from "@/public/assets";
import { getBaseUrl } from "@/util/utilities";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DashboardButton } from "./buttons/DashboardButton";
import { Logo } from "./Logo";
import { SmallScreenMenu } from "./SmallScreenMenu";

const Navbar = () => {
  const pathname = usePathname();
  const basePath = getBaseUrl(pathname);
  const [showingMenu, setShowingMenu] = useState(false);

  const screenSize = useScreenSize();

  return (
    <nav className="flex justify-between items-center sticky top-0 md:relative bg-primaryOne md:bg-transparent z-40 md:mt-14 mb-12 py-3 md:py-0 px-[3%] md:px-[12%]">
      <div className="flex items-center">
        <Logo
          color={
            screenSize === "sm"
              ? LogoColor.menu
              : screenSize === "md"
              ? LogoColor.menu
              : LogoColor.primary
          }
          className="w-[60px] h-[40px] object-cover"
        />
        <p className="text-white md:text-black h4 md:h3">WebTech Africa</p>
      </div>
      <div className="hidden md:flex text-sm">
        <ul
          className={`flex transition-all rounded-full px-9 py-3 ${
            basePath !== "/" ? "navbar-gray" : "text-white"
          } navbar gap-x-11`}
        >
          <Link href="/">Home</Link>
          <Link
            href="/about"
            className={`active:text-primaryOne ${
              basePath === "/about" && "text-primaryOne font-bold"
            }`}
          >
            About
          </Link>
          <Link
            href="/features"
            className={`active:text-primaryOne ${
              basePath === "/features" && "text-primaryOne font-bold"
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`active:text-primaryOne ${
              basePath === "/pricing" && "text-primaryOne font-bold"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`active:text-primaryOne ${
              basePath === "/blog" && "text-primaryOne font-bold"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`active:text-primaryOne ${
              basePath === "/contact" && "text-primaryOne font-bold"
            }`}
          >
            Contact
          </Link>
        </ul>
        <DashboardButton />
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-white h-7 w-7 block md:hidden"
        onClick={() => setShowingMenu((prev) => !prev)}
      />
      <AnimatePresence>
        {showingMenu && <SmallScreenMenu setShowingMenu={setShowingMenu} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
