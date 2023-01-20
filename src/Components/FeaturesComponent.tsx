import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import { GreyButton } from "./GreyButton";

export const FeaturesComponent = () => {
  return (
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
            We provide powerful automation capabilities to streamline processes,
            increase efficiency and improve productivity.
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
  );
};
