import {
  faBars,
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { assets } from "../Assets/assets";
import DashBoardSideBar from "../Components/DashBoardSideBar";
import DashBoardTitle from "../Components/DashBoardTitle";
import { useAuth } from "../Hooks/UseAuth";

export const dashBoardTitleInfoFunction = createContext<{
  setDashBoardTitleInfo: React.Dispatch<
    React.SetStateAction<{
      h1: string;
      sub: string;
    }>
  >;
}>({
  setDashBoardTitleInfo: () => {},
});

const DashBoard = () => {
  const { user } = useAuth();
  const redirect = useNavigate();
  const [dashBoardTitleInfo, setDashBoardTitleInfo] = useState({
    h1: "Active Websites",
    sub: "test",
  });

  useEffect(() => {
    redirect("/dashboard/active-websites");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex sm:w-screen h-[100dvh] overflow-hidden">
      <FontAwesomeIcon
        icon={faBars}
        className="sm:hidden block absolute top-5 left-5"
      />
      <DashBoardSideBar />
      <div className="flex-grow bg-white w-full sm:w-5/6 px-8 pt-12 pb-4 sm:py-4">
        <div className="flex justify-between items-center w-full">
          <DashBoardTitle
            h1={dashBoardTitleInfo.h1}
            sub={dashBoardTitleInfo.sub}
          />
          <div className="flex items-center w-1/3 justify-between">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all"
            />
            <div className="flex items-center bg-gray-50 dark:bg-magloSemiBlack dark:text-white rounded-full py-1 px-2 cursor-pointer">
              <img
                src={assets.profile}
                alt="profile"
                className="h-7 w-7 object-cover rounded-full mr-3"
              />
              <p className="text-sm font-bold mr-7">{user?.name}</p>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-gray-400 w-3 h-3 ml-3"
              />
            </div>
          </div>
        </div>
        <dashBoardTitleInfoFunction.Provider
          value={{
            setDashBoardTitleInfo,
          }}
        >
          <Outlet />
        </dashBoardTitleInfoFunction.Provider>
      </div>
    </div>
  );
};

export default DashBoard;
