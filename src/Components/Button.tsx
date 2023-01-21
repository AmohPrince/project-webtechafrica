import React from "react";

export const Button = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 ${
        !className ? "hover:bg-orange hover:border-orange" : className
      }`}
    >
      {text}
    </button>
  );
};
