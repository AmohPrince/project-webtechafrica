"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import Link from "next/link";

export const BasicPlanRightTab = () => {
  const { price } = useGlobalData();

  return (
    <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-full mt-5 md:mt-0 md:w-[45%]">
      <h2 className="h3">So how much will it cost me?</h2>
      <p className="default-paragraph mb-8">
        The basic plan currently goes for as little as {price.currency}{" "}
        {price.basic} / month. This is inclusive of everything listed in the
        basic plan. All you have is sit and watch
      </p>
      <p className="font-bold text-5xl">
        {price.currency} {price.basic}{" "}
        <span className="text-base">/ month</span>
      </p>
      <Link href={"/contact"}>
        <button className="rounded-full w-full text-xs text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all">
          Get Website
        </button>
      </Link>
    </div>
  );
};
