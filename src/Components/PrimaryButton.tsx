import React from "react";

const PrimaryButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-primaryOneLight hover:scale-110 transition-all ${className?.split(
        " "
      )}`}
    >
      <p>{text}</p>
    </button>
  );
};

export default PrimaryButton;
