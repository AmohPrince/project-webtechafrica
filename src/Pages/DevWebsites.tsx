import React from "react";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import { useAuth } from "../Hooks/UseAuth";

const DevWebsites = () => {
  const { user } = useAuth();
  return (
    <div className="mt-7 flex flex-wrap justify-between gap-y-4">
      {user?.devWebsites.map((website, index) => (
        <DevWebsiteComponent website={website} key={index} />
      ))}
    </div>
  );
};

export default DevWebsites;
