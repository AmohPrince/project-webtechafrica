import React from "react";

export const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 ${
        !className ? "hover:bg-orange hover:border-orange" : className
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
