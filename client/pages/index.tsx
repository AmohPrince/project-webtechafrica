import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { FeaturesComponent } from "@/components/home/FeaturesComponent";
import FreeTrial from "@/components/home/FreeTrial";
import { NextHead } from "@/components/NextHead";
import { HowWeWork } from "@/components/home/HowWeWork";
import Testimonial from "@/components/home/Testimonial";
import { Pricing } from "@/components/home/Pricing";
import { Blogs } from "@/components/home/Blogs";
import { CheapAndPowerful } from "@/components/home/CheapAndPowerful";
import Background from "@/components/home/Background";
import { HomeMain } from "@/components/home/HomeMain";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebTech Africa",
  url: "https://www.webtechafrica.com/",
  description:
    "Leverage the power of AI to create insanely beautiful websites that will spear head your business to the top of its specific niche.",
};

export default function Home() {
  return (
    <>
      <NextHead
        description="Leverage the power of AI to create insanely beautiful websites that will spear head your business to the top of its specific
niche."
        title="WebTech Africa"
        canonical="/"
        twitterDescription="Let the world best software engineers re-brand your online presence"
        schemaJSON={schema}
      />
      <Layout>
        <Background />
        <main>
          <HomeMain />
          <FeaturesComponent className="px-[5%] md:px-[12%]" />
          <CheapAndPowerful />
          <HowWeWork />
          <Testimonial />
          <Pricing />
          <FreeTrial className="mx-[5%] md:mx-[12%]" />
          <Blogs />
        </main>
      </Layout>
    </>
  );
}
