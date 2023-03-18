import React, { useContext, useEffect, useState } from "react";
import themes from "../Util/themes.json";
import { NewWebsiteSelections } from "../Types/Global";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./NewWebsiteSlides/PlanSelector";
import SelectWebsiteType from "./NewWebsiteSlides/SelectWebsiteType";
import { UserWebsiteDescription } from "./NewWebsiteSlides/UserWebsiteDescription";
import UserHasOwnContent from "./NewWebsiteSlides/UserHasOwnContent";
import website_types from "../Json/WebsiteTypes.json";
import NewWebsiteReview from "./NewWebsiteSlides/NewWebsiteReview";
import DomainNamePicker from "./NewWebsiteSlides/DomainNamePicker";
import { globalData } from "../Pages/DashBoard";
import Confirmation from "./Confirmation";

const WebsiteBuilderForm = () => {
  const { setDashBoardTitleInfo } = useContext(globalData);

  const [stageIndex, setStageIndex] = useState<number>(0);
  const [selections, setSelections] = useState<NewWebsiteSelections>({
    plan: null,
    theme: themes[0],
    domainName: null,
    userHasOwnContent: null,
    websiteDescription: null,
    websiteType: website_types[0],
  });
  const [confirmationModal, showConfirmationModal] = useState(false);

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
    });
  }, [setDashBoardTitleInfo]);

  const stages = [
    {
      stage: "Theme",
      buttonText: "Pick " + selections.theme.name,
    },
    {
      stage: "Website Type",
      buttonText: "Pick " + selections.websiteType.type,
    },
    {
      stage: "Website Description",
      buttonText: "Submit description",
    },
    {
      stage: "Got any content?",
      buttonText: "Pick Domain",
    },
    {
      stage: "Pick Domain",
      buttonText: "Pick a plan",
    },
    {
      stage: "Plan",
      buttonText: "Review and Finish",
    },
    {
      stage: "Review",
      buttonText: "Complete",
    },
  ];

  return (
    <div className="relative w-full pt-4">
      {confirmationModal && (
        <Confirmation
          text={`Your website at ${selections.domainName} has been submitted for approval. Expect a response within one to three business days`}
        />
      )}
      {stageIndex === 0 && (
        <SelectThemeSlide
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === 1 && (
        <SelectWebsiteType
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === 2 && (
        <UserWebsiteDescription
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === 3 && (
        <UserHasOwnContent
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === 4 && (
        <DomainNamePicker
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === 5 && (
        <PlanSelector
          setSelections={setSelections}
          selections={selections}
          setActiveStageId={setStageIndex}
        />
      )}
      {stageIndex === stages.length - 1 && (
        <NewWebsiteReview
          selections={selections}
          showConfirmationModal={showConfirmationModal}
        />
      )}
    </div>
  );
};

export default WebsiteBuilderForm;
