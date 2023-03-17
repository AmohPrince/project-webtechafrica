import React from "react";
import { ThemeBox } from "./ThemeBox";
import ThemePreview from "./ThemePreview";
import themes from "../Util/themes.json";
import { NewWebsiteSelections } from "../Types/Global";

const SelectThemeSlide = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex flex-col">
      <div className="my-5">
        <p className="mb-2">Select Theme</p>
        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => (
            <ThemeBox
              theme={theme}
              activeThemeId={selections.theme.id}
              setSelections={setSelections}
            />
          ))}
        </div>
      </div>
      <ThemePreview theme={selections.theme} />
    </div>
  );
};

export default SelectThemeSlide;
