import React from "react";
import { ThemeBox } from "./ThemeBox";
import ThemePreview from "./ThemePreview";
import themes from "../Util/themes.json";
import { NewWebsiteSelections } from "../Types/Global";
import { SecondaryButton } from "./SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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
      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold">Select Theme</p>
          <SecondaryButton
            text={
              <DashboardButtonText text={`Pick ${selections.theme.name}`} />
            }
            style={{
              backgroundColor: selections.theme.colors.primary,
              color: selections.theme.colors.text,
            }}
            className="outline-none hover:scale-100 transition-all duration-300"
            onClick={() => setActiveStageId((prev) => prev + 1)}
          />
        </div>
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

const DashboardButtonText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <p className="mr-2">{text}</p>
      <FontAwesomeIcon icon={faRocket} />
    </div>
  );
};
