import React from "react";
import { ActiveWebsite } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";
import PrimaryButton from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const ActiveWebsiteComponent = ({ website }: { website: ActiveWebsite }) => {
  return (
    <div className="bg-white px-4 sm:px-8 py-7 rounded-2xl w-full sm:w-2/3">
      <div className="sm:flex justify-between items-center">
        <h4 className="h6 sm:h4 mb-1 sm:mb-0">
          {extractHostname(website.url)}
        </h4>
        <div className="flex gap-x-2 items-center sm:block sm:mx-auto">
          {website.hasShop && (
            <a href={website.shopUrl} className="w-1/2 sm:mr-3 sm:w-auto">
              <SecondaryButton text="View Shop" />
            </a>
          )}
          <a href={website.url} className="w-1/2 sm:w-auto">
            <PrimaryButton text="View site" />
          </a>
        </div>
      </div>
      <img
        src={website.websiteScreenShot}
        alt="test"
        className="w-full h-[50vh] object-cover mt-6"
      />
    </div>
  );
};

export default ActiveWebsiteComponent;
