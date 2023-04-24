import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  style,
  disabled,
}: {
  style?: React.CSSProperties;
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-primaryOneLight transition-all disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
