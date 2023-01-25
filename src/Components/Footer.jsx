import React from "react";
import { assets } from "../Assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-[10%] border-y py-[9%] flex justify-between">
        <div className="w-1/3">
          <div className="flex items-center">
            <img
              src={assets.Logo}
              alt="Logo"
              className="mr-2 w-10 h-10 object-cover"
            />
            <h4 className="h4">WebTech Africa</h4>
          </div>
          <p className="default-paragraph mt-6 my-9">
            Get your website or web application on the cheap today with Africa's
            fastest growing tech corporation.
          </p>
          <div className="flex items-start">
            <img
              src={assets.Mail}
              alt="Mail"
              className="w-6 h-6 object-cover mr-3"
            />
            <div>
              <p className="text-secondaryFour">
                customercare@webtechafrica.com
              </p>
              <p className="text-secondaryFour">
                amosmachora@webtechafrica.com
              </p>
            </div>
          </div>
          <div className="flex items-start mt-3">
            <img
              src={assets.BluePhone}
              alt="Phone"
              className="w-6 h-6 object-cover mr-3"
            />
            <p className="text-secondaryFour">+254 7194 280 19</p>{" "}
          </div>
        </div>
        <div className="w-1/4">
          <h4 className="h4 border-b pb-8 w-full mb-3">Pages</h4>
          <div className="text-secondaryFour flex flex-col [&>*]:mb-3">
            <Link
              to="/"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              About
            </Link>
            <Link
              to="/features"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="w-1/4">
          <h4 className="h4 border-b pb-8 w-full mb-3">Utility Pages</h4>
          <div className="text-secondaryFour flex flex-col [&>*]:mb-3">
            <Link
              to="/blog/learn"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Learn
            </Link>
            <Link
              to="/contact"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              Contact us
            </Link>
            <Link
              to="/contact#faqs"
              className="hover:text-primaryOne transition-all hover:font-semibold"
            >
              FAQS
            </Link>
          </div>
        </div>
      </footer>
      <div className="flex justify-between mt-4 text-sm">
        <p className="text-secondaryFour">
          Copyright © WebTech Africa | Designed by Victorflow - Powered by
          Vercel
        </p>
        <div className="flex items-center">
          <a
            href="fix-me"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            <img src={assets.facebook} alt="facebook" />
          </a>
          <a
            href="fix-me"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 mt-1"
          >
            <img src={assets.twitter} alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/webtech-africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            <img src={assets.linkedIn} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/webtechafrica/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 mt-1"
          >
            <img src={assets.instagram} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
