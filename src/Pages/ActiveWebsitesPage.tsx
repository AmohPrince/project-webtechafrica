import React, { useContext, useEffect } from "react";
import { assets } from "../Assets/assets";
import ActiveWebsite from "../Components/ActiveWebsiteComponent";
import NoWebsite from "../Components/NoWebsite";
import { testUser } from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";
import { globalData } from "./DashBoard";

const ActiveWebsitesPage = () => {
  // const { user } = useAuth();

  const user = testUser;
  const { setDashBoardTitleInfo } = useContext(globalData);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Active Websites",
      sub: "All the active websites. The websites on this section have been deployed successfully.",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <>
      {user?.activeWebsites ? (
        user?.activeWebsites.map((website) => (
          <div className="flex items-end justify-between mt-4 px-6">
            <ActiveWebsite website={website} />
            <img
              src={assets.remote_design}
              alt="remote_design"
              className="hidden sm:block sm:w-1/4"
            />
          </div>
        ))
      ) : (
        <NoWebsite text="You dont have any active websites! Let`s get you one" />
      )}
    </>
  );
};

export default ActiveWebsitesPage;
