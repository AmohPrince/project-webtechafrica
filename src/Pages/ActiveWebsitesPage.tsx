import React, { useContext, useEffect } from "react";
import NoWebsite from "../Components/NoWebsite";
import { Website } from "../Components/Website";
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
    <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
      {user?.activeWebsites ? (
        user?.activeWebsites.map((website) => <Website website={website} />)
      ) : (
        <NoWebsite text="You dont have any active websites! Let`s get you one" />
      )}
    </div>
  );
};

export default ActiveWebsitesPage;
