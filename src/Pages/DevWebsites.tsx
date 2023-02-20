import React from "react";
import DashBoardTitle from "../Components/DashBoardTitle";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import { useAuth } from "../Hooks/UseAuth";

const DevWebsites = () => {
  const { user } = useAuth();
  return (
    <div className="mt-5">
      <DashBoardTitle
        h1="Development Websites"
        sub="Websites currently under development"
      />
      <div className="flex flex-wrap justify-between mt-7">
        {user?.devWebsites.map((website, index) => (
          <DevWebsiteComponent website={website} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DevWebsites;
