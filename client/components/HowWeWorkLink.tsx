"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import BlackIshButton from "./buttons/BlackIshButton";

export const HowWeWorkLink = () => {
  const { user } = useAuth();
  return (
    <Link
      href={`${user ? "/dashboard" : "/sign-in/?source=get-started"}`}
      className="ml-auto"
    >
      <BlackIshButton text="Get me a website  🚀" />
    </Link>
  );
};
