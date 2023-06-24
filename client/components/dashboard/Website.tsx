import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { ActiveWebsite, DevWebsite } from "../../types/Global";
import { extractHostname, formatDate } from "../../util/utilities";
import { WebsiteStage } from "./WebsiteStage";

export const Website = ({
  website,
}: {
  website: DevWebsite | ActiveWebsite;
}) => {
  const isDevWebsite = "expectedCompletionDate" in website;

  return (
    <div className="border w-full md:w-[49%] bg-white p-4 md:p-6 rounded-2xl">
      <div className="block md:flex justify-between items-center">
        <div className="w-full mb-5 md:mb-0 font-semibold text-sm">
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
      <Image
        src={website.websiteScreenShot!}
        alt="overdue"
        className="w-full object-cover h-[40vh] rounded-xl mt-5"
        width={1250}
        height={750}
      />
    </div>
  );
};
