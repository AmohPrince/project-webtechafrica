import { GreyButton } from "@/components/buttons/GreyButton";
import { CircleBackGround } from "@/components/CircleBackGround";
import { FeaturesComponent } from "@/components/home/FeaturesComponent";
import FreeTrial from "@/components/home/FreeTrial";
import { assets } from "@/public/assets";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// const schema = {
//   "@context": "https://schema.org",
//   "@type": "WebPage",
//   name: "Features",
//   description: "Advertisement , web development and social media management",
// };

export const metadata: Metadata = {
  title: "features",
  description:
    "We offer advanced analytics capabilities to monitor website engagement and manage ads effectively, ensuring the growth of your brand",
  twitter: {
    description: "Advertisement , web development and social media management",
  },
};

const Features = () => {
  return (
    <motion.main className="px-[5%] md:px-[12%]">
      <CircleBackGround />
      <section>
        <h1 className="h2 md:h1 text-center">Features</h1>
        <p className="default-paragraph text-center w-3/4 md:w-1/2 mx-auto mt-5">
          We offer advanced analytics capabilities to monitor website engagement
          and manage ads effectively, ensuring the growth of your brand.
        </p>
      </section>
      <FeaturesComponent />
      <section className="border-t mt-[8%] pt-[8%]">
        <GreyButton text="One Platform" />
        <h3 className="h3 md:h2 text-center mt-8">
          One platform to rule <br /> them all
        </h3>
        <div className="md:flex justify-between">
          <div className="text-center md:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <Image
              src={assets.allInOne}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h4 className="h4 mt-3">All-in-one platform</h4>
            <p className="default-paragraph my-6">
              We offer a comprehensive, all-in-one platform that covers all your
              web development and online presence needs.
            </p>
            <Link href="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center md:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <Image
              src={assets.advancedCharts}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h4 className="h4 mt-3">Advanced charts</h4>
            <p className="default-paragraph my-6">
              We provide advanced charting features that allows you to visualize
              your data in a clear and meaningful way.
            </p>
            <Link href="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center md:w-1/3 pb-12 pt-16 px-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <Image
              src={assets.Magic}
              alt="secure platform"
              className="w-4/5 h-1/3 mx-auto"
            />
            <h4 className="h4 mt-3">Multiple integrations</h4>
            <p className="default-paragraph my-6">
              We are excited to offer you an unparalleled level of service
              through our global partnerships. Get ready for an experience
              beyond your imagination. Keep an eye out for updates!
            </p>
            <Link href="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <FreeTrial />
    </motion.main>
  );
};

export default Features;
