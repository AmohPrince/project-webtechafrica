import { useAuth } from "@/hooks/useAuth";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { Wave } from "./Wave";

export const SmallScreenMenu = ({
  setShowingMenu,
}: {
  setShowingMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pages = ["home", "about-us", "features", "pricing", "blog", "contact"];
  const { user } = useAuth();

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 bottom-0 w-screen h-[100dvh] bg-white text-primaryOne font-semibold text-center gap-y-4 pt-[30%] flex flex-col playfair small-screen-menu"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <FontAwesomeIcon
        icon={faSquareXmark}
        className="absolute top-4 right-4 h-10 w-10"
        onClick={() => setShowingMenu(false)}
      />
      {pages.map((page, i) => (
        <Link
          href={page === "home" ? "/" : page}
          className="playfair"
          onClick={() => {
            setShowingMenu(false);
            window.scroll({
              behavior: "smooth",
              left: 0,
              top: 0,
            });
          }}
          key={i}
        >
          {page.split("-").map((t) => t.toLowerCase() + " ")}
        </Link>
      ))}
      {user ? (
        <Link href="/dashboard" className="mt-10">
          <PrimaryButton text="Dashboard 🚀" />
        </Link>
      ) : (
        <Link href="/sign-in" className="mt-10">
          <PrimaryButton text="Sign In" />
        </Link>
      )}
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
