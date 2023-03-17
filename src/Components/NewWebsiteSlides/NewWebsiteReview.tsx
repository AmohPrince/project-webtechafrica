import React from "react";
import { NewWebsiteSelections } from "../../Types/Global";
import { ThemeBox } from "../ThemeBox";

const NewWebsiteReview = ({
  selections,
}: {
  selections: NewWebsiteSelections;
}) => {
  return (
    <div>
      <p className="font-semibold mt-5">Theme</p>
      <ThemeBox theme={selections.theme} activeThemeId={selections.theme.id} />
      <div>
        <p className="font-semibold mt-5">Description</p>
        <p className="break-words">{selections.websiteDescription}</p>
      </div>
      <div className="flex justify-between w-2/3">
        <div>
          <p className="mt-5 text-sm text-gray-400">Plan</p>
          <p className="font-semibold">{selections.plan}</p>
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Content Style</p>
          {selections.userHasOwnContent ? (
            <p className="font-semibold">User generated</p>
          ) : (
            <p className="font-semibold">AI generated</p>
          )}
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Website Type</p>
          <p className="font-semibold">{selections.websiteType.type}</p>
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Website Domain</p>
          <p className="font-semibold">{selections.domainName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteReview;
