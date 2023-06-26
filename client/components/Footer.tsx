import React from "react";
import LogoTab from "./LogoTab";
import { email, scrollToTop } from "../util/utilities";
import { LogoColor, assets } from "@/public/assets";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-[5%] md:px-[12%]">
      <section className="mt-[10%] border-y py-[9%] flex-col-reverse md:flex-row flex justify-between">
        <div className="md:w-1/3 mt-5 md:mt-0">
          <LogoTab logoColor={LogoColor.primary} />
          <p className="default-paragraph mt-6 my-9">
            Get your website or web application on the cheap today with Africa's
            fastest growing tech corporation.
          </p>
          <div className="flex items-start mt-3 md:mt-0">
            <Image
              src={assets.Mail}
              alt="Mail"
              className="w-6 h-6 object-cover mr-3"
            />
            <p className="text-secondaryFour">{email}</p>
            {/* <div>
              <p className="text-secondaryFour">
                customercare@webtechafrica.com
              </p>
            </div> */}
          </div>
          <div className="flex items-start mt-3">
            <Image
              src={assets.BluePhone}
              alt="Phone"
              className="w-6 h-6 object-cover mr-3"
            />
            <p className="text-secondaryFour">+254 7194 280 19</p>{" "}
          </div>
        </div>
        <div className="flex md:w-1/2 gap-x-4">
          <div className="w-1/2">
            <h4 className="h4 border-b pb-8 w-full mb-3">Pages</h4>
            <div className="text-secondaryFour flex flex-col [&>*]:mb-3">
              <Link
                href="/"
                className="hover:text-primaryOne transition-all hover:font-semibold"
                onClick={scrollToTop}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-primaryOne transition-all hover:font-semibold"
                onClick={scrollToTop}
              >
                About
              </Link>
              <Link
                href="/features"
                className="hover:text-primaryOne transition-all hover:font-semibold"
                onClick={scrollToTop}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="hover:text-primaryOne transition-all hover:font-semibold"
                onClick={scrollToTop}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="hover:text-primaryOne transition-all hover:font-semibold"
                onClick={scrollToTop}
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="h4 border-b pb-8 w-full mb-3">Utility Pages</h4>
            <div className="text-secondaryFour flex flex-col [&>*]:mb-3">
              <Link
                href="/contact"
                className="hover:text-primaryOne transition-all hover:font-semibold"
              >
                Contact us
              </Link>
              <Link
                href="/contact#faqs"
                className="hover:text-primaryOne transition-all hover:font-semibold"
              >
                FAQS
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between mt-4 text-sm flex-col md:flex-row items-center gap-y-4 md:gap-y-0">
        <p className="text-secondaryFour">
          Copyright © WebTech Africa | Designed by Victorflow - Powered by
          Vercel
        </p>
        <div className="flex items-center gap-x-6">
          {/* TODO twitter account */}
          {/* <a href="fix-me" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-primaryOne"
            />
          </a> */}
          <a
            href="https://www.facebook.com/profile.php?id=100092227747488"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
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
      </section>
    </footer>
  );
};

export default Footer;
