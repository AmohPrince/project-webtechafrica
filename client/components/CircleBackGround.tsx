import { assets } from "@/public/assets";
import Image from "next/image";
import React from "react";

export const CircleBackGround = () => {
  return (
    <div className="absolute top-0 right-0 w-screen h-screen z-0">
      <Image
        src={assets.CircleOne}
        alt="Circle"
        className="absolute -left-1/4 rotate-180 -top-1/2"
      />
      <Image
        src={assets.CircleTwo}
        alt="Circle"
        className="absolute -top-3/4 -right-1/2"
      />
    </div>
  );
};
