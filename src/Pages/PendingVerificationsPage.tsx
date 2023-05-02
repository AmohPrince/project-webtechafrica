import React, { useContext, useEffect } from "react";
import NoWebsite from "../Components/NoWebsite";
import { useAuth } from "../Hooks/UseAuth";
import { globalData } from "./DashBoard";
import { extractHostname } from "../Util/Utilities";

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
          <div
            className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl"
            key={website.id}
          >
            <p className="font-semibold">{extractHostname(website.url)}</p>
            <p>decision deadline: {formatDate(website.decisionDeadline)}</p>
          </div>
        ))
      ) : (
        <NoWebsite text="Looks like everything has been verified! Get a new website now." />
      )}
    </div>
  );
};

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const dayOfMonth = date.getDate();
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();

  return `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)} ${monthName} ${year}`;
};

const getOrdinalSuffix = (n: number): string => {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = n % 10;
  const suffix = suffixes[lastDigit] || suffixes[0];
  return suffix;
};
