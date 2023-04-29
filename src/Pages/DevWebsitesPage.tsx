import React, { useContext, useEffect } from "react";
import NoWebsite from "../Components/NoWebsite";
import { globalData } from "./DashBoard";
import { Website } from "../Components/Website";
import { useAuth } from "../Hooks/UseAuth";

const DevWebsitesPage = () => {
  const { setDashBoardTitleInfo } = useContext(globalData);
  const { userData } = useAuth();
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Development Websites",
      sub: "Websites currently under development",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
      {userData?.devWebsites ? (
        userData.devWebsites.map((website, index) => (
          <Website website={website} key={index} />
        ))
      ) : (
        <NoWebsite
          text="No website is currently being developed for you 😟 Let`s change
        that!"
        />
      )}
    </div>
  );
};

export default DevWebsitesPage;
