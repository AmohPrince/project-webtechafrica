import React from "react";
import { ActiveWebsite } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";
import PrimaryButton from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const ActiveWebsiteComponent = ({ website }: { website: ActiveWebsite }) => {
  return (
    <div className="bg-white px-8 py-7 rounded-2xl w-2/3">
      <div className="flex justify-between items-center">
        <h4 className="h4">{extractHostname(website.url)}</h4>
        <div>
          {website.hasShop && (
            <a href={website.shopUrl} className="mr-3">
              <SecondaryButton text="View Shop" />
            </a>
          )}
          <a href={website.url}>
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
