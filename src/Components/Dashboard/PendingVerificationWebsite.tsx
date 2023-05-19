import React from "react";
import { PendingVerificationWebsite as PendingVerificationWebsiteType } from "../../Types/Global";
import { extractHostname } from "../../Util/Utilities";

export const PendingVerificationWebsite = ({
  website,
}: {
  website: PendingVerificationWebsiteType;
}) => {
  const propertyNames = Object.keys(website);
  const websiteSelections = Object.keys(website.selections);

  return (
    <div
      className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl"
      key={website.id}
    >
      {propertyNames.map((propertyName) => (
        <div key={propertyName}>
          <strong>{propertyName} </strong>
        </div>
      ))}
      <p className="text-blue-800 font-semibold">selections</p>
      {websiteSelections.map((propertyName) => (
        <div key={propertyName}>
          <strong>{propertyName}</strong>
        </div>
      ))}
    </div>
  );
};

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const dayOfMonth = date.getDate();
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();

  return `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)} ${monthName} ${year}`;
};

const getOrdinalSuffix = (n: number): string => {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = n % 10;
  const suffix = suffixes[lastDigit] || suffixes[0];
  return suffix;
};
