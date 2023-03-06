import React, { useContext, useEffect, useRef, useState } from "react";
import themes from "../Util/themes.json";
import { Theme, WebsiteType } from "../Types/Global";
import website_types from "../Json/WebsiteTypes.json";
import { SecondaryButton } from "./SecondaryButton";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./PlanSelector";
import { dashBoardTitleInfoFunction } from "../Pages/DashBoard";

const WebsiteBuilderForm = () => {
  const { setDashBoardTitleInfo } = useContext(dashBoardTitleInfoFunction);

  const [previewTheme, setPreviewTheme] = useState<Theme>(themes[0]);
  const [activeWebsiteType, setActiveWebsiteType] = useState<WebsiteType>(
    website_types[0]
  );
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [selections, setSelections] = useState<{
    theme: Theme;
    websiteType: WebsiteType;
    websiteDescription: string;
    userHasOwnContent: boolean;
    plan: string;
  }>(null as any);
  const [description, setDescription] = useState<string | null>(null);
  const [plan, setPlan] = useState<string | null>(null);
  const [userHasContent, setUserHasContent] = useState(false);
  const [isProgressButtonDisabled, setIsProgressButtonDisabled] =
    useState(false);
  const [noOfCharacters, setNoOfCharacters] = useState<number>(0);

  const userHasOwnContentRef = useRef<HTMLInputElement>(null);
  const automaticContentGenerationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
    });
  }, [setDashBoardTitleInfo]);

  const stages = [
    {
      stage: "Theme",
      buttonText: "Pick " + previewTheme.name + " ⚒",
    },
    {
      stage: "Website Type",
      buttonText: "Pick " + activeWebsiteType.type + " 🤝",
    },
    {
      stage: "Website Description",
      buttonText: "Submit description 📑",
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

  const handleNextSlide = () => {
    if (stageIndex === 0) {
      setSelections((prev) => {
        return {
          ...prev,
          theme: previewTheme,
        };
      });
    } else if (stageIndex === 1) {
      setSelections((prev) => {
        return {
          ...prev,
          websiteType: activeWebsiteType,
        };
      });
    } else if (stageIndex === 2) {
      setSelections((prev) => {
        return {
          ...prev,
          websiteDescription: description!,
        };
      });
    } else if (stageIndex === 3) {
      setSelections((prev) => {
        return {
          ...prev,
          userHasOwnContent: userHasContent,
        };
      });
    } else if (stageIndex === 4) {
      setSelections((prev) => {
        return {
          ...prev,
          plan: plan!,
        };
      });
    }

    if (stageIndex === 4) {
      console.log(selections);
    } else {
      setStageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-end">
        <SecondaryButton
          text={stages[stageIndex].buttonText}
          style={{
            backgroundColor: previewTheme.colors.primary,
            color: previewTheme.colors.text,
          }}
          className="outline-none hover:scale-100 ml-auto transition-all duration-300"
          onClick={handleNextSlide}
          disabled={isProgressButtonDisabled}
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
              setActiveWebsiteType(
                website_types.find((type) => type.type === e.target.value)!
              )
            }
            className="border my-5"
          >
            {website_types.map((type) => (
              <option value={type.type}>{type.type}</option>
            ))}
          </select>
          <p>{activeWebsiteType.description}</p>
        </div>
      )}
      {stageIndex === 2 && (
        <div className="my-5">
          <p>
            Describe the purpose and goals of the website? This will help us
            understand your specific niche and target audience to create a
            website that will be sure to fit your needs
          </p>
          <textarea
            className="w-full h-[10vh] p-2 border rounded-md mt-4"
            onChange={(e) => {
              setNoOfCharacters(e.target.value.length);
              if (e.target.value.length >= 250) {
                setDescription(e.target.value);
                setIsProgressButtonDisabled(false);
              } else {
                setIsProgressButtonDisabled(true);
              }
            }}
          />
          <p className="ml-auto">{noOfCharacters} / 250 characters</p>
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
            <input
              type="checkbox"
              onChange={(e) => {
                automaticContentGenerationRef.current!.checked = false;
                setUserHasContent(e.target.checked);
              }}
              ref={userHasOwnContentRef}
            />
            <p>I have my own</p>
            <input
              type="checkbox"
              className="ml-6"
              onChange={(e) => {
                userHasOwnContentRef.current!.checked = false;
                setUserHasContent(!e.target.checked);
              }}
              ref={automaticContentGenerationRef}
            />
            <p>Find out what might seem right for me.</p>
          </div>
        </div>
      )}
      {stageIndex === 4 && (
        <PlanSelector setPlan={setPlan} websiteType={activeWebsiteType} />
      )}
    </div>
  );
};

export default WebsiteBuilderForm;
