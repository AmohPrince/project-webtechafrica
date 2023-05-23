import React, { useContext, useEffect } from "react";
import { useAuth } from "../Hooks/UseAuth";
import { globalData } from "./DashBoard";
import { PendingVerificationWebsite } from "../Components/Dashboard/PendingVerificationWebsite";
import NoWebsite from "../Components/Dashboard/NoWebsite";

export const PendingVerificationsPage = () => {
  const { userData } = useAuth();
  const { setDashBoardTitleInfo } = useContext(globalData);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Pending Verification Websites",
      sub: "Websites currently being verified. Do not worry we have people on it right now!",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
      {userData?.pendingVerificationWebsites ? (
        userData?.pendingVerificationWebsites.map((website) => (
          <PendingVerificationWebsite website={website} key={website.id} />
        ))
      ) : (
        <NoWebsite text="Looks like everything has been verified! Get a new website now." />
      )}
    </div>
  );
};
