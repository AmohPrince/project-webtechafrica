import React from "react";
import { Outlet } from "react-router";
import DashBoardSideBar from "../Components/DashBoardSideBar";

const DashBoard = () => {
  return (
    <div className="flex">
      <DashBoardSideBar />
      <div className="flex-grow bg-gray-100 w-5/6 px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
