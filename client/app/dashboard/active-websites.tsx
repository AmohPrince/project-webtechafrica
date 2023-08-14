"use client";

import NoWebsite from "@/components/dashboard/NoWebsite";
import { Website } from "@/components/dashboard/Website";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const ActiveWebsites = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-white mt-4 py-4 px-6 flex flex-wrap justify-between gap-y-4">
      {userData?.activeWebsites ? (
        userData?.activeWebsites.map((website) => (
          <Website website={website} key={website.id} />
        ))
      ) : (
        <NoWebsite text="You dont have any active websites! Let`s get you one" />
      )}
    </div>
  );
};

export default ActiveWebsites;
