import React from "react";
import { Link } from "react-router-dom";
import { LogoColor } from "../Assets/assets";
import DashboardOption from "./DashboardOption";
import LogoTab from "./LogoTab";
import HamburgerMenu from "./HamburgerMenu";

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
    <div
      className={`bg-menu text-white w-1/6 h-screen z-10 overflow-x-hidden transition-all pt-6 pl-6 ${
        shouldBeHidden ? "hidden" : ""
      } ${
        window.innerWidth > 768
          ? "block relative"
          : "w-5/6 fixed top-0 left-0 bottom-0"
      }`}
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
        <DashboardOption name="active-websites" />
        <DashboardOption name="dev-websites" />
        <DashboardOption name="pending-verification" />
        <DashboardOption name="payments" />
        <DashboardOption name="new-website" />
      </div>
      <DashboardOption name="settings" className="absolute bottom-10 w-full" />
    </div>
  );
};

export default DashBoardSideBar;
