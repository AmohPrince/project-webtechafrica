import { BlankTableRow } from "@/components/BlankTableRow";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { CircleBackGround } from "@/components/CircleBackGround";
import { BasicPricing } from "@/components/prices/BasicPricing";
import { PremiumPricing } from "@/components/prices/PremiumPricing";
import { PricingPackagesHeader } from "@/components/PricingPackagesHeader";
import { BASIC_FEATURES, PREMIUM_FEATURES } from "@/util/utilities";
import { Metadata } from "next";
import Link from "next/link";
import Row from "../../components/Row";

// const schema = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   name: "Pricing",
//   description: `We offer a basic and premium package. The Basic price starts from ${DEFAULT_PRICE.basic} with features like web shops and free one month ads. The premium price starts from ${DEFAULT_PRICE.advanced} with much much more features`,
//   offers: {
//     "@type": "AggregateOffer",
//     lowPrice: `${DEFAULT_PRICE.basic}`,
//     highPrice: `${DEFAULT_PRICE.advanced}`,
//     offerCount: "2",
//     priceCurrency: "USD",
//     offers: [
//       {
//         "@type": "Offer",
//         price: `${DEFAULT_PRICE.basic}`,
//         priceCurrency: "USD",
//         availability: "https://schema.org/InStock",
//         seller: {
//           "@type": "Organization",
//           name: "WebTech Africa",
//         },
//       },
//       {
//         "@type": "Offer",
//         price: `${DEFAULT_PRICE.advanced}`,
//         priceCurrency: "USD",
//         availability: "https://schema.org/InStock",
//         seller: {
//           "@type": "Organization",
//           name: "Web Tech Africa",
//         },
//       },
//     ],
//   },
// };

export const metadata: Metadata = {
  description:
    "Our pricing plans are designed to be flexible and affordable, with options that can accommodate the needs of businesses of all sizes, regardless of their budget or requirements.",
  title: "pricing",
  twitter: {
    description: "Affordable pricing plans for both basic and premium clients.",
  },
};

const page = () => {
  return (
    <main className="px-[5%] md:px-[12%]">
      <CircleBackGround />
      <section>
        <h1 className="h2 md:h1 text-center">Pricing</h1>
        <p className="default-paragraph text-center mt-3 w-5/6 mx-auto bg-white">
          Our pricing plans are designed to be flexible and affordable, with
          options that can accommodate the needs of businesses of all sizes,
          regardless of their budget or requirements. We work closely with our
          clients to understand their specific needs and provide them with the
          best plan that will meet their budget and deliver optimal results. Get
          50% off your first month of the basic subscription.
        </p>
      </section>
      <div className="mt-10 md:flex justify-between md:w-2/3 mx-auto gap-x-4">
        <BasicPricing className="md:w-1/2 mb-7" />
        <PremiumPricing className="md:w-1/2" />
      </div>
      <section className="mt-[8%]">
        <h4 className="h4 mb-12 text-center">Compare pricing packages</h4>
        <div className="rounded-[30px] bg-secondaryOne pb-6">
          <PricingPackagesHeader />
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
            <Link className="w-1/4 flex justify-center" href="/pricing/basic">
              <SecondaryButton
                text="Get Started"
                // onClick={() => scrollToTop()}
              />
            </Link>
            <Link
              className="w-1/4 flex justify-center"
              href="/pricing/advanced"
            >
              <SecondaryButton
                text="Get Started"
                // onClick={() => scrollToTop()}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
