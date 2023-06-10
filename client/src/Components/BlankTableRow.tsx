import React from "react";

export const BlankTableRow = ({ name }: { name: string }) => {
  return (
    <div className="py-5 px-14 text-primaryOne text-sm rounded-sm">{name}</div>
  );
};
