import { faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import blogs from "../json/Blogs.json";
import { useAuth } from "../hooks/useAuth";
import Layout from "@/components/Layout";
import { BasicPricing } from "@/components/prices/BasicPricing";
import BlackIshButton from "@/components/BlackIshButton";
import BlogArticle from "@/components/BlogArticle";
import { FeaturesComponent } from "@/components/FeaturesComponent";
import FreeTrial from "@/components/FreeTrial";
import { GreyButton } from "@/components/GreyButton";
import HomeBackground from "@/components/HomeBackground";
import {
  slideAnimation,
  headContainerAnimation,
  headTextAnimation,
  fadeAnimation,
} from "@/framer/motion";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/public/assets";
import { PremiumPricing } from "@/components/prices/PremiumPricing";
import { NextHead } from "@/components/NextHead";

export default function Home() {
  const [activeButton, setActiveButton] = useState<number>(1);
  const { user } = useAuth() || {};

  return (
    <>
      <NextHead
        description="Leverage the power of AI to create insanely beautiful websites that will spear head your business to the top of its specific
niche."
        title="WebTech Africa"
        canonical="www.webtechafrica.com"
        twitterDescription="Let the world best software engineers re-brand your online presence"
      />
      <Layout>
        <motion.main>
          <HomeBackground />
          <motion.section
            className="flex flex-col sm:flex-row mt-[9%] justify-between item-start relative mx-[5%] sm:mx-[12%]"
            {...slideAnimation("left")}
          >
            <motion.div className="sm:w-[50%]" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="h2 sm:h1">
                  Build your <br /> audience and grow <br /> your brand online
                </h1>
              </motion.div>
              <motion.p className="text-gray-500 mt-4 mb-7 bg-white">
                Leverage the power of AI to create insanely beautiful websites
                that will spear head your business to the top of its specific
                <br />
                niche. Let the worlds best developers and UI/UX designers
                rebrand your online presence for the maximization of profits
                with africa's fastest growing tech corporation.{" "}
              </motion.p>
              <div className="flex text-sm justify-center sm:justify-start gap-x-3 items-center">
                <Link
                  href={`${
                    user
                      ? "/dashboard/new-website"
                      : "/sign-in/?source=get-started"
                  }`}
                >
                  <button className="bg-primaryOne text-white py-3 px-6 rounded-full hover:bg-primaryOneLight transition-all">
                    Get Started
                  </button>
                </Link>
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
              className="w-3/4 sm:w-[50%] mx-auto mt-10 sm:mt-0 sm:ml-11 object-cover sm:absolute -right-12 -top-12"
              {...fadeAnimation}
              priority
            />
          </motion.section>
          {/* features  */}
          <FeaturesComponent className="px-[5%] sm:px-[12%]" />
          <section className="mt-[6%] relative items-stretch mx-[5%] sm:mx-[12%]">
            <div className="w-11/12 sm:w-4/5 bg-gray-50 py-[8%] pl-[5%] rounded-xl sm:rounded-[50px]">
              <div className="w-full sm:w-3/5">
                <h3 className="h3">
                  Cheap and powerful websites for your business to <br /> ensure
                  people notice you online
                </h3>
                <p className="default-paragraph mt-6 mb-10 text-md">
                  We have a team of expert designers and developers who work
                  tirelessly to deliver top-notch designs and user experiences
                  that exceed our client's expectations. Our goal is to help
                  businesses succeed online and we take pride in achieving it.
                </p>
                <div className="flex items-center">
                  <Image
                    src={assets.Coin}
                    alt="coin"
                    className="mr-5 w-16 h-16"
                  />
                  <div>
                    <h4 className="h4">Cost effective</h4>
                    <p className="default-paragraph text-sm">
                      We offer affordable web development solutions for
                      businesses looking to establish a strong online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={assets.Dashboard}
              alt="dashboard"
              className="hidden sm:inline absolute top-1/2 -translate-y-1/2 -right-14 w-1/2 z-10"
            />
            <div className="bg-primaryOne h-full w-1/4 absolute top-0 right-0 rounded-l-[50px] translate-x-full z-0" />
          </section>
          {/* Work smarter, work faster.. */}
          <section className="text-center mt-[10%] px-[5%] sm:px-[12%]">
            <GreyButton text="How we work" />
            <h2 className="h2 mt-8 mb-12">Work smarter, work faster..</h2>
            <div className="flex justify-between gap-x-2">
              <button
                className={`bg-gray-200 py-5 sm:px-16 rounded-md ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => setActiveButton(1)}
              >
                01. Create account
              </button>
              <button
                className={`bg-gray-200 py-5 sm:px-10 rounded-md ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => setActiveButton(2)}
              >
                02. Call in or fill website application form
              </button>
              <button
                className={`bg-gray-200 py-5 sm:px-16 rounded-md ${
                  activeButton === 3 ? "active" : ""
                }`}
                onClick={() => setActiveButton(3)}
              >
                03. Track your progress
              </button>
            </div>
            {activeButton === 1 && (
              <div className="px-[4%] pt-[5%] text-left sm:flex items-start">
                <div className="w-full sm:w-3/5">
                  <div className="flex items-start sm:items-center">
                    <Image
                      src={assets.Person}
                      alt="person"
                      className="w-16 h-16 mr-5"
                    />
                    <h3 className="h4 sm:h3">
                      Create your account <br />& start your work
                    </h3>
                  </div>
                  <p className="default-paragraph w-[95%] my-5">
                    Creating user accounts allows us to track your web
                    development process , payment information of individual
                    users, making it easier to identify and resolve any issues
                    that may arise. This also allows us better understand how
                    users interact with their sites, which can be used to
                    improve the overall user experience.
                  </p>
                  <Link href="/sign-up">
                    <BlackIshButton text="Create account" />
                  </Link>
                </div>
                <Image
                  src={assets.Accounts}
                  alt="account"
                  className="hidden sm:inline w-2/5"
                />
              </div>
            )}
            {activeButton === 2 && (
              <div className="px-[4%] pt-[5%] text-left flex items-start">
                <Image
                  src={assets.BlueCard}
                  alt="account"
                  className="hidden sm:inline w-2/5 mr-3"
                />
                <div className="flex justify-end flex-col">
                  <div className="flex items-start sm:items-center">
                    <Image
                      src={assets.Phone}
                      alt="Phone"
                      className="mr-3 w-16 h-16"
                    />
                    <h3 className="h4 sm:h3">
                      Call in or fill out our simple web info form and let us
                      know more!
                    </h3>
                  </div>
                  <p className="default-paragraph my-5">
                    We strongly encourage clients to reach out to us either by
                    phone or by filling out the form on our website. This will
                    allow us to gather all the necessary information to build
                    the perfect website tailored to your needs and preferences.
                    Your input is crucial in creating a website that meets your
                    goals and exceeds your expectations. So please don't
                    hesitate to contact us, we are here to help and guide you
                    through the process.
                  </p>
                  <Link
                    href={`${
                      user
                        ? "/dashboard/new-website"
                        : "/sign-in/?source=get-started"
                    }`}
                    className="ml-auto"
                  >
                    <BlackIshButton text="Create a website now !" />
                  </Link>
                </div>
              </div>
            )}
            {activeButton === 3 && (
              <div className="px-[4%] pt-[5%] text-left flex items-start justify-between">
                <div className="sm:w-1/2">
                  <div className="flex items-start sm:items-center">
                    <Image
                      src={assets.Clock}
                      alt="Phone"
                      className="mr-3 w-16 h-16"
                    />
                    <h3 className="h4 sm:h3">
                      Sit back and watch the magic happen
                    </h3>
                  </div>
                  <div className="flex my-5 gap-x-2">
                    <p className="default-paragraph ">
                      Get ready to be amazed! With our unique system, clients
                      can sit back and watch as their website is built before
                      their eyes. Whether they choose to track their progress
                      through a convenient link or view it directly on their
                      dashboards, you'll be able to see the magic happen in
                      real-time.
                    </p>
                    <Image
                      src={assets.Magic}
                      alt="account"
                      className="sm:hidden w-2/5 object-cover"
                    />
                  </div>
                  <Link
                    href={`${
                      user
                        ? "/dashboard/new-website"
                        : "/sign-in/?source=get-started"
                    }`}
                    className="ml-auto"
                  >
                    <BlackIshButton text="Get me a website  🚀" />
                  </Link>
                </div>
                <Image
                  src={assets.Magic}
                  alt="account"
                  className="hidden sm:inline w-2/5 ml-3 object-cover"
                />
              </div>
            )}
          </section>
          {/* Testimonial */}
          <section className="mt-[10%] bg-primaryOne text-white text-center py-[8%] overflow-hidden relative">
            <p className="text-xs px-6 py-2 w-max mx-auto testimonial-title rounded-full">
              Testimonial
            </p>
            <h3 className="h3">Trusted by thousands of businesses.</h3>
            <p className="text-7xl">“</p>
            <p className="w-3/4 mx-auto">
              I have to say, I was a bit skeptical at first about working with
              WebTech Africa for my website development needs. But I have to
              admit, I was blown away by the entire process. Not only was it
              incredibly cost-effective, but the speed at which my website was
              built was nothing short of impressive. The team at WebTech Africa
              was extremely professional and dedicated to ensuring that my
              website was exactly what I wanted. They were also very responsive
              to my questions and made sure that I was completely satisfied with
              the final product. I would highly recommend WebTech Africa to
              anyone looking for a reliable, efficient and cost-effective web
              development solution
            </p>
            <Image
              src={"/shirleen.jpeg"}
              alt="Shirleen Annika"
              className="rounded-full w-24 h-24 object-cover mx-auto mt-8 mb-4 z-10 relative"
              width={96}
              height={96}
            />
            <p className="text-2xl font-semibold">Shirleen Annika</p>
            <p className="text-xs">Developer, South Africa</p>
            <Image
              src={assets.FiveStar}
              alt="Five star"
              className="mx-auto w-[8%]"
            />
            <Image
              src={assets.CircleOne}
              alt="circle"
              className="absolute -right-1/4 -bottom-[60%] rotate-90"
            />
            <Image
              src={assets.CircleOne}
              alt="circle"
              className="absolute -right-[40%] -bottom-3/4 rotate-[95deg]"
            />
            <Image
              src={assets.CircleTwo}
              alt="circle"
              className="absolute -top-3/4 -left-1/2 rotate-[270deg]"
            />
          </section>
          {/* simple and flexible pricing */}
          <section className="flex flex-col sm:flex-row gap-x-3 items-start mt-[10%] px-[5%] sm:px-[12%]">
            <div className="w-full sm:w-1/3 text-left mb-5">
              <GreyButton text="Pricing" className="ml-auto sm:ml-0 mr-auto" />
              <h3 className="h3 mt-7 mb-6">
                Simple and <br />
                flexible pricing
              </h3>
              <p className="default-paragraph">
                Simplify your budgeting with our transparent and adaptable
                pricing options.
              </p>
              <h4 className="h4 my-4">Accepted Payment Methods</h4>
              <div className="bg-gray-50 flex py-2 px-2 rounded-md">
                <FontAwesomeIcon
                  icon={faCcPaypal}
                  className="w-1/3 h-[55px] text-primaryOne"
                />
                <FontAwesomeIcon
                  icon={faCcVisa}
                  className="w-1/3 h-[55px] text-primaryOne"
                />
              </div>
            </div>
            <div className="sm:flex justify-between gap-x-2 w-full">
              <BasicPricing className="sm:w-1/2 mb-5 sm:mb-0" />
              <PremiumPricing className="sm:w-1/2" />
            </div>
          </section>
          {/* free trial */}
          <FreeTrial className="mx-[5%] sm:mx-[12%]" />
          {/* blogs */}
          <section className="mt-[10%] px-[5%] sm:px-[12%]">
            <GreyButton text="Blog" />
            <h3 className="h3 text-center sm:text-left my-5 sm:my-0">
              Most popular articles
            </h3>
            <div className="sm:flex justify-between gap-x-2">
              {blogs.slice(0, 2).map((article, index) => (
                <BlogArticle article={article} key={index} />
              ))}
            </div>
          </section>
        </motion.main>
      </Layout>
    </>
  );
}