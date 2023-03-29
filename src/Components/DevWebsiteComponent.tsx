import React from "react";
import { DevWebsite } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";
import PrimaryButton from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

const DevWebsiteComponent = ({ website }: { website: DevWebsite }) => {
  return (
    <div className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl">
      <div className="block sm:flex justify-between items-center">
        <div className="w-full mb-5 sm:mb-0 sm:w-1/3 mr-7">
          <p className="font-semibold">{extractHostname(website.url)}</p>
          <p className="text-gray-500 text-sm">
            Expected Completion: {website.expectedCompletionDate}
          </p>
        </div>
        <div className="flex justify-between items-center sm:block">
          {website.hasShop && (
            <a href={website.shopUrl}>
              <SecondaryButton text="View shop" />
            </a>
          )}
          <a
            href={website.url}
            className={`${!website.hasShop ? "w-full sm:w-auto" : ""}`}
          >
            <PrimaryButton text="Preview site" className="w-full" />
          </a>
        </div>
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
