import { BasicPlanRightTab } from "@/components/BasicPlanRightTab";
import { CircleBackGround } from "@/components/CircleBackGround";
import { assets } from "@/public/assets";
import { BASIC_FEATURES, PREMIUM_FEATURES } from "@/util/utilities";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const description = `The basic plan offers features for most of your web development needs. Some of the features include ${BASIC_FEATURES.map(
  (feature, index) => {
    const isLastItem = index === BASIC_FEATURES.length - 1;
    return feature.text.replace(/<\/?sp>/g, "") + (isLastItem ? "" : ", ");
  }
).join("")}`;

export const metadata: Metadata = {
  title: "Basic pricing",
  description,
};

const BasicPricingPage = () => {
  return (
    <main className="mx-[5%] md:mx-[12%]">
      <CircleBackGround />
      <section className="z-10 relative flex justify-between flex-col md:flex-row">
        <div className="border-b pb-5 w-full md:w-1/2">
          <h1 className="h2">Basic Plan</h1>
          <p className="default-paragraph mb-7">
            The basic plan offers the basic but powerful services that ensures
            you get yourself a website online.
          </p>
          <ul>
            {BASIC_FEATURES.map((feature) => feature.text).map(
              (features, i) => (
                <li className="flex items-center mb-5" key={i}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#25b636" }}
                    className="w-5 h-5 mr-5"
                  />
                  <p className="default-paragraph">
                    {features.replace(/<\/?sp>|,/g, "")}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <BasicPlanRightTab />
      </section>
      <section className="mt-[8%] flex justify-between flex-col md:flex-row items-end">
        <div className="w-full md:w-3/5">
          <h2 className="h3">Is the advanced plan a better choice for me ?</h2>
          <p className="default-paragraph my-5">
            The advanced plan package offers more, for example social media
            management and the ability to sell products online. Sounds like you?
          </p>
          <ul>
            {PREMIUM_FEATURES.map((feature) => feature.text).map(
              (feature, i) => (
                <li className="flex items-center mb-5" key={i}>
                  <p className="default-paragraph">
                    <span className="text-black font-semibold">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    . {feature.replace(/<\/?sp>|,/g, "")}
                  </p>
                </li>
              )
            )}
          </ul>
          <Link href="/pricing/premium">
            <button className="rounded-full text-xs px-6 text-white bg-orangeText py-4 mt-5 hover:bg-primaryOneLight transition-all">
              Check out premium plan
            </button>
          </Link>
        </div>
        <Image
          src={assets.womanWritingCode}
          alt="Woman writing code"
          className="ml-auto mt-5 md:mt-0 w-1/2 md:w-1/4"
        />
      </section>
    </main>
  );
};

export default BasicPricingPage;
