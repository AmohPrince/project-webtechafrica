import React from "react";
import { PendingVerificationWebsite as PendingVerificationWebsiteType } from "../../Types/Global";
import { formatDate } from "../../Util/Utilities";
import { ThemeBox } from "./ThemeBox";
import { WebsiteStage } from "./WebsiteStage";

export const PendingVerificationWebsite = ({
  website,
}: {
  website: PendingVerificationWebsiteType;
}) => {
  return (
    <div className="border w-full bg-white p-4 sm:p-6 rounded-2xl font-semibold">
      <WebsiteStage stage={website.stage} />
      <p>Website type description</p>
      <p className="text-gray-500 text-sm my-5">
        {website.selections.websiteDescription}
      </p>
      <p className="my-2">Theme</p>
      <ThemeBox
        theme={website.selections.theme}
        activeThemeId={website.selections.theme.id}
      />
      <div className="flex justify-between mt-5 text-sm sm:w-4/5">
        <div>
          <p className="text-black3">Submission date</p>
          <p>{formatDate(website.createdAt)}</p>{" "}
        </div>
        <div>
          <p className="text-black3">Website Id</p>
          <p>{website.id}</p>
        </div>
        <div>
          <p className="text-black3">Website Domain</p>
          <p>{website.url}</p>
        </div>
        <div>
          <p className="text-black3">Plan</p>
          <p> {website.plan}</p>
        </div>
        <div>
          <p className="text-black3">Website type</p>
          <p>{website.selections.websiteType.type}</p>
        </div>
      </div>
    </div>
  );
};
