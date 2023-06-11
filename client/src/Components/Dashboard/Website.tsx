import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ActiveWebsite, DevWebsite } from "../../Types/Global";
import { extractHostname, formatDate } from "../../Util/Utilities";
import { WebsiteStage } from "./WebsiteStage";

export const Website = ({
  website,
}: {
  website: DevWebsite | ActiveWebsite;
}) => {
  const isDevWebsite = "expectedCompletionDate" in website;

  return (
    <div className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl">
      <div className="block sm:flex justify-between items-center">
        <div className="w-full mb-5 sm:mb-0 font-semibold text-sm">
          <div className="flex justify-between items-end mb-5">
            <div className="flex items-start">
              <p className="font-semibold">{extractHostname(website.url)}</p>
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="ml-2 cursor-pointer"
                onClick={() => window.open(website.url)}
              />
            </div>
            {isDevWebsite && <WebsiteStage stage={website.stage} />}
          </div>
          {isDevWebsite && (
            <p>
              Expected Completion:{" "}
              <span className="text-gray-500 text-sm">
                {website.expectedCompletionDate}
              </span>
            </p>
          )}
          <p>
            Website Id:{" "}
            <span className="text-gray-500 text-xs">{website.id}</span>
          </p>
          <p>
            Plan: <span className="text-gray-500 text-xs">{website.plan}</span>{" "}
          </p>
          <p>
            Created at :{" "}
            <span className="text-gray-500 text-xs">
              {formatDate(website.createdAt)}
            </span>
          </p>
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