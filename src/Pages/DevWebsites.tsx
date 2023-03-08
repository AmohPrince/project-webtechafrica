import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import PendingVerification from "../Components/PendingVerification";
import { SecondaryButton } from "../Components/SecondaryButton";
import { useAuth } from "../Hooks/UseAuth";
import { dashBoardTitleInfoFunction } from "./DashBoard";

const DevWebsites = () => {
  const { user } = useAuth();
  const { setDashBoardTitleInfo } = useContext(dashBoardTitleInfoFunction);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Development Websites",
      sub: "Websites currently under development",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="mt-5">
      {user?.devWebsites ? (
        <>
          <div className="flex flex-wrap justify-between mt-7">
            {user.devWebsites.map((website, index) => (
              <DevWebsiteComponent website={website} key={index} />
            ))}
          </div>
          <p className="my-3 font-semibold">Pending Verification</p>
          <div>
            {user!.pendingVerificationWebsites?.map((website) => (
              <PendingVerification website={website} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-max mx-auto mt-10 flex flex-col items-center">
          <p>
            No website is currently being developed for you 😟 Let`s change
            that!
          </p>
          <Link to="/dashboard/new-website" className="mt-5">
            <SecondaryButton text="Give it to me" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DevWebsites;
