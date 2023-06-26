import NewWebsite from "@/components/dashboard/newwebsiteslides/new-website";
import NoWebsite from "@/components/dashboard/NoWebsite";
import { Website } from "@/components/dashboard/Website";
import { NextHead } from "@/components/NextHead";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import React, { useEffect } from "react";
import Layout from "../../components/dashboard/Layout";

const Dashboard = () => {
  const { setDashBoardTitleInfo } = useGlobalData();

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
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
        <NewWebsite />
      </Layout>
    </>
  );
};

export default Dashboard;
