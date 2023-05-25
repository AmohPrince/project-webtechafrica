import React from "react";

export const PurpleButton = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className: string;
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full px-7 py-3 text-white text-sm font-medium transition-all text-center transition-color ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
