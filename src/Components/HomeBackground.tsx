import { motion } from "framer-motion";
import React from "react";
import { assets } from "../Assets/assets";
import { slideAnimation } from "../FramerMotion/motion";

const HomeBackground = () => {
  return (
    <motion.div
      className="absolute top-0 right-0 w-screen h-screen"
      {...slideAnimation("down")}
    >
      <img
        src={assets.BackGround}
        alt="Background"
        className="w-[73vw] h-[73vh] absolute top-0 -right-[4%] object-cover z-0"
      />
      <img
        src={assets.CircleOne}
        alt="circle"
        className="absolute -top-[40%] -left-[3%]"
      />
      <img
        src={assets.CircleTwo}
        alt="circle"
        className="absolute -right-1/4 -z-10 -top-2/3"
      />
      <img
        src={assets.CircleThree}
        alt="circle"
        className="absolute -right-1/4 -z-10 -top-1/3"
      />
    </motion.div>
  );
};

export default HomeBackground;
