import NoWebsite from "@/components/dashboard/NoWebsite";
import { Website } from "@/components/dashboard/Website";
import { NextHead } from "@/components/NextHead";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useEffect } from "react";
import Layout from "./Layout";

const ActiveWebsitesPage = () => {
  const { userData } = useAuth();
  const { setDashBoardTitleInfo } = useGlobalData();

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Active Websites",
      sub: "All the active websites. The websites on this section have been deployed successfully.",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <>
      <NextHead
        canonical="www.webtechafrica.com/dashboard"
        description="Access your client dashboard and checkout your websites or create a new one!"
        title="dashboard"
        twitterDescription="Access your client dashboard and checkout your websites or create a new one!"
      />
      <Layout>
        <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
          {userData?.activeWebsites ? (
            userData?.activeWebsites.map((website) => (
              <Website website={website} key={website.id} />
            ))
          ) : (
            <NoWebsite text="You dont have any active websites! Let`s get you one" />
          )}
        </div>
      </Layout>
    </>
  );
};

export default ActiveWebsitesPage;
