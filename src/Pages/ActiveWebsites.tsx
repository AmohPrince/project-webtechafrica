import React from "react";
import ActiveWebsite from "../Components/ActiveWebsite";
import { useAuth } from "../Hooks/UseAuth";

const ActiveWebsites = () => {
  const { user } = useAuth();

  return (
    <div className="mt-7">
      {user!.activeWebsites.map((website) => (
        <ActiveWebsite website={website} />
      ))}
    </div>
  );
};

export default ActiveWebsites;
