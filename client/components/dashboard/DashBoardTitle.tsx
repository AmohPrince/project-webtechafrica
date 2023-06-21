import { useGlobalData } from "@/hooks/useGlobalData";
import React from "react";

const DashBoardTitle = ({ className }: { className: string }) => {
  const { dashBoardTitleInfo } = useGlobalData();
  const { h1, sub } = dashBoardTitleInfo;
  return (
    <div className={className}>
      <h3 className="h3">{h1}</h3>
      <p>{sub}</p>
    </div>
  );
};

export default DashBoardTitle;
