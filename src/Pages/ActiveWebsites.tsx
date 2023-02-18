import React from "react";
import { assets } from "../Assets/assets";
import ActiveWebsite from "../Components/ActiveWebsite";
import { useAuth } from "../Hooks/UseAuth";

const ActiveWebsites = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-wrap">
      {user!.activeWebsites.map((website) => (
        <div className="flex items-end justify-between">
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
