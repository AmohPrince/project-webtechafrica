import React, { useContext, useEffect, useState } from "react";
import themes from "../Util/themes.json";
import { NewWebsiteSelections } from "../Types/Global";
import { SecondaryButton } from "./SecondaryButton";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./NewWebsiteSlides/PlanSelector";
import { dashBoardTitleInfoFunction } from "../Pages/DashBoard";
import SelectWebsiteType from "./NewWebsiteSlides/SelectWebsiteType";
import { UserWebsiteDescription } from "./NewWebsiteSlides/UserWebsiteDescription";
import UserHasOwnContent from "./NewWebsiteSlides/UserHasOwnContent";
import website_types from "../Json/WebsiteTypes.json";
import NewWebsiteReview from "./NewWebsiteSlides/NewWebsiteReview";
import DomainNamePicker from "./NewWebsiteSlides/DomainNamePicker";

const WebsiteBuilderForm = () => {
  const { setDashBoardTitleInfo } = useContext(dashBoardTitleInfoFunction);

  const [stageIndex, setStageIndex] = useState<number>(0);
  const [selections, setSelections] = useState<NewWebsiteSelections>({
    plan: null,
    theme: themes[0],
    userHasOwnContent: null,
    websiteDescription: null,
    websiteType: website_types[0],
  });
  const [isProgressButtonDisabled, setIsProgressButtonDisabled] =
    useState(false);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
    });
  }, [setDashBoardTitleInfo]);

  const stages = [
    {
      stage: "Theme",
      buttonText: "Pick " + selections.theme.name + " ⚒",
    },
    {
      stage: "Website Type",
      buttonText: "Pick " + selections.websiteType.type + " 🤝",
    },
    {
      stage: "Website Description",
      buttonText: "Submit description 📑",
    },
    {
      stage: "Got any content?",
      buttonText: "Pick Domain",
    },
    {
      stage: "Pick Domain",
      buttonText: "Pick a plan ✈",
    },
    {
      stage: "Plan",
      buttonText: "Review and Finish 🏁",
    },
    {
      stage: "Review",
      buttonText: "Complete 🚀",
    },
  ];

  const goToNextSlide = () => {
    if (stageIndex === stages.length - 1) {
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
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 ml-auto transition-all duration-300"
          onClick={goToNextSlide}
          disabled={isProgressButtonDisabled}
        />
      </div>
      {stageIndex === 0 && (
        <SelectThemeSlide
          setSelections={setSelections}
          selections={selections}
        />
      )}
      {stageIndex === 1 && <SelectWebsiteType setSelections={setSelections} />}
      {stageIndex === 2 && (
        <UserWebsiteDescription
          setIsProgressButtonDisabled={setIsProgressButtonDisabled}
          setSelections={setSelections}
        />
      )}
      {stageIndex === 3 && (
        <UserHasOwnContent
          setSelections={setSelections}
          setIsProgressButtonDisabled={setIsProgressButtonDisabled}
        />
      )}
      {stageIndex === 4 && (
        <DomainNamePicker
          setSelections={setSelections}
          setIsProgressButtonDisabled={setIsProgressButtonDisabled}
        />
      )}
      {stageIndex === 5 && (
        <PlanSelector
          websiteType={selections.websiteType}
          setSelections={setSelections}
          setIsProgressButtonDisabled={setIsProgressButtonDisabled}
        />
      )}
      {stageIndex === stages.length - 1 && (
        <NewWebsiteReview selections={selections} />
      )}
    </div>
  );
};

export default WebsiteBuilderForm;
