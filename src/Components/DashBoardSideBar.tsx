import React from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LogoColor } from "../Assets/assets";
import DashboardOption from "./DashboardOption";
import LogoTab from "./LogoTab";

const DashBoardSideBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user-data");
    navigate("/");
  };

  return (
    <div className="bg-gray-50 w-1/6 h-screen overflow-x-hidden pt-6 pl-6 sticky top-0 left-0">
      <Link className="show mb-5" to="/">
        <LogoTab logoColor={LogoColor.primary} />
      </Link>
      <div className="mt-12">
        <DashboardOption name="active-websites" />
        <DashboardOption name="dev-websites" />
        <DashboardOption name="payments" />
        <DashboardOption name="new-website" />
      </div>
      <div
        className="flex bottom-10 absolute items-center py-3 px-4 w-full cursor-pointer hover:bg-primaryOne transition-all hover:text-white rounded-l-lg"
        onClick={handleLogOut}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <p className="font-semibold ml-3">Log out</p>
      </div>
    </div>
  );
};

export default DashBoardSideBar;
