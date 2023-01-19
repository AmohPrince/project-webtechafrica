import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import Billed from "../Components/Billed";
import BlackIshButton from "../Components/BlackIshButton";
import BlogArticle from "../Components/BlogArticle";
import { GreyButton } from "../Components/GreyButton";
import HomeBackground from "../Components/HomeBackground";
import Blogs from "../Json/Blogs.json";

export const Home = () => {
  const [activeButton, setActiveButton] = useState<number>(1);

  return (
    <>
      <HomeBackground />
      <section className="flex mt-[14%] justify-between relative">
        <div className="w-[50%]">
          <h1 className="h1">
            Build your <br /> audience and grow <br /> your brand online
          </h1>
          <p className="text-gray-500 mt-4 mb-7">
            Get your website or web application on the cheap today with Africa's{" "}
            <br />
            fastest growing tech corporation.{" "}
          </p>
          <div className="flex text-sm">
            <button className="bg-primaryOne text-white py-3 px-6 rounded-full">
              Get Started
            </button>
            <button className="bg-gray-100 rounded-full pl-4 pr-1 ml-3 flex items-center font-bold">
              Watch Video
              <img
                src={assets.PlayButton}
                alt="play"
                className="h-9 w-9 ml-3"
              />
            </button>
          </div>
        </div>
        <img
          src={assets.GraphScreen}
          alt="graph"
          className="w-[50%] ml-11 object-cover absolute -right-12 -top-12"
        />
      </section>
      <section className="mt-[12%]">
        <GreyButton text="Features" />
        <h1 className="h2 text-center my-5">
          Powerful features to boost <br /> your productivity
        </h1>
        <div className="flex justify-between">
          <div className="text-center w-1/3 pb-12 pt-16 pr-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.SecurePlatform}
              alt="secure platform"
              className="w-4/5 h-1/3"
            />
            <h3 className="h4 mt-3">Secure platform</h3>
            <p className="default-paragraph my-6">
              We offer a secure platform online that ensures the protection of
              sensitive information and data transmitted through the platform.
              {/* Advanced security protocols and encryption methods are employed
          to safeguard against unauthorized access and ensure compliance
          with industry standards. Regular security audits and updates are
          also performed to maintain the integrity of the system and
          provide peace of mind for users. Our platform provides a
          reliable and safe environment for you to conduct online
          transactions and exchange important information with us. */}
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center w-1/3 pb-12 pt-16 px-4 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.AdvancedAnalytics}
              alt="secure platform"
              className="w-4/5 mx-auto h-1/3"
            />
            <h3 className="h4 mt-3">Advanced Analytics</h3>
            <p className="default-paragraph my-6">
              We offers advanced analytics to our customers, providing them with
              insights and data-driven decision making capabilities.
              {/* This includes tools to process and visualize large
          data sets, and to perform statistical and machine learning
          modeling. With this service, your customers are able to make
          more informed business decisions based on data trends, user
          behavior and many more. */}
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
          <div className="text-center w-1/3 pb-12 pt-16 pl-6 rounded-[40px] hover:bg-gray-50 transition-all">
            <img
              src={assets.PowerfulAutomation}
              alt="secure platform"
              className="w-4/5 ml-auto h-1/3"
            />
            <h3 className="h4 mt-3">Powerful automation</h3>
            <p className="default-paragraph my-6">
              We provide powerful automation capabilities to streamline
              processes, increase efficiency and improve productivity.
              {/* This can include tools for automating repetitive
          tasks, scheduling, workflow management, and integration with
          other software and systems. The automation service can
          significantly reduce human error, saving time and costs for your
          customers. Additionally, Automation can provide your customers
          with the ability to scale operations, and to focus on more
          strategic and creative activities. */}
            </p>
            <Link to="/features" className="underline font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-[6%] relative items-stretch">
        <div className="w-4/5 bg-gray-50 py-[8%] pl-[5%] rounded-[50px]">
          <div className="w-3/5">
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
          className="absolute top-1/2 -translate-y-1/2 -right-14 w-1/2 z-10"
        />
        <div className="bg-primaryOne h-full w-1/4 absolute top-0 right-0 rounded-l-[50px] translate-x-full z-0" />
      </section>
      <section className="text-center mt-[10%]">
        <GreyButton text="How we work" />
        <h2 className="h2 mt-8 mb-12">Work smarter, work faster..</h2>
        <div className="flex justify-between">
          <button
            className={`bg-gray-200 py-5 px-16 rounded-md ${
              activeButton === 1 ? "active" : ""
            }`}
            onClick={() => setActiveButton(1)}
          >
            01. Create account
          </button>
          <button
            className={`bg-gray-200 py-5 px-10 rounded-md ${
              activeButton === 2 ? "active" : ""
            }`}
            onClick={() => setActiveButton(2)}
          >
            02. Call in or fill website application form
          </button>
          <button
            className={`bg-gray-200 py-5 px-16 rounded-md ${
              activeButton === 3 ? "active" : ""
            }`}
            onClick={() => setActiveButton(3)}
          >
            03. Track your progress
          </button>
        </div>
        {activeButton === 1 && (
          <div className="px-[4%] pt-[5%] text-left flex items-start">
            <div className="w-3/5">
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
              <p className="default-paragraph my-5 w-[95%]">
                Creating user accounts allows us to track your web development
                process , payment information of individual users, making it
                easier to identify and resolve any issues that may arise. This
                also allows us better understand how users interact with their
                sites, which can be used to improve the overall user experience.
              </p>
              <BlackIshButton text="Get started" />
            </div>
            <img src={assets.Accounts} alt="account" className="w-2/5" />
          </div>
        )}
        {activeButton === 2 && (
          <div className="px-[4%] pt-[5%] text-left flex items-start">
            <img src={assets.BlueCard} alt="account" className="w-2/5 mr-3" />
            <div className="flex justify-end flex-col">
              <div className="flex items-center">
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
            <div className="w-1/2">
              <div className="flex items-center">
                <img
                  src={assets.Clock}
                  alt="Phone"
                  className="mr-3 w-16 h-16"
                />
                <h3 className="h3">Sit back and watch the magic happen</h3>
              </div>
              <p className="default-paragraph mt-4 mb-8">
                Get ready to be amazed! With our unique system, clients can sit
                back and watch as their website is built before their eyes.
                Whether they choose to track their progress through a convenient
                link or view it directly on their dashboards, you'll be able to
                see the magic happen in real-time.
              </p>
              <BlackIshButton text="Get me a website  🚀" />
            </div>
            <img
              src={assets.Magic}
              alt="account"
              className="w-2/5 ml-3 object-cover"
            />
          </div>
        )}
      </section>
      <section className="mt-[10%] bg-primaryOne text-white absolute right-0 left-0 text-center py-[8%] overflow-hidden">
        <p className="text-xs px-6 py-2 w-max mx-auto testimonial-title rounded-full">
          Testimonial
        </p>
        <h3 className="h3">Trusted by thousands of businesses.</h3>
        <p className="text-7xl">“</p>
        <p className="w-3/4 mx-auto">
          I have to say, I was a bit skeptical at first about working with
          WebVira for my website development needs. But I have to admit, I was
          blown away by the entire process. Not only was it incredibly
          cost-effective, but the speed at which my website was built was
          nothing short of impressive. The team at WebVira was extremely
          professional and dedicated to ensuring that my website was exactly
          what I wanted. They were also very responsive to my questions and made
          sure that I was completely satisfied with the final product. I would
          highly recommend WebVira to anyone looking for a reliable, efficient
          and cost-effective web development solution
        </p>
        <img
          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shirleen Annika"
          className="rounded-full w-24 h-24 object-cover mx-auto mt-8 mb-4"
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
      <section className="flex justify-between mt-[97%] items-start">
        <div className="w-[30%] text-left">
          <GreyButton text="Pricing" className="mr-auto" />
          <h3 className="h3 mt-7 mb-6">
            Simple and <br />
            flexible pricing
          </h3>
          <p className="default-paragraph">
            Simplify your budgeting with our transparent and adaptable pricing
            options.
          </p>
          <h4 className="h4 mt-3 mb-4">Accepted Payment Methods</h4>
          <div className="bg-gray-50 flex justify-between py-1 px-2 rounded-md">
            <img
              src={assets.PayPal}
              alt="Paypal"
              className="w-1/3 object-cover h-[55px]"
            />
            <img
              src={assets.Visa}
              alt="Visa"
              className="w-1/3 object-cover h-[55px]"
            />
            <img
              src={assets.Mpesa}
              alt="Mpesa"
              className="w-1/3 object-cover h-[55px]"
            />
          </div>
        </div>
        <div className="py-12 px-8 bg-gray-100 rounded-lg w-1/3 text-center">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-extrabold">Basic</h3>
            <p className="text-xs px-3 py-2 rounded-full bg-white font-semibold text-secondaryFour">
              Save 30%
            </p>
          </div>
          <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
            <p className="font-extrabold text-4xl mb-4">
              kes. 899 <span className="text-sm">/ month</span>
            </p>
            <Billed text="Billed as Ksh 9,699 per year" />
          </div>
          <div className="text-secondaryFour">
            <p>
              <span className="font-semibold text-black">Unlimited</span>{" "}
              customer support
            </p>
            <p>Hosting</p>
            <p>Custom domain name</p>
            <p>
              Complete{" "}
              <span className="font-semibold text-black">
                website design and development
              </span>
            </p>
          </div>
          {/* <p>Social media management</p>
      <p>Custom Ads management</p> */}
          <button className="py-3 px-7 rounded-full border mt-8 hover:bg-orange transition-all text-sm font-bold hover:border-orange hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="py-12 px-8 bg-gray-100 rounded-lg w-1/3 text-center">
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-extrabold">Advanced</h3>
            <p className="text-xs bg-gray-200 text-primaryOne py-2 px-3 rounded-full w-max font-bold">
              Popular
            </p>
          </div>
          <div className="text-center py-6 border-t border-b mt-8 mb-8 border-border">
            <p className="font-extrabold text-4xl mb-4">
              kes. 1499 <span className="text-sm">/ month</span>
            </p>
            <Billed text="Billed as Ksh 15,599 per year" />
          </div>
          <div className="text-secondaryFour">
            <p>
              <span className="font-semibold text-primaryOne">Unlimited</span>{" "}
              customer support
            </p>
            <p>Hosting</p>
            <p>Custom domain name</p>
            <p>
              Complete{" "}
              <span className="font-semibold text-primaryOne">
                website design and development
              </span>
            </p>
            <p>Social media management</p>
            <p>Custom Ads management</p>
            <p>
              <span className="font-semibold text-primaryOne"> Sell</span>{" "}
              products online
            </p>
          </div>
          <button className="py-3 px-7 rounded-full border mt-8 hover:bg-primaryTwoLight transition-all text-sm font-bold hover:scale-105 bg-primaryTwo text-white">
            Get Started
          </button>
        </div>
      </section>
      <section className="mt-[10%] relative text-white">
        <img
          src={assets.FreeTrial}
          alt="free trial"
          className="absolute top-0 left-0 right-0 z-0"
        />
        <div className="relative z-10 py-11 px-16 flex justify-between">
          <div className="w-1/2">
            <h2 className="h2">
              Start your free trial <br />
              today
            </h2>
            <p>
              Unleash the true potential of your business with our one month
              free trial, start today and see the difference!
            </p>
            <div className="flex mt-8 justify-between">
              <input
                type="email"
                className="email-input py-3 px-8 focus:outline-none rounded-full placeholder:text-white"
                placeholder="your email here..."
              />
              <button className="text-xs bg-white px-7 text-primaryOne rounded-full font-bold">
                Get started
              </button>
            </div>
          </div>
          <img src={assets.Departments} alt="Departments" className="w-1/2" />
        </div>
      </section>
      <section className="mt-[10%]">
        <GreyButton text="Blog" />
        <h3 className="h3">Most popular articles</h3>
        <div className="flex justify-between">
          {Blogs.slice(0, 2).map((article, index) => (
            <BlogArticle article={article} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
