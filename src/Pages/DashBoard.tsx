import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LogoColor } from "../Assets/assets";
import DashboardOption from "../Components/DashboardOption";
import LogoTab from "../Components/LogoTab";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user-data");
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="bg-gray-50 w-1/6 h-screen relative pl-6">
        <Link to="/" className="bg-gray-50 py-3">
          <LogoTab logoColor={LogoColor.primary} />
        </Link>
        <div>
          <DashboardOption name="active-websites" />
          <DashboardOption name="dev-websites" />
          <DashboardOption name="my-plan" />
          <DashboardOption name="payment" />
          <DashboardOption name="new-website" />
        </div>
        <div
          className="flex bottom-10 absolute items-center py-3 px-4 w-full cursor-pointer"
          onClick={handleLogOut}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <p className="font-semibold ml-3">Log out</p>
        </div>
      </div>
      <div className="flex-grow bg-gray-100 w-5/6 px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
