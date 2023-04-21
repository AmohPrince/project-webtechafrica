import React, { useContext, useEffect } from "react";
import NoWebsite from "../Components/NoWebsite";
import { testUser } from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";
import { globalData } from "./DashBoard";
import { extractHostname } from "../Util/Utilities";

export const PendingVerificationsPage = () => {
  // const user = useAuth()
  const user = testUser;
  const { setDashBoardTitleInfo } = useContext(globalData);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Pending Verification Websites",
      sub: "Websites currently being verified. Do not worry we have people on it right now!",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
      {user.pendingVerificationWebsites ? (
        user?.pendingVerificationWebsites.map((website) => (
          <div className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl">
            <p className="font-semibold">{extractHostname(website.url)}</p>
            <p>decision deadline: {website.decisionDeadline}</p>
          </div>
        ))
      ) : (
        <NoWebsite text="Looks like everything has been verified! Get a new website now." />
      )}
    </div>
  );
};
