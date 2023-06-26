import { signOut } from "@/firebase/firebase";
import { useAuth } from "@/hooks/useAuth";
import {
  faBell,
  faUser,
  faCaretDown,
  faCircleNotch,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu";
import DashBoardTitle from "./DashBoardTitle";

export const DashboardNavbar = ({
  setShowingSmallScreenMenu,
}: {
  setShowingSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isShowingLogOutButton, setIsShowingLogOutButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(async () => {
      await signOut();
      router.push("/");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex justify-between items-center w-full pr-3 md:px-6 py-3 bg-white fixed top-0 left-0 z-50 md:static">
      <DashBoardTitle className="hidden md:block" />
      <HamburgerMenu
        location="nav"
        setShowingSmallScreenMenu={setShowingSmallScreenMenu}
      />
      <div className="flex items-center w-3/4 md:w-1/3 justify-end">
        {/* <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all"
        /> */}
        <FontAwesomeIcon
          icon={faBell}
          className="w-3 h-3 text-gray-400 cursor-pointer hover:text-primaryOne transition-all mr-6"
        />
        <div
          className="flex items-center bg-gray-50 dark:bg-magloSemiBlack dark:text-white rounded-full py-1 px-2 cursor-pointer w-1/2 md:w-auto relative"
          onClick={() => setIsShowingLogOutButton((prev) => !prev)}
        >
          {user?.photoURL ? (
            <Image
              src={user.photoURL}
              alt="profile"
              className="h-7 w-7 object-cover rounded-full mr-3"
              height={28}
              width={28}
            />
          ) : (
            <FontAwesomeIcon icon={faUser} className="mr-3" />
          )}
          <p className="text-[10px] md:text-sm font-bold mr-2 md:mr-7">
            {user?.displayName}
          </p>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`"text-gray-400 w-3 h-3 ml-0 md:ml-3 ${
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
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  spin
                  className="h-4 w-4 spin"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="h-5"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
