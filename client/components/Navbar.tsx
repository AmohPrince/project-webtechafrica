import { useAuth } from "@/hooks/useAuth";
import useScreenSize from "@/hooks/useScreenSize";
import { LogoColor } from "@/public/assets";
import { getBaseUrl } from "@/util/utilities";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const { user } = useAuth();
  const [showingMenu, setShowingMenu] = useState(false);

  const screenSize = useScreenSize();

  return (
    <nav
      className={`flex justify-between items-center fixed right-0 left-0 py-3 md:py-0 top-0 md:relative bg-primaryOne md:bg-transparent z-40 px-[3%] md:px-[12%]`}
    >
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
