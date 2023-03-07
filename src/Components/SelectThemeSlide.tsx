import React from "react";
import { ThemeBox } from "./ThemeBox";
import ThemePreview from "./ThemePreview";
import themes from "../Util/themes.json";
import { NewWebsiteSelections } from "../Types/Global";

const SelectThemeSlide = ({
  selections,
  setSelections,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
}) => {
  return (
    <>
      <div className="my-5">
        <p className="mb-2">Select Theme</p>
        <div className="flex flex-wrap justify-center gap-3">
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
    </>
  );
};

export default SelectThemeSlide;
