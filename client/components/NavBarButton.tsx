import { useAuth } from "@/hooks/useAuth";
import { getBaseUrl } from "@/util/utilities";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const NavBarButton = () => {
  const { pathname } = useRouter();
  const basePath = getBaseUrl(pathname);
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Link
          className={`px-4 rounded-full ml-10 font-semibold flex items-center ${
            basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
          }`}
          href="/dashboard"
        >
          My Dashboard 🚀
        </Link>
      ) : (
        <Link
          className={`px-8 rounded-full ml-10 font-semibold flex items-center ${
            basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
          }`}
          href="/sign-in"
        >
          Sign in
        </Link>
      )}
    </>
  );
};
