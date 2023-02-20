import React from "react";

const DashBoardTitle = ({ h1, sub }: { h1: string; sub: string }) => {
  return (
    <div className="px-7">
      <h3 className="h3">{h1}</h3>
      <p>{sub}</p>
    </div>
  );
};

export default DashBoardTitle;
