import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Hooks/UseAuth";
import { getBaseUrl } from "../../Util/Utilities";

export const NavBarButton = () => {
  const { pathname } = useLocation();
  const basePath = getBaseUrl(pathname);
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Link
          className={`px-4 rounded-full ml-10 font-semibold flex items-center ${
            basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
          }`}
          to="/dashboard"
        >
          My Dashboard 🚀
        </Link>
      ) : (
        <Link
          className={`px-8 rounded-full ml-10 font-semibold flex items-center ${
            basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
          }`}
          to="/sign-in"
        >
          Sign in
        </Link>
      )}
    </>
  );
};
