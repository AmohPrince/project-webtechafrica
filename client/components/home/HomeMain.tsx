import { fadeAnimation } from "@/framer/motion";
import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

export const HomeMain = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between item-start relative mx-[5%] md:mx-[12%] my-[8%]">
      <div className="md:w-[45%]">
        <h1 className="h2 md:h1">
          Build your <br /> audience and grow <br /> your brand online
        </h1>
        <p className="text-gray-500 mt-4 my-12">
          Create insanely beautiful websites that will spear head your business
          to the top of its specific
          <br />
          niche. Let the worlds best developers and UI/UX designers rebrand your
          online presence for the maximization of profits with africa's fastest
          growing tech corporation.{" "}
        </p>
        <div className="flex text-sm justify-center md:justify-start gap-x-3 items-center">
          <Link
            href={`/contact`}
            className="bg-primaryOne text-white py-3 px-6 rounded-full hover:bg-primaryOneLight transition-all"
          >
            Request site
          </Link>
          {/* TODO Create Video! Not now but it would be really cool */}
          <Link
            href="/blog"
            className="bg-gray-100 rounded-full pl-3 pr-1 py-1 font-bold flex items-center"
          >
            Read our blog
            <Image
              src={assets.PlayButton}
              alt="play"
              className="h-9 w-9 ml-3"
            />
          </Link>
        </div>
      </div>
      <Image
        src={assets.GraphScreen}
        alt="graph"
        className="w-3/4 md:w-[50%]"
        {...fadeAnimation}
        priority
      />
    </section>
  );
};
