import React from "react";

export const SecondaryButton = ({
  text,
  onClick,
  style,
  className,
}: {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <button
      className={`py-3 px-7 rounded-full border transition-all text-sm font-bold hover:scale-105 hover:bg-orange hover:border-orange ${className}`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};
