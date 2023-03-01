import React from "react";
import { Link } from "react-router-dom";
import DashBoardTitle from "../Components/DashBoardTitle";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import { SecondaryButton } from "../Components/SecondaryButton";
import { useAuth } from "../Hooks/UseAuth";

const DevWebsites = () => {
  const { user } = useAuth();

  return (
    <div className="mt-5">
      <DashBoardTitle
        h1="Development Websites"
        sub="Websites currently under development"
      />
      {user?.devWebsites ? (
        <div className="flex flex-wrap justify-between mt-7">
          {user?.devWebsites.map((website, index) => (
            <DevWebsiteComponent website={website} key={index} />
          ))}
        </div>
      ) : (
        <div className="w-max mx-auto mt-10 flex flex-col items-center">
          <p>
            No website is currently being developed for you 😟 Let`s change
            that!
          </p>
          <Link to="/dashboard/new-website" className="mt-5">
            <SecondaryButton text="Give it to me" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DevWebsites;
