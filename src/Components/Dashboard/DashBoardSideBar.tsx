import React from "react";
import { Link } from "react-router-dom";
import { LogoColor } from "../../Assets/assets";
import DashboardOption from "./DashboardOption";
import LogoTab from "../LogoTab";
import HamburgerMenu from "../HamburgerMenu";
import { motion } from "framer-motion";

const DashBoardSideBar = ({
  showingSmallScreenMenu,
  setShowingSmallScreenMenu,
}: {
  showingSmallScreenMenu: boolean;
  setShowingSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const shouldBeHidden =
    showingSmallScreenMenu !== true && window.innerWidth < 768;

  return (
    <motion.div
      className={`bg-menu text-white w-1/6 h-screen z-10 overflow-x-hidden transition-all pt-6 pl-6 ${
        shouldBeHidden ? "hidden" : ""
      } ${
        window.innerWidth > 768
          ? "block relative"
          : "w-5/6 fixed top-0 left-0 bottom-0"
      }`}
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      // exit={{ y: -1000, transition: { delay: 0.5 } }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <div className="flex justify-between items-center mb-5">
        <Link to="/">
          <LogoTab logoColor={LogoColor.menu} />
        </Link>
        <HamburgerMenu
          location="menu"
          setShowingSmallScreenMenu={setShowingSmallScreenMenu}
        />
      </div>
      <div className="mt-12">
        <DashboardOption
          name="active-websites"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
        <DashboardOption
          name="dev-websites"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
        <DashboardOption
          name="pending-verification"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
        <DashboardOption
          name="payments"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
        <DashboardOption
          name="new-website"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
      </div>
      <DashboardOption
        name="settings"
        className="absolute bottom-10 w-full"
        onClick={() => setShowingSmallScreenMenu(false)}
      />
    </motion.div>
  );
};

export default DashBoardSideBar;
