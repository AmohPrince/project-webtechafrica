import React, { useContext, useEffect, useState } from "react";
import themes from "../Util/themes.json";
import { Theme } from "../Types/Global";
import website_types from "../Json/WebsiteTypes.json";
import { SecondaryButton } from "./SecondaryButton";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./PlanSelector";
import { dashBoardTitleInfoFunction } from "../Pages/DashBoard";

const WebsiteBuilderForm = () => {
  const [previewTheme, setPreviewTheme] = useState<Theme>(themes[0]);
  const [activeWebsiteTypeDescription, setActiveWebsiteTypeDescription] =
    useState<string>(website_types[0].description);
  const stages = [
    {
      stage: "Theme",
      buttonText: "Pick website type ⚒",
    },
    {
      stage: "Website Type",
      buttonText: "Describe your website 🤝",
    },
    {
      stage: "Website Description",
      buttonText: "Got any content? 📑",
    },
    {
      stage: "Got any content?",
      buttonText: "Pick a plan ✈",
    },
    {
      stage: "Plan",
      buttonText: "Finish 🏁",
    },
  ];
  const [stageIndex, setStageIndex] = useState<number>(0);
  const { setDashBoardTitleInfo } = useContext(dashBoardTitleInfoFunction);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
    });
  }, [setDashBoardTitleInfo]);

  return (
    <div className="mt-5">
      <div className="flex justify-end">
        <SecondaryButton
          text={stages[stageIndex].buttonText}
          style={{
            backgroundColor: previewTheme.colors.primary,
            color: previewTheme.colors.text,
          }}
          className="outline-none hover:scale-100 ml-auto"
          onClick={() =>
            stages[stageIndex].stage === "Plan"
              ? console.log("Last slide")
              : setStageIndex((prev) => prev + 1)
          }
        />
      </div>
      {stageIndex === 0 && (
        <SelectThemeSlide
          activeTheme={previewTheme}
          setPreviewTheme={setPreviewTheme}
        />
      )}
      {stageIndex === 1 && (
        <div className="my-5">
          <p>Website Type</p>
          <select
            onChange={(e) =>
              setActiveWebsiteTypeDescription(
                website_types.find((type) => type.type === e.target.value)!
                  .description
              )
            }
          >
            {website_types.map((type) => (
              <option value={type.type}>{type.type}</option>
            ))}
          </select>
          <p>{activeWebsiteTypeDescription}</p>
        </div>
      )}
      {stageIndex === 2 && (
        <div className="mb-5">
          <p>
            Describe the purpose and goals of the website? This will help us
            understand your specific niche and target audience to create a
            website that will be sure to fit your needs
          </p>
          <textarea className="w-full h-[10vh] p-2" />
        </div>
      )}
      {stageIndex === 3 && (
        <div className="mb-5">
          <p>
            Do you have any content or would you like our AI to generate
            everything for you? You are allowed to change anything you want
            later
          </p>
          <div className="flex">
            <input type="checkbox" />
            <p>I have my own</p>
            <input type="checkbox" className="ml-6" />
            <p>Find out what might seem right for me.</p>
          </div>
        </div>
      )}
      {stageIndex === 4 && <PlanSelector />}
    </div>
  );
};

export default WebsiteBuilderForm;
