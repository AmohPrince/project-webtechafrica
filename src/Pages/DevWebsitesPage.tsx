import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import PendingVerification from "../Components/PendingVerification";
import { SecondaryButton } from "../Components/SecondaryButton";
import { globalData } from "./DashBoard";

const DevWebsitesPage = () => {
  const { setDashBoardTitleInfo, mutableUserObject } = useContext(globalData);
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
          <div className="flex flex-wrap justify-between">
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
        <div className="w-max mx-auto flex flex-col items-center">
          <p>
            No website is currently being developed for you 😟 Let`s change
            that!
          </p>
          <Link to="/dashboard/new-website" className="my-5">
            <SecondaryButton text="Give it to me" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DevWebsitesPage;
