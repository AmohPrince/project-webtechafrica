import { CircleBackGround } from "@/components/CircleBackGround";
import Layout from "@/components/Layout";
import { NextHead } from "@/components/NextHead";
import { WaitListModal } from "@/components/WaitListModal";
import { addEmailToWaitList } from "@/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { DEFAULT_PRICE, useGlobalData } from "@/hooks/useGlobalData";
import { assets } from "@/public/assets";
import {
  PREMIUM_FEATURES,
  BASIC_FEATURES,
  scrollToTop,
} from "@/util/utilities";
import {
  faCircleCheck,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const description = `All features in the basic plan plus more ${PREMIUM_FEATURES.map(
  (feature) => {
    const isLastItem =
      PREMIUM_FEATURES.indexOf(feature) === PREMIUM_FEATURES.length - 1;
    return feature.text.replace(/<\/?sp>/g, "") + (isLastItem ? "" : ", ");
  }
).join("")}`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Package",
  description: description,
  offers: {
    "@type": "Offer",
    price: `${DEFAULT_PRICE.advanced}`, // Set the price for the premium package
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Your Company Name",
    },
  },
};

const AdvancedPricingPage = () => {
  const { user } = useAuth();
  const { price, showNotification } = useGlobalData();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingEmailModal, setIsShowingEmailModal] = useState(false);

  const handleJoiningWaitlist = async () => {
    if (user) {
      setIsLoading(true);
      try {
        await addEmailToWaitList(user.email!);
        showNotification(
          "You successfully joined the premium waitlist!",
          "success"
        );
      } catch (error) {
        console.error(error);
        showNotification("An error occurred!", "error");
      }
      setIsLoading(false);
    } else {
      setIsShowingEmailModal(true);
    }
  };

  return (
    <>
      <NextHead
        canonical="/pricing/premium"
        description={description}
        title="premium"
        twitterDescription="All features in the basic plan plus more"
        schemaJSON={schema}
      />
      <Layout>
        <section className="mx-[5%] md:mx-[12%]">
          <AnimatePresence>
            {isShowingEmailModal && (
              <WaitListModal setIsShowingEmailModal={setIsShowingEmailModal} />
            )}
          </AnimatePresence>
          <CircleBackGround />
          <section className="z-10 relative flex flex-col md:flex-row justify-between w-full">
            <div className="border-b pb-5 w-full md:w-1/2">
              <h1 className="h2">Premium Plan</h1>
              <p className="default-paragraph mb-7 bg-white">
                Unleash your online potential with the advanced package! This
                comprehensive plan goes above and beyond the basic option by
                delivering a fully customized e-commerce platform for you to
                sell all your goods. Your personal clients can easily access
                your site via a unique link, and we've got you covered for
                payments. Ready for the full rundown of all the advanced
                features?
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
            <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-full md:w-[45%] mt-5 md:mt-0">
              <h2 className="h3">So how much will it cost me?</h2>
              <p className="default-paragraph mb-8">
                The advanced plan currently goes for as little as{" "}
                {price.currency + " "}
                {price.advanced} / month. This is inclusive of everything listed
                in both the basic and advanced plan.
              </p>
              <p className="font-bold text-5xl">
                {price.currency} {price.advanced}{" "}
                <span className="text-base">/ month</span>
              </p>
              <button
                className="rounded-full w-full text-xs text-white bg-orangeText py-4 mt-5 hover:bg-primaryOne transition-all"
                onClick={handleJoiningWaitlist}
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                ) : (
                  "Join the waitlist 🚀"
                )}
              </button>
            </div>
          </section>
          <section className="mt-[8%] flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-3/5">
              <h2 className="h3">Is the basic plan a good choice for me ?</h2>
              <p className="default-paragraph my-5">
                Whilst it is always temptation to go for the advanced plan, it
                is possible that you might not need the features it offers. Take
                a look at the basic plan below
              </p>
              <ul>
                {BASIC_FEATURES.map((feature) => feature.text).map(
                  (feature, i) => (
                    <li className="default-paragraph mb-5" key={i}>
                      <span className="text-black font-semibold">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      .{feature.replace(/<\/?sp>|,/g, "")}
                    </li>
                  )
                )}
              </ul>
              <Link href="/pricing/basic" onClick={scrollToTop}>
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
        </section>
      </Layout>
    </>
  );
};

export default AdvancedPricingPage;
