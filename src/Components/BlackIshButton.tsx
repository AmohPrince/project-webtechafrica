import React from "react";

const BlackIshButton = ({ text }: { text: string }) => {
  return (
    <button className="px-8 rounded-full py-3 text-sm bg-primaryTwo text-white ml-auto hover:scale-110 transition-all hover:bg-primaryTwoLight">
      {text}
    </button>
  );
};

export default BlackIshButton;
