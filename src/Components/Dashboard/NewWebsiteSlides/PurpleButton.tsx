import React from "react";

export const PurpleButton = ({
  text,
  onClick,
  className,
  disabled,
}: {
  text: string;
  onClick: () => void;
  className: string;
  disabled: boolean;
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full px-7 py-3 text-white text-sm font-medium transition-all text-center transition-color disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
