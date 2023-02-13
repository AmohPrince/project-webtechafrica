import React from "react";
import { assets } from "../Assets/assets";

const ActualLogo = ({ page }: { page: string }) => {
  return page === "sign-in" || page === "dashboard" ? (
    <img
      src={assets.logoSignIn}
      alt="logo"
      className="w-10 h-10 object-cover"
    />
  ) : (
    <img
      src={assets.logoSignUp}
      alt="logo"
      className="w-10 h-10 object-cover"
    />
  );
};

export default ActualLogo;
