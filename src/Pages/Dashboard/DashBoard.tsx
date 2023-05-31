import React, { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { DashboardNavbar } from "../../Components/Dashboard/DashboardNavbar";
import DashBoardSideBar from "../../Components/Dashboard/DashBoardSideBar";
import DashBoardTitle from "../../Components/Dashboard/DashBoardTitle";
import { PopUp, PopUpInfo } from "../../Components/SignInOrSignUp/PopUp";
import { useAuth } from "../../Hooks/UseAuth";

export const globalData = createContext<{
  setDashBoardTitleInfo: React.Dispatch<
    React.SetStateAction<{
      h1: string;
      sub: string;
    }>
  >;
  showNotification: (message: string, type: "error" | "success") => void;
}>(null as any);

const DashBoard = () => {
  const { user } = useAuth();
  const redirect = useNavigate();
  const [dashBoardTitleInfo, setDashBoardTitleInfo] = useState({
    h1: "Active Websites",
    sub: "test",
  });

  useEffect(() => {
    if (!user) {
      redirect("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showingSmallScreenMenu, setShowingSmallScreenMenu] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState<PopUpInfo>({
    showing: false,
    text: "An error occurred",
    type: "error",
  });

  const showNotification = (message: string, type: "error" | "success") => {
    setPopUpInfo({
      showing: true,
      text: message,
      type: type,
    });
  };

  return (
    <div className="flex sm:w-screen overflow-x-hidden overflow-y-auto">
      {popUpInfo.showing && (
        <PopUp popUpInfo={popUpInfo} setPopUp={setPopUpInfo} />
      )}
      <DashBoardSideBar
        setShowingSmallScreenMenu={setShowingSmallScreenMenu}
        className="hidden sm:block relative"
      />
      {showingSmallScreenMenu && (
        <DashBoardSideBar
          setShowingSmallScreenMenu={setShowingSmallScreenMenu}
          className="w-5/6 fixed top-0 left-0 bottom-0"
        />
      )}
      <div className="flex-grow bg-gray-100 w-full sm:w-5/6 z-0 h-screen overflow-y-auto">
        <DashboardNavbar
          dashBoardTitleInfo={dashBoardTitleInfo}
          setShowingSmallScreenMenu={setShowingSmallScreenMenu}
        />
        {/* Only appears in small screens */}
        <DashBoardTitle
          h1={dashBoardTitleInfo.h1}
          sub={dashBoardTitleInfo.sub}
          className="block mt-20 sm:mt-0 sm:hidden px-6"
        />
        <globalData.Provider
          value={{
            setDashBoardTitleInfo,
            showNotification,
          }}
        >
          <Outlet />
        </globalData.Provider>
      </div>
    </div>
  );
};

export default DashBoard;
