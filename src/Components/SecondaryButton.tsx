import React from "react";

export const SecondaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`py-3 px-7 rounded-full border mt-8 transition-all text-sm font-bold hover:scale-105 hover:bg-orange hover:border-orange`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
