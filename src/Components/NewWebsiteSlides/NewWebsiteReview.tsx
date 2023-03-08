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
      <p>Theme</p>
      <ThemeBox theme={selections.theme} activeThemeId={selections.theme.id} />
      <div>
        <p className="font-semibold mt-5">Description</p>
        <p className="break-words">{selections.websiteDescription}</p>
      </div>
      <div>
        <p className="font-semibold mt-5">Plan</p>
        <p>{selections.plan}</p>
      </div>
      <div>
        <p className="font-semibold mt-5">Content Style</p>
        {selections.userHasOwnContent ? (
          <p>User generated</p>
        ) : (
          <p>AI generated</p>
        )}
      </div>
      <div>
        <p className="font-semibold mt-5">Website Type</p>
        <p>{selections.websiteType.type}</p>
      </div>
    </div>
  );
};

export default NewWebsiteReview;
