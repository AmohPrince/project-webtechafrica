import React from "react";
import { DevWebsite } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";
import PrimaryButton from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const DevWebsiteComponent = ({ website }: { website: DevWebsite }) => {
  return (
    <div className="border w-[49%] bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="w-1/3 mr-7">
          <p className="font-semibold">{extractHostname(website.previewUrl)}</p>
          <p className="text-gray-500 text-sm">
            Expected Completion: 24th May 2023
          </p>
        </div>
        {website.hasShop && (
          <a href={website.shopUrl}>
            <SecondaryButton text="View shop" />
          </a>
        )}
        <a href={website.previewUrl}>
          <PrimaryButton text="Preview site" />
        </a>
      </div>
      <img
        src={website.websiteScreenShot}
        alt="overdue"
        className="w-full object-cover h-[40vh] rounded-xl mt-5"
      />
    </div>
  );
};

export default DevWebsiteComponent;
