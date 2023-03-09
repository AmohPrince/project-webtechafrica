import React from "react";
import { getLighterColor } from "../Util/Utilities";

export const SecondaryButton = ({
  text,
  onClick,
  style,
  className,
  disabled,
}: {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}) => {
  const buttonStyles: React.CSSProperties = {
    ...style,
    backgroundColor: disabled
      ? getLighterColor(style!.backgroundColor!)
      : style?.backgroundColor,
  };
  return (
    <button
      className={`py-3 px-7 rounded-full border transition-all text-sm font-bold hover:scale-105 hover:bg-orange hover:border-orange disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      style={buttonStyles}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
