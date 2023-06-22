import { useAuth } from "@/hooks/useAuth";
import { LogoColor } from "@/public/assets";
import { getBaseUrl } from "@/util/utilities";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Logo } from "./Logo";
import { SmallScreenMenu } from "./SmallScreenMenu";

const Navbar = () => {
  const { pathname } = useRouter();
  const basePath = getBaseUrl(pathname);
  const { user } = useAuth() || {};
  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center fixed right-0 left-0 py-6 sm:py-0 top-0 sm:relative bg-white sm:bg-transparent z-40 px-[5%] sm:px-[12%]`}
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
            href="/"
            className={`active:text-primaryOne ${
              basePath === "/" && "text-primaryOne font-bold"
            }`}
          >
            Home
          </Link>
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
        </div>
        <Suspense>
          <Link
            className={`px-4 rounded-full ml-10 font-semibold flex items-center ${
              basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
            }`}
            href={user ? "/dashboard" : "/sign-in"}
          >
            {user ? "My Dashboard 🚀" : "sign in"}
          </Link>
        </Suspense>
      </div>
      <div className="absolute right-0">
        <HamburgerMenu
          location="menu"
          setShowingSmallScreenMenu={setShowingMenu}
        />
      </div>
      <AnimatePresence>
        {showingMenu && <SmallScreenMenu setShowingMenu={setShowingMenu} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
