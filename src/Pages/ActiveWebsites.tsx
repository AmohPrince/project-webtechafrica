import React from "react";
import { assets } from "../Assets/assets";
import ActiveWebsite from "../Components/ActiveWebsite";
import DashBoardTitle from "../Components/DashBoardTitle";
import { useAuth } from "../Hooks/UseAuth";

const ActiveWebsites = () => {
  const { user } = useAuth();

  return (
    <div className="mt-5">
      <DashBoardTitle
        h1="Active Websites"
        sub="All the active websites. The websites on this section have been deployed
        successfully."
      />
      {user!.activeWebsites.map((website) => (
        <div className="flex items-end justify-between mt-7">
          <ActiveWebsite website={website} />
          <img
            src={assets.remote_design}
            alt="remote_design"
            className="w-1/4"
          />
        </div>
      ))}
    </div>
  );
};

export default ActiveWebsites;
