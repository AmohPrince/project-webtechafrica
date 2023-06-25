import {
  slideAnimation,
  headContainerAnimation,
  headTextAnimation,
  fadeAnimation,
} from "@/framer/motion";
import { assets } from "@/public/assets";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export const Main = () => {
  const { user } = useAuth();
  return (
    <motion.section
      className="flex flex-col md:flex-row mt-[9%] justify-between item-start relative mx-[5%] md:mx-[12%]"
      {...slideAnimation("left")}
    >
      <motion.div className="md:w-[50%]" {...headContainerAnimation}>
        <motion.h1 className="h2 md:h1" {...headTextAnimation}>
          Build your <br /> audience and grow <br /> your brand online
        </motion.h1>
        <motion.p className="text-gray-500 mt-4 mb-7">
          Leverage the power of AI to create insanely beautiful websites that
          will spear head your business to the top of its specific
          <br />
          niche. Let the worlds best developers and UI/UX designers rebrand your
          online presence for the maximization of profits with africa's fastest
          growing tech corporation.{" "}
        </motion.p>
        <div className="flex text-sm justify-center md:justify-start gap-x-3 items-center">
          <Suspense>
            <Link
              href={`${
                user ? "/dashboard/new-website" : "/sign-in/?source=get-started"
              }`}
            >
              <button className="bg-primaryOne text-white py-3 px-6 rounded-full hover:bg-primaryOneLight transition-all">
                Get Started
              </button>
            </Link>
          </Suspense>
          {/* TODO Create Video! Not now but it would be really cool */}
          <Link
            href="/blog"
            className="bg-gray-100 rounded-full pl-3 pr-1 py-1 font-bold"
          >
            <button className="flex items-center">
              <p>Read our blog</p>
              <Image
                src={assets.PlayButton}
                alt="play"
                className="h-9 w-9 ml-3"
              />
            </button>
          </Link>
        </div>
      </motion.div>
      <Image
        src={assets.GraphScreen}
        alt="graph"
        className="w-3/4 md:w-[50%] mx-auto mt-10 md:mt-0 md:ml-11 object-cover md:absolute -right-12 -top-12"
        {...fadeAnimation}
        priority
      />
    </motion.section>
  );
};
