import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LogoColor } from "../Assets/assets";
import DashboardOption from "../Components/DashboardOption";
import LogoTab from "../Components/LogoTab";
import PrimaryButton from "../Components/PrimaryButton";

const DashBoard = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user-data");
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="bg-gray-50 w-1/6 h-screen pt-7 pl-6">
        <Link className="flex items-center cursor-pointer" to="/">
          <LogoTab logoColor={LogoColor.primary} />
        </Link>
        <div className="mt-7">
          <DashboardOption name="active-websites" />
          <DashboardOption name="dev-websites" />
          <DashboardOption name="my-plan" />
          <DashboardOption name="payment" />
        </div>
      </div>
      <div className="flex-grow bg-gray-100 pt-7 px-7 w-5/6">
        <div className="flex items-center">
          <PrimaryButton text="Get new website" className="ml-auto" />
          <p
            className="font-semibold ml-3 cursor-pointer"
            onClick={handleLogOut}
          >
            Log out
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
