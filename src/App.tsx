import React from "react";
import { Link } from "react-router-dom";
import { assets } from "./Assets/assets";
import Background from "./Components/Background";

function App() {
  return (
    <>
      <Background />
      <div className="px-[14%] relative py-14">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              src={assets.Logo}
              alt="Web vira"
              className="w-[60px] h-[40px] object-cover"
            />
            <h3 className="h3">WebVira</h3>
          </div>
          <div className="flex text-sm">
            <div className="flex rounded-full px-9 py-3 text-white navbar gap-x-11">
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <button className="bg-white px-8 rounded-full ml-10 font-semibold">
              Sign in
            </button>
          </div>
        </div>
        <div className="flex mt-[14%] justify-between relative">
          <div className="w-[50%]">
            <h1 className="h1">
              Build your <br /> audience and grow <br /> your brand online
            </h1>
            <p className="text-gray-500 mt-4 mb-7">
              Get your website or web application on the cheap today with
              Africa's <br />
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
        </div>
        <div className="mt-[12%]">
          <p className="text-xs bg-gray-200 text-primaryOne py-4 px-11 rounded-full w-max mx-auto font-bold">
            Features
          </p>
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
                We offers advanced analytics to our customers, providing them
                with insights and data-driven decision making capabilities.
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
        </div>
        <div className="mt-[6%] relative items-stretch">
          <div className="w-4/5 bg-gray-50 py-[8%] pl-[5%] rounded-[50px]">
            <div className="w-3/5">
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
        </div>
      </div>
    </>
  );
}

export default App;
