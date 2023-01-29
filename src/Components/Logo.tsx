import React from "react";
import ActualLogo from "./ActualLogo";

const Logo = ({ page }: { page: string }) => {
  return (
    <div className="flex items-center">
      <ActualLogo page={page} />
      <p className="font-bold text-lg dark:text-white ml-2">WebTech Africa</p>
    </div>
  );
};

export default Logo;
