import Link from "next/link";
import React from "react";
import { SecondaryButton } from "../buttons/SecondaryButton";

const NoWebsite = ({ text }: { text: string }) => {
  return (
    <div className="py-3 md:py-5 mx-auto mt-5 md:mt-10 flex flex-col items-center bg-white px-6 md:px-0 text-center">
      <p>{text}</p>
      <Link href="/dashboard" className="mt-3 mb-5">
        <SecondaryButton text="Give it to me" />
      </Link>
    </div>
  );
};

export default NoWebsite;
