import React from "react";
import { Logo } from "./Logo";

const LogoTab = ({
  logoColor,
  textColor,
}: {
  logoColor: string;
  textColor?: string;
}) => {
  return (
    <div className="flex items-center">
      <Logo color={logoColor} />
      <p className={`font-bold text-lg dark:text-white ml-2 ${textColor}`}>
        WebTech Africa
      </p>
    </div>
  );
};

export default LogoTab;
