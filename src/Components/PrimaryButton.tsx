import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <button
      className={`bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-primaryOneLight hover:scale-110 transition-all ${className}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default PrimaryButton;
