import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../SecondaryButton";

const NoWebsite = ({ text }: { text: string }) => {
  return (
    <div className="py-3 sm:py-5 mx-auto mt-5 sm:mt-10 flex flex-col items-center bg-white px-6 sm:px-0 text-center">
      <p>{text}</p>
      <Link to="/dashboard/new-website" className="mt-3 mb-5">
        <SecondaryButton text="Give it to me" />
      </Link>
    </div>
  );
};

export default NoWebsite;
