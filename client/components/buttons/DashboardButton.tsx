"use client";

// import { useAuth } from "@/hooks/useAuth";
import { getBaseUrl } from "@/util/utilities";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardButton = () => {
  const pathname = usePathname();
  const basePath = getBaseUrl(pathname);
  // const { user } = useAuth();
  return (
    <Link
      className={`px-4 rounded-full ml-10 font-semibold flex items-center ${
        basePath === "/" ? "bg-white" : "bg-primaryOne text-white"
      }`}
      // href={user ? "/dashboard" : "/sign-in"}
      href="/contact"
    >
      {/* {user ? "My Dashboard 🚀" : "sign in"} */}
      Request site
    </Link>
  );
};
