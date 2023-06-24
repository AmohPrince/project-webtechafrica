import React from "react";

const Billed = ({ text }: { text: string }) => {
  return (
    <p className="text-orangeText bg-orange px-7 py-2 rounded-full md:whitespace-nowrap text-sm">
      {text}
    </p>
  );
};

export default Billed;
