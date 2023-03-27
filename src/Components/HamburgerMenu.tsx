import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HamburgerMenu = ({
  setShowSmallScreenMenu,
  location,
}: {
  setShowSmallScreenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  location: "menu" | "nav";
}) => {
  return (
    <div
      className={`bg-primaryOne py-1 px-2 text-white ${
        location === "menu" ? "rounded-l-md" : "rounded-r-md"
      } block sm:hidden`}
      onClick={() => setShowSmallScreenMenu((prev) => !prev)}
    >
      <FontAwesomeIcon icon={faBars} className="w-5" />
    </div>
  );
};

export default HamburgerMenu;
