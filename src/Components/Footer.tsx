import React from "react";
import { assets, LogoColor } from "../Assets/assets";
import { Link } from "react-router-dom";
import LogoTab from "./LogoTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  //TODO doesn't look that good on small screens
  return (
    <footer>
      <section className="mt-[10%] border-y py-[9%] flex justify-between">
        <div className="w-1/3">
          <LogoTab logoColor={LogoColor.primary} />
          <p className="default-paragraph mt-6 my-9">
            Get your website or web application on the cheap today with Africa's
            fastest growing tech corporation.
          </p>
          <div className="flex items-start mt-3 sm:mt-0">
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
      </section>
      <div className="flex justify-between mt-4 text-sm flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0">
        <p className="text-secondaryFour">
          Copyright © WebTech Africa | Designed by Victorflow - Powered by
          Vercel
        </p>
        <div className="flex items-center gap-x-6">
          {/* TODO twitter account */}
          <a href="fix-me" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-primaryOne"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092227747488"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-primaryOne"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/webtech-africa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-primaryOne"
            />
          </a>
          <a
            href="https://www.instagram.com/webtechafrica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-primaryOne"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
