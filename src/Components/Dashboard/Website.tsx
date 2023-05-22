import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ActiveWebsite, DevWebsite } from "../../Types/Global";
import { extractHostname } from "../../Util/Utilities";
import PrimaryButton from "../PrimaryButton";

export const Website = ({
  website,
}: {
  website: DevWebsite | ActiveWebsite;
}) => {
  const isDevWebsite = "expectedCompletionDate" in website;

  console.log(website);

  return (
    <div className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl">
      <div className="block sm:flex justify-between items-center">
        <div className="w-full mb-5 sm:mb-0 mr-7">
          <div className="flex items-center">
            <p className="font-semibold">{extractHostname(website.url)}</p>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="ml-2 cursor-pointer"
              onClick={() => window.open(website.url)}
            />
          </div>
          {isDevWebsite && (
            <p className="text-gray-500 text-sm">
              Expected Completion: {website.expectedCompletionDate}
            </p>
          )}
          <p>Website Id: {website.id}</p>
          <p>Plan: {website.plan} </p>
          <p>Created at :{formatDate(website.createdAt)}</p>
        </div>
        <PrimaryButton
          text={isDevWebsite ? "preview" : "view"}
          onClick={() => window.open(website.url)}
        />
      </div>
      <img
        src={website.websiteScreenShot}
        alt="overdue"
        className="w-full object-cover h-[40vh] rounded-xl mt-5"
      />
    </div>
  );
};

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  let daySuffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  }

  return `${day}${daySuffix} ${month} ${year}`;
};
