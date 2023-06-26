import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

const LogoTab = ({
  logoColor,
  textColor,
  className,
}: {
  logoColor: string;
  textColor?: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Logo color={logoColor} />
      <p className={`font-bold text-lg dark:text-white ml-2 ${textColor}`}>
        WebTech Africa
      </p>
    </div>
  );
};

export default LogoTab;
