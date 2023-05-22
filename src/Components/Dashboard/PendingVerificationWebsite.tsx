import React from "react";
import { PendingVerificationWebsite as PendingVerificationWebsiteType } from "../../Types/Global";

export const PendingVerificationWebsite = ({
  website,
}: {
  website: PendingVerificationWebsiteType;
}) => {
  console.log(website);
  return (
    <div
      className="border w-full sm:w-[49%] bg-white p-4 sm:p-6 rounded-2xl"
      key={website.id}
    >
      <p>test</p>
    </div>
  );
};
