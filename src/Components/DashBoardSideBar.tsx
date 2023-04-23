import React, { useState } from "react";
import {
  faArrowRightFromBracket,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LogoColor } from "../Assets/assets";
import DashboardOption from "./DashboardOption";
import LogoTab from "./LogoTab";
import HamburgerMenu from "./HamburgerMenu";
import { signOut } from "../Firebase/firebase";

const DashBoardSideBar = ({
  showingSmallScreenMenu,
  setShowingSmallScreenMenu,
}: {
  showingSmallScreenMenu: boolean;
  setShowingSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(async () => {
      await signOut();
      navigate("/");
      setLoading(false);
    }, 3000);
  };

  const shouldBeHidden =
    showingSmallScreenMenu !== true && window.innerWidth < 768;

  return (
    <div
      className={`bg-menu text-white w-1/6 h-screen z-10 overflow-x-hidden transition-all pt-6 pl-6 relative ${
        shouldBeHidden ? "hidden" : ""
      } ${
        window.innerWidth > 768 ? "block" : "w-5/6 fixed top-0 left-0 bottom-0"
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
        <DashboardOption name="settings" />
      </div>
      <div
        className="flex bottom-10 absolute items-center py-3 px-4 w-full cursor-pointer hover:bg-primaryOne transition-all hover:text-white rounded-l-lg"
        onClick={handleLogOut}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        {loading ? (
          <FontAwesomeIcon icon={faEllipsis} />
        ) : (
          <p className="font-semibold ml-3">Log out</p>
        )}
      </div>
    </div>
  );
};

export default DashBoardSideBar;
