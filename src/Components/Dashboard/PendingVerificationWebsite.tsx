import React from "react";
import { PendingVerificationWebsite as PendingVerificationWebsiteType } from "../../Types/Global";
import { formatDate } from "../../Util/Utilities";
import { ThemeBox } from "./ThemeBox";

export const PendingVerificationWebsite = ({
  website,
}: {
  website: PendingVerificationWebsiteType;
}) => {
  return (
    <div className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl font-semibold text-sm">
      <div className="flex items-end justify-between mb-5">
        <p>{website.url}</p>
        <div className="py-2 rounded-md bg-lightOrange text-magloOrange px-4 w-max text-xs">
          In Review
        </div>
      </div>
      <p className="mt-2">
        Submitted at:{" "}
        <span className="text-gray-500 text-xs">
          {" "}
          {formatDate(website.createdAt)}
        </span>{" "}
      </p>
      <p>
        Website Id: <span className="text-gray-500 text-xs">{website.id}</span>
      </p>
      <p>
        Plan: <span className="text-gray-500 text-xs"> {website.plan}</span>
      </p>
      <p>
        Website description:{" "}
        <span className="text-gray-500 text-xs">
          {website.selections.websiteDescription}
        </span>
      </p>
      <p>
        Website type:{" "}
        <span className="text-gray-500 text-xs">
          {website.selections.websiteType.type}
        </span>
      </p>
      <p>
        Website type description:{" "}
        <span className="text-gray-500 text-xs">
          {website.selections.websiteType.description}
        </span>
      </p>
      <p className="mt-2">Theme</p>
      <ThemeBox
        theme={website.selections.theme}
        activeThemeId={website.selections.theme.id}
      />
    </div>
  );
};
