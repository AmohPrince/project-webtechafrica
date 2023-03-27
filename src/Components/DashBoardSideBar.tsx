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
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import HamburgerMenu from "./HamburgerMenu";

const DashBoardSideBar = ({
  showSmallScreenMenu,
  setShowSmallScreenMenu,
}: {
  setShowSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showSmallScreenMenu: boolean;
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      signOut(auth)
        .then((res) => {
          localStorage.removeItem("user-data");
          navigate("/");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 3000);
  };

  return (
    <div
      className={`bg-menu text-white w-1/6 h-screen overflow-x-hidden transition-all pt-6 pl-6 top-0 left-0 sm:block ${
        showSmallScreenMenu ? "block absolute top-0 left-0 w-5/6" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <Link to="/">
          <LogoTab logoColor={LogoColor.menu} />
        </Link>
        <HamburgerMenu
          location="menu"
          setShowSmallScreenMenu={setShowSmallScreenMenu}
        />
      </div>
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
