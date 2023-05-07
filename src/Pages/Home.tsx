import { faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import { AdvancedPricing } from "../Components/AdvancedPricing";
import { BasicPricing } from "../Components/BasicPricing";
import BlackIshButton from "../Components/BlackIshButton";
import BlogArticle from "../Components/BlogArticle";
import { FeaturesComponent } from "../Components/Home/FeaturesComponent";
import FreeTrial from "../Components/Home/FreeTrial";
import { GreyButton } from "../Components/GreyButton";
import HomeBackground from "../Components/Home/HomeBackground";
import {
  fadeAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../FramerMotion/motion";
import blogs from "../Json/Blogs.json";

export const Home = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  return (
    <motion.section>
      <HomeBackground />
      {/* Build your audience and grow your brand online */}
      <motion.section
        className="flex flex-col sm:flex-row mt-[14%] justify-between relative"
        {...slideAnimation("left")}
      >
        <motion.div className="sm:w-[50%]" {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className="h2 sm:h1">
              Build your <br /> audience and grow <br /> your brand online
            </h1>
          </motion.div>
          <motion.p className="text-gray-500 mt-4 mb-7">
            Get your website or web application on the cheap today with Africa's{" "}
            <br />
            fastest growing tech corporation.{" "}
          </motion.p>
          <div className="flex text-sm justify-center sm:justify-start gap-x-3">
            <button className="bg-primaryOne text-white py-3 px-6 rounded-full">
              Get Started
            </button>
            <button className="bg-gray-100 rounded-full pl-4 pr-1 flex items-center font-bold">
              Watch Video
              <img
                src={assets.PlayButton}
                alt="play"
                className="h-9 w-9 ml-3"
              />
            </button>
          </div>
        </motion.div>
        <motion.img
          src={assets.GraphScreen}
          alt="graph"
          className="w-3/4 sm:w-[50%] mx-auto mt-10 sm:mt-0 sm:ml-11 object-cover sm:absolute -right-12 -top-12"
          {...fadeAnimation}
        />
      </motion.section>
      {/* features  */}
      <FeaturesComponent />
      <section className="mt-[6%] relative items-stretch">
        <div className="w-11/12 sm:w-4/5 bg-gray-50 py-[8%] pl-[5%] rounded-xl sm:rounded-[50px]">
          <div className="w-full sm:w-3/5">
            <h3 className="h3">
              Cheap and powerful websites for your business to <br /> ensure
              people notice you online
            </h3>
            <p className="default-paragraph mt-6 mb-10 text-md">
              We have a team of expert designers and developers who work
              tirelessly to deliver top-notch designs and user experiences that
              exceed our client's expectations. Our goal is to help businesses
              succeed online and we take pride in achieving it.
            </p>
            <div className="flex items-center">
              <img src={assets.Coin} alt="coin" className="mr-5 w-16 h-16" />
              <div>
                <h4 className="h4">Cost effective</h4>
                <p className="default-paragraph text-sm">
                  We offer affordable web development solutions for businesses
                  looking to establish a strong online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={assets.Dashboard}
          alt="dashboard"
          className="hidden sm:inline absolute top-1/2 -translate-y-1/2 -right-14 w-1/2 z-10"
        />
        <div className="bg-primaryOne h-full w-1/4 absolute top-0 right-0 rounded-l-[50px] translate-x-full z-0" />
      </section>
      {/* Work smarter, work faster.. */}
      <section className="text-center mt-[10%]">
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
              <div className="flex items-center">
                <img
                  src={assets.Person}
                  alt="person"
                  className="w-16 h-16 mr-5"
                />
                <h3 className="h3">
                  Create your account <br />& start your work
                </h3>
              </div>
              <p className="default-paragraph w-[95%] my-5">
                Creating user accounts allows us to track your web development
                process , payment information of individual users, making it
                easier to identify and resolve any issues that may arise. This
                also allows us better understand how users interact with their
                sites, which can be used to improve the overall user experience.
              </p>
              <Link to="/sign-in">
                <BlackIshButton text="Get started" />
              </Link>
            </div>
            <img
              src={assets.Accounts}
              alt="account"
              className="hidden sm:inline w-2/5"
            />
          </div>
        )}
        {activeButton === 2 && (
          <div className="px-[4%] pt-[5%] text-left flex items-start">
            <img
              src={assets.BlueCard}
              alt="account"
              className="hidden sm:inline w-2/5 mr-3"
            />
            <div className="flex justify-end flex-col">
              <div className="flex items-start sm:items-center">
                <img
                  src={assets.Phone}
                  alt="Phone"
                  className="mr-3 w-16 h-16"
                />
                <h3 className="h3">
                  Call in or fill out our simple web info form and let us know
                  more!
                </h3>
              </div>
              <p className="default-paragraph my-5">
                We strongly encourage clients to reach out to us either by phone
                or by filling out the form on our website. This will allow us to
                gather all the necessary information to build the perfect
                website tailored to your needs and preferences. Your input is
                crucial in creating a website that meets your goals and exceeds
                your expectations. So please don't hesitate to contact us, we
                are here to help and guide you through the process.
              </p>
              <BlackIshButton text="Fill in form" />
            </div>
          </div>
        )}
        {activeButton === 3 && (
          <div className="px-[4%] pt-[5%] text-left flex items-start justify-between">
            <div className="sm:w-1/2">
              <div className="flex items-center">
                <img
                  src={assets.Clock}
                  alt="Phone"
                  className="mr-3 w-16 h-16"
                />
                <h3 className="h3">Sit back and watch the magic happen</h3>
              </div>
              <div className="flex my-5 gap-x-2">
                <p className="default-paragraph ">
                  Get ready to be amazed! With our unique system, clients can
                  sit back and watch as their website is built before their
                  eyes. Whether they choose to track their progress through a
                  convenient link or view it directly on their dashboards,
                  you'll be able to see the magic happen in real-time.
                </p>
                <img
                  src={assets.Magic}
                  alt="account"
                  className="sm:hidden w-2/5 object-cover"
                />
              </div>
              <BlackIshButton text="Get me a website  🚀" />
            </div>
            <img
              src={assets.Magic}
              alt="account"
              className="hidden sm:inline w-2/5 ml-3 object-cover"
            />
          </div>
        )}
      </section>
      {/* Testimonial TODO really fix this stuff to not use absolute positioning */}
      <section className="mt-[10%] bg-primaryOne text-white text-center py-[8%] overflow-hidden w-full">
        <p className="text-xs px-6 py-2 w-max mx-auto testimonial-title rounded-full">
          Testimonial
        </p>
        <h3 className="h3">Trusted by thousands of businesses.</h3>
        <p className="text-7xl">“</p>
        <p className="w-3/4 mx-auto">
          I have to say, I was a bit skeptical at first about working with
          WebTech Africa for my website development needs. But I have to admit,
          I was blown away by the entire process. Not only was it incredibly
          cost-effective, but the speed at which my website was built was
          nothing short of impressive. The team at WebTech Africa was extremely
          professional and dedicated to ensuring that my website was exactly
          what I wanted. They were also very responsive to my questions and made
          sure that I was completely satisfied with the final product. I would
          highly recommend WebTech Africa to anyone looking for a reliable,
          efficient and cost-effective web development solution
        </p>
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shirleen Annika"
          className="rounded-full w-24 h-24 object-cover mx-auto mt-8 mb-4 z-10 relative"
        />
        <p className="text-2xl font-semibold">Shirleen Annika</p>
        <p className="text-xs">Developer, South Africa</p>
        <img src={assets.FiveStar} alt="Five star" className="mx-auto w-[8%]" />
        <img
          src={assets.CircleOne}
          alt="circle"
          className="absolute -right-1/4 -bottom-[60%] rotate-90"
        />
        <img
          src={assets.CircleOne}
          alt="circle"
          className="absolute -right-[40%] -bottom-3/4 rotate-[95deg]"
        />
        <img
          src={assets.CircleTwo}
          alt="circle"
          className="absolute -top-3/4 -left-1/2 rotate-[270deg]"
        />
      </section>
      {/* simple and flexible pricing */}
      <section className="flex flex-col sm:flex-row gap-x-3 items-start mt-[10%]">
        <div className="w-full sm:w-1/3 text-left mb-5">
          <GreyButton text="Pricing" className="ml-auto sm:ml-0 mr-auto" />
          <h3 className="h3 mt-7 mb-6">
            Simple and <br />
            flexible pricing
          </h3>
          <p className="default-paragraph">
            Simplify your budgeting with our transparent and adaptable pricing
            options.
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
        <div className="flex justify-between gap-x-2">
          <BasicPricing className="w-1/2" />
          <AdvancedPricing className="w-1/2" />
        </div>
      </section>
      {/* free trial */}
      <FreeTrial />
      {/* blogs */}
      <section className="mt-[10%]">
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
    </motion.section>
  );
};
