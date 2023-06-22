import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import DashBoardSideBar from "@/components/dashboard/DashBoardSideBar";
import DashBoardTitle from "@/components/dashboard/DashBoardTitle";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const { dashBoardTitleInfo } = useGlobalData();
  const [showingSmallScreenMenu, setShowingSmallScreenMenu] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [router, user]);

  return (
    <div className="flex sm:w-screen overflow-x-hidden overflow-y-auto">
      <DashBoardSideBar
        setShowingSmallScreenMenu={setShowingSmallScreenMenu}
        className="hidden sm:block relative"
      />
      {showingSmallScreenMenu && (
        <DashBoardSideBar
          setShowingSmallScreenMenu={setShowingSmallScreenMenu}
          className="w-5/6 fixed top-0 left-0 bottom-0"
        />
      )}
      <div className="flex-grow bg-gray-100 w-full sm:w-5/6 z-0 h-screen overflow-y-auto">
        <DashboardNavbar
          setShowingSmallScreenMenu={setShowingSmallScreenMenu}
        />
        {/* Only appears in small screens */}
        <DashBoardTitle className="block mt-20 sm:mt-0 sm:hidden px-6" />
        {children}
      </div>
    </div>
  );
};

export default Layout;
