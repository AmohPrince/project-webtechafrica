import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const Confirmation = ({ text }: { text: string }) => {
  return (
    <div className="center-absolutely px-4 py-10 shadow-sm w-1/2 text-center border rounded-lg bg-white">
      <FontAwesomeIcon
        icon={faRectangleXmark}
        className="right-4 top-4 absolute text-primaryOne w-5 h-5 cursor-pointer hover:text-primaryOneLight transition-all"
      />
      <p className="mt-3">{text}</p>
      <Link to={"/dashboard/dev-websites"}>
        <PrimaryButton
          text="Check out your dev websites"
          className="mx-auto hover:scale-100 text-center mt-6"
        />
      </Link>
    </div>
  );
};

export default Confirmation;
