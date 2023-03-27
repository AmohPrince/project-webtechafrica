import React from "react";

const DashBoardTitle = ({
  h1,
  sub,
  className,
}: {
  h1: string;
  sub: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <h3 className="h3">{h1}</h3>
      <p>{sub}</p>
    </div>
  );
};

export default DashBoardTitle;
