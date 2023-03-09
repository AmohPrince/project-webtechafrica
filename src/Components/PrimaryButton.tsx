import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  style,
}: {
  style?: React.CSSProperties;
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      className={`bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-primaryOneLight hover:scale-110 transition-all ${className}`}
      onClick={onClick}
      style={style}
    >
      <p>{text}</p>
    </button>
  );
};

export default PrimaryButton;
