import React from "react";
import { ThemeBox } from "./ThemeBox";
import ThemePreview from "./ThemePreview";
import themes from "../Util/themes.json";
import { Theme } from "../Types/Global";

const SelectThemeSlide = ({
  activeTheme,
  setPreviewTheme,
}: {
  activeTheme: Theme;
  setPreviewTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
  return (
    <>
      <div className="my-5">
        <p className="mb-2">Select Theme</p>
        <div className="flex flex-wrap justify-center gap-3">
          {themes.map((theme) => (
            <ThemeBox
              theme={theme}
              setPreviewTheme={setPreviewTheme}
              activeThemeId={activeTheme.id}
            />
          ))}
        </div>
      </div>
      <ThemePreview theme={activeTheme} />
    </>
  );
};

export default SelectThemeSlide;
