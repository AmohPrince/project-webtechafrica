import React, { useContext, useEffect } from "react";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import NoWebsite from "../Components/NoWebsite";
import PendingVerification from "../Components/PendingVerification";
import { globalData } from "./DashBoard";
import { testUser } from "../Firebase/firebase";

const DevWebsitesPage = () => {
  const { setDashBoardTitleInfo } = useContext(globalData);
  const mutableUserObject = testUser;

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Development Websites",
      sub: "Websites currently under development",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="bg-white mt-4 pt-4 px-6">
      {mutableUserObject?.devWebsites ? (
        <>
          <div className="flex flex-wrap gap-x-2 gap-y-4">
            {mutableUserObject.devWebsites.map((website, index) => (
              <DevWebsiteComponent website={website} key={index} />
            ))}
          </div>
          <p className="my-3 font-semibold">Pending Verification</p>
          <div>
            {mutableUserObject!.pendingVerificationWebsites?.map((website) => (
              <PendingVerification website={website} />
            ))}
          </div>
        </>
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
