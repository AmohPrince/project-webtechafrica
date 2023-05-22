import {
  faArrowRightFromBracket,
  faBell,
  faCaretDown,
  faCircleNotch,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import DashBoardSideBar from "../Components/Dashboard/DashBoardSideBar";
import DashBoardTitle from "../Components/Dashboard/DashBoardTitle";
import HamburgerMenu from "../Components/HamburgerMenu";
import { signOut } from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";

export const globalData = createContext<{
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
    if (!user) {
      redirect("/sign-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showingSmallScreenMenu, setShowingSmallScreenMenu] = useState(false);
  const [isShowingLogOutButton, setIsShowingLogOutButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(async () => {
      await signOut();
      navigate("/");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex sm:w-screen min-h-screen sm:h-[100dvh] overflow-hidden">
      <DashBoardSideBar
        showingSmallScreenMenu={showingSmallScreenMenu}
        setShowingSmallScreenMenu={setShowingSmallScreenMenu}
      />
      <div className="flex-grow bg-gray-100 w-full sm:w-5/6 z-0">
        <div className="flex justify-between items-center w-full pr-3 sm:px-6 py-3 bg-white fixed top-0 left-0 z-50 sm:static">
          <DashBoardTitle
            h1={dashBoardTitleInfo.h1}
            sub={dashBoardTitleInfo.sub}
            className="hidden sm:block"
          />
          <HamburgerMenu
            location="nav"
            setShowingSmallScreenMenu={setShowingSmallScreenMenu}
          />
          <div className="flex items-center w-3/4 sm:w-1/3 justify-between">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all"
            />
            <div
              className="flex items-center bg-gray-50 dark:bg-magloSemiBlack dark:text-white rounded-full py-1 px-2 cursor-pointer w-1/2 sm:w-auto relative"
              onClick={() => setIsShowingLogOutButton((prev) => !prev)}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="h-7 w-7 object-cover rounded-full mr-3"
                />
              ) : (
                <FontAwesomeIcon icon={faUser} className="mr-3" />
              )}
              <p className="text-[10px] sm:text-sm font-bold mr-2 sm:mr-7">
                {user?.displayName}
              </p>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`"text-gray-400 w-3 h-3 ml-0 sm:ml-3 ${
                  isShowingLogOutButton && "rotate-180"
                } transition-all`}
              />
              {isShowingLogOutButton && (
                <div
                  className="bg-red-500 rounded absolute right-0 left-0 top-full text-white font-semibold flex items-center justify-center gap-x-2 px-3 py-2 text-sm border-red-500"
                  onClick={handleLogOut}
                >
                  <p>Log out</p>

                  {loading ? (
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  ) : (
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <DashBoardTitle
          h1={dashBoardTitleInfo.h1}
          sub={dashBoardTitleInfo.sub}
          className="block mt-20 sm:mt-0 sm:hidden px-6"
        />
        <globalData.Provider
          value={{
            setDashBoardTitleInfo,
          }}
        >
          <Outlet />
        </globalData.Provider>
      </div>
    </div>
  );
};

export default DashBoard;
