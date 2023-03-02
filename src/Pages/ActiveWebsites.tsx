import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import ActiveWebsite from "../Components/ActiveWebsite";
import { SecondaryButton } from "../Components/SecondaryButton";
import { useAuth } from "../Hooks/UseAuth";
import { dashBoardTitleInfoFunction } from "./DashBoard";

const ActiveWebsites = () => {
  const { user } = useAuth();
  const { setDashBoardTitleInfo } = useContext(dashBoardTitleInfoFunction);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Active Websites",
      sub: "All the active websites. The websites on this section have been deployed successfully.",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="mt-5">
      {user!.activeWebsites === undefined ? (
        <div className="w-max mx-auto mt-10 flex flex-col items-center">
          <p>You dont have any active websites! Let`s get you one</p>
          <Link to="/dashboard/new-website" className="mt-5">
            <SecondaryButton text="Give it to me" />
          </Link>
        </div>
      ) : (
        user!.activeWebsites.map((website) => (
          <div className="flex items-end justify-between mt-7">
            <ActiveWebsite website={website} />
            <img
              src={assets.remote_design}
              alt="remote_design"
              className="w-1/4"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ActiveWebsites;
