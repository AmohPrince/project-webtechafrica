import NoWebsite from "@/components/dashboard/NoWebsite";
import { Website } from "@/components/dashboard/Website";

import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useContext, useEffect } from "react";
import Layout from "./Layout";

const DevWebsitesPage = () => {
  const { setDashBoardTitleInfo } = useGlobalData();
  const { userData } = useAuth();

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Development Websites",
      sub: "Websites currently under development",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <Layout>
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
    </Layout>
  );
};

export default DevWebsitesPage;
