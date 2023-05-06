import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Wave } from "./Wave";

export const SmallScreenMenu = ({
  setShowingMenu,
}: {
  setShowingMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pages = ["home", "about-us", "features", "pricing", "blog", "contact"];

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen bg-white text-primaryOne font-semibold text-center gap-y-4 pt-[30%] flex flex-col playfair"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000, transition: { delay: 0.5 } }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <FontAwesomeIcon
        icon={faSquareXmark}
        className="absolute top-10 right-10 h-10 w-10"
        onClick={() => setShowingMenu(false)}
      />
      {pages.map((page) => (
        <Link
          to={page === "Home" ? "/" : page}
          className="playfair"
          onClick={() => setShowingMenu(false)}
        >
          {page.split("-").map((t) => t.toLowerCase() + " ")}
        </Link>
      ))}
      <div className="flex w-1/3 justify-between items-center mx-auto mt-20 playfair">
        <a href="https://www.facebook.com/profile.php?id=100092227747488">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.linkedin.com/company/webtech-africa">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/webtechafrica/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* TODO get a twitter account */}
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <Wave />
    </motion.div>
  );
};
