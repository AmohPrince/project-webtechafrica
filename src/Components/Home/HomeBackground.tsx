import { motion } from "framer-motion";
import React from "react";
import { assets } from "../../Assets/assets";

const HomeBackground = () => {
  return (
    <motion.div className="absolute top-0 right-0 w-screen h-screen hidden sm:block">
      <motion.svg
        viewBox="0 0 1386 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[73vw] h-[73vh] absolute top-0 -right-[4%] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M63.4898 93.6655C36.4838 53.8246 65.0238 0 113.155 0H1386V705H658.162C545.409 705 439.99 649.103 376.726 555.771L63.4898 93.6655Z"
          fill="#F9F8FF"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.path
          d="M63.4898 93.6655C36.4838 53.8246 65.0238 0 113.155 0H1386V705H658.162C545.409 705 439.99 649.103 376.726 555.771L63.4898 93.6655Z"
          fill="url(#paint0_linear_1_4514)"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <mask
          id="mask0_1_4514"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="53"
          y="0"
          width="1333"
          height="705"
        >
          <motion.path
            d="M63.4898 93.6655C36.4838 53.8246 65.0238 0 113.155 0H1386V705H658.162C545.409 705 439.99 649.102 376.726 555.771L63.4898 93.6655Z"
            fill="#F9F8FF"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </mask>
        <g mask="url(#mask0_1_4514)">
          <motion.ellipse
            rx="349.646"
            ry="361.677"
            transform="matrix(0.920144 -0.39158 0.361103 0.932526 831.005 104.64)"
            fill="url(#paint1_linear_1_4514)"
            fill-opacity="0.44"
            style={{ mixBlendMode: "multiply" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.ellipse
            rx="326.181"
            ry="289.821"
            transform="matrix(0.244077 -0.969756 0.959148 0.282903 1173.86 819.393)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            fill="url(#paint2_linear_1_4514)"
            fill-opacity="0.42"
            style={{ mixBlendMode: "multiply" }}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_4514"
            x1="291.884"
            y1="-3.49809e-05"
            x2="1393.1"
            y2="693.723"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#684FFF" />
            <stop offset="1" stopColor="#B871FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_4514"
            x1="349.646"
            y1="0"
            x2="349.646"
            y2="723.354"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#684FFF" />
            <stop offset="1" stopColor="#FFF8F0" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_4514"
            x1="326.181"
            y1="0"
            x2="326.181"
            y2="579.642"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#684FFF" />
            <stop offset="1" stopColor="#FFF8F0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

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
