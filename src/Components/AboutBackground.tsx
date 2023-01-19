import React from "react";
import { assets } from "../Assets/assets";

const AboutBackground = () => {
  return (
    <div className="absolute top-0 right-0 w-screen h-screen z-0">
      <img
        src={assets.CircleOne}
        alt="Circle"
        className="absolute -left-1/4 rotate-180 -top-1/2"
      />
      <img
        src={assets.CircleTwo}
        alt="Circle"
        className="absolute -top-3/4 -right-1/2"
      />
      {/* <img src={assets.CircleThree} alt="Circle" /> */}
    </div>
  );
};

export default AboutBackground;
