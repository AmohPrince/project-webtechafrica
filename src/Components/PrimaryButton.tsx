import React from "react";

const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium ml-auto hover:bg-primaryOneLight hover:scale-110 transition-all">
      <p>{text}</p>
    </button>
  );
};

export default PrimaryButton;
