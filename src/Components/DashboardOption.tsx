import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faGears,
  faLaptop,
  faWallet,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const DashboardOption = ({ name }: { name: string }) => {
  const { pathname } = useLocation();
  const lastPathNameSegment = getLastPathSegment(pathname);

  return (
    <Link
      className={`flex items-center py-3 px-4 ${
        lastPathNameSegment === name && "bg-primaryOne rounded-l-lg"
      } transition-all cursor-pointer`}
      to={name}
    >
      <DashboardOptionLogo
        isActive={lastPathNameSegment === name}
        name={name}
      />
      <p
        className={`ml-2 font-semibold text-sm ${
          lastPathNameSegment === name && "text-white"
        }`}
      >
        {capitalizeName(name)}
      </p>
    </Link>
  );
};

export default DashboardOption;

const capitalizeName = (str: string): string => {
  return str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const DashboardOptionLogo = ({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) => {
  if (name === "dev-websites") {
    return (
      <FontAwesomeIcon
        icon={faGears}
        className={isActive ? "text-white" : ""}
      />
    );
  } else if (name === "active-websites") {
    return (
      <FontAwesomeIcon
        icon={faWandMagicSparkles}
        className={isActive ? "text-white" : ""}
      />
    );
  } else if (name === "payment") {
    return (
      <FontAwesomeIcon
        icon={faCreditCard}
        className={isActive ? "text-white" : ""}
      />
    );
  } else if (name === "new-website") {
    return (
      <FontAwesomeIcon
        icon={faLaptop}
        className={isActive ? "text-white" : ""}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faWallet}
        className={isActive ? "text-white" : ""}
      />
    );
  }
};

const getLastPathSegment = (pathname: string): string => {
  const segments = pathname.split("/");
  return segments[segments.length - 1];
};
