import { BasicPricing } from "@/components/prices/BasicPricing";
import { BlankTableRow } from "@/components/BlankTableRow";
import { CircleBackGround } from "@/components/CircleBackGround";
import Layout from "@/components/Layout";
import { NextHead } from "@/components/NextHead";
import { PremiumPricing } from "@/components/prices/PremiumPricing";
import { SecondaryButton } from "@/components/SecondaryButton";
import { useGlobalData } from "@/hooks/useGlobalData";
import {
  BASIC_FEATURES,
  PREMIUM_FEATURES,
  scrollToTop,
} from "@/util/utilities";
import { motion } from "framer-motion";
import Link from "next/link";
import Row from "../../components/Row";

const Pricing = () => {
  const { price } = useGlobalData();
  return (
    <>
      <NextHead
        canonical="www.webtechafrica.com/pricing"
        description="Our pricing plans are designed to be flexible and affordable, with
    options that can accommodate the needs of businesses of all sizes,
    regardless of their budget or requirements."
        title="pricing"
        twitterDescription="Affordable pricing plans for both basic and premium clients."
      />
      <Layout>
        <motion.main className="px-[5%] sm:px-[12%]">
          <CircleBackGround />
          <section className="mt-[8%]">
            <h1 className="h2 sm:h1 text-center">Pricing</h1>
            <p className="default-paragraph text-center mt-3 w-5/6 mx-auto bg-white">
              Our pricing plans are designed to be flexible and affordable, with
              options that can accommodate the needs of businesses of all sizes,
              regardless of their budget or requirements. We work closely with
              our clients to understand their specific needs and provide them
              with the best plan that will meet their budget and deliver optimal
              results.
            </p>
          </section>
          <div className="mt-10 sm:flex justify-between sm:w-2/3 mx-auto gap-x-4">
            <BasicPricing className="sm:w-1/2 mb-7" />
            <PremiumPricing className="sm:w-1/2" />
          </div>
          <section className="mt-[8%]">
            <h4 className="h4 mb-12 text-center">Compare pricing packages</h4>
            <div className="rounded-[30px] bg-secondaryOne pb-6">
              <div className="flex border-b px-14 py-7 justify-between">
                <h3 className="h4 sm:h3 w-1/3">Features</h3>
                <div className="text-center w-1/4">
                  <h3 className="h4 sm:h3">Basic</h3>
                  <p className="font-semibold text-base">
                    {price.basic} {price.currency} / month
                  </p>
                </div>
                <div className="text-center w-1/4">
                  <h3 className="h4 sm:h3">Advanced</h3>
                  <p className="font-semibold text-base">
                    {price.advanced} {price.currency} / month
                  </p>
                </div>
              </div>
              <BlankTableRow name="Web Development" />
              {BASIC_FEATURES.filter(
                (feature) => feature.category === "Web Development"
              )
                .map((feature) => feature.text)
                .map((text, i) => (
                  <Row
                    text={text.replace(/<\/?sp>|,/g, "")}
                    basic
                    advanced
                    key={i}
                  />
                ))}
              <BlankTableRow name="Social Media and Ads" />
              {PREMIUM_FEATURES.filter(
                (feature) => feature.category === "Social Media and Ads"
              ).map((feature, i) => (
                <Row
                  text={feature.text.replace(/<\/?sp>|,/g, "")}
                  advanced
                  basic={BASIC_FEATURES.filter(
                    (feature) => feature.category === "Social Media and Ads"
                  )
                    .map((feature) => feature.text)
                    .includes(feature.text)}
                  key={i}
                />
              ))}
              <BlankTableRow name="Online business" />
              {PREMIUM_FEATURES.filter(
                (feature) => feature.category === "Online business"
              ).map((feature, i) => (
                <Row
                  text={feature.text.replace(/<\/?sp>|,/g, "")}
                  advanced
                  basic={BASIC_FEATURES.filter(
                    (feature) => feature.category === "Online business"
                  )
                    .map((feature) => feature.text)
                    .includes(feature.text)}
                  key={i}
                />
              ))}
              <div className="flex justify-between px-14 pt-4">
                <div className="w-1/3" />
                <Link
                  className="w-1/4 flex justify-center"
                  href="/pricing/basic"
                  onClick={() => scrollToTop()}
                >
                  <SecondaryButton text="Get Started" />
                </Link>
                <Link
                  className="w-1/4 flex justify-center"
                  href="/pricing/advanced"
                  onClick={() => scrollToTop()}
                >
                  <SecondaryButton text="Get Started" />
                </Link>
              </div>
            </div>
          </section>
        </motion.main>
      </Layout>
    </>
  );
};

export default Pricing;
