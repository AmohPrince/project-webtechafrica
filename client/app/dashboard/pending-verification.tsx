"use client";

import NoWebsite from "@/components/dashboard/NoWebsite";
import { PendingVerificationWebsite } from "@/components/dashboard/PendingVerificationWebsite";
import { useAuth } from "@/hooks/useAuth";

const PendingVerificationsPage = () => {
  const { userData } = useAuth();
  // const { setDashBoardTitleInfo } = useGlobalData();

  // useEffect(() => {
  //   setDashBoardTitleInfo({
  //     h1: "Pending Verification Websites",
  //     sub: "Websites currently being verified. Do not worry we have people on it right now!",
  //   });
  // }, [setDashBoardTitleInfo]);

  return (
    <div className="bg-white mt-4 py-4 px-6 flex flex-col gap-y-4">
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

export default PendingVerificationsPage;
