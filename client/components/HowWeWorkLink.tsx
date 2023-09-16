"use client";

import Link from "next/link";
import BlackIshButton from "./buttons/BlackIshButton";

export const HowWeWorkLink = () => {
  return (
    <Link href={`/contact`} className="ml-auto">
      <BlackIshButton text="Get me a website  🚀" />
    </Link>
  );
};
