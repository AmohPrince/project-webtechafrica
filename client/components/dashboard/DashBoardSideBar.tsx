import React from "react";
import DashboardOption from "./DashboardOption";
import LogoTab from "../LogoTab";
import HamburgerMenu from "../HamburgerMenu";
import { LogoColor } from "@/public/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const DashBoardSideBar = ({
  setShowingSmallScreenMenu,
  className,
}: {
  setShowingSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}) => {
  return (
    <motion.div
      className={`bg-menu text-white w-1/6 h-screen z-10 overflow-x-hidden transition-all pt-6 pl-6 ${className}`}
    >
      <div className="flex justify-between items-center mb-5">
        <Link href="/">
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
        <DashboardOption
          name="settings"
          onClick={() => setShowingSmallScreenMenu(false)}
        />
      </div>
    </motion.div>
  );
};

export default DashBoardSideBar;
