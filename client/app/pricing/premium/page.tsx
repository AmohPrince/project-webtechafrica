import { CircleBackGround } from "@/components/CircleBackGround";
import { PremiumPlanRightTab } from "@/components/PremiumPlanRightTab";
import { assets } from "@/public/assets";
import { BASIC_FEATURES, PREMIUM_FEATURES } from "@/util/utilities";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description = `All features in the basic plan plus more ${PREMIUM_FEATURES.map(
  (feature) => {
    const isLastItem =
      PREMIUM_FEATURES.indexOf(feature) === PREMIUM_FEATURES.length - 1;
    return feature.text.replace(/<\/?sp>/g, "") + (isLastItem ? "" : ", ");
  }
).join("")}`;

export const metadata: Metadata = {
  description,
  title: "Premium plan",
  twitter: {
    description,
  },
};

const AdvancedPricingPage = () => {
  return (
    <main className="mx-[5%] md:mx-[12%]">
      <CircleBackGround />
      <section className="z-10 relative flex flex-col md:flex-row justify-between w-full">
        <div className="border-b pb-5 w-full md:w-1/2">
          <h1 className="h2">Premium Plan</h1>
          <p className="default-paragraph mb-7 bg-white">
            Unleash your online potential with the premium package! This
            comprehensive plan goes above and beyond the basic option by
            delivering a fully customized e-commerce platform for you to sell
            all your goods. Your personal clients can easily access your site
            via a unique link, and we've got you covered for payments. Ready for
            the full rundown of all the advanced features?
          </p>
          <ul>
            {PREMIUM_FEATURES.map((feature) => feature.text).map(
              (feature, i) => (
                <li className="flex items-center mb-5" key={i}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#25b636" }}
                    className="w-5 h-5 mr-5"
                  />
                  <p className="default-paragraph">
                    {feature.replace(/<\/?sp>|,/g, "")}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <PremiumPlanRightTab />
      </section>
      <section className="mt-[8%] flex justify-between flex-col md:flex-row">
        <div className="w-full md:w-3/5">
          <h2 className="h3">Is the basic plan a good choice for me ?</h2>
          <p className="default-paragraph my-5">
            Whilst it is always temptation to go for the advanced plan, it is
            possible that you might not need the features it offers. Take a look
            at the basic plan below
          </p>
          <ul>
            {BASIC_FEATURES.map((feature) => feature.text).map((feature, i) => (
              <li className="default-paragraph mb-5" key={i}>
                <span className="text-black font-semibold">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                .{feature.replace(/<\/?sp>|,/g, "")}
              </li>
            ))}
          </ul>
          <Link href="/pricing/basic">
            <button className="rounded-full text-xs px-6 text-white bg-primaryOne py-4 mt-5 hover:bg-orangeText transition-all">
              Check out basic plan
            </button>
          </Link>
        </div>
        <Image
          src={assets.manSlidingImages}
          alt="man sliding images"
          className="ml-auto w-1/2 md:w-1/4 mt-5 md:mt-0"
        />
      </section>
    </main>
  );
};

export default AdvancedPricingPage;
