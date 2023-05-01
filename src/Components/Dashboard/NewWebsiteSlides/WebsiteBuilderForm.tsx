import React, { useContext, useEffect, useState } from "react";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./PlanSelector";
import SelectWebsiteType from "./SelectWebsiteType";
import { UserWebsiteDescription } from "./UserWebsiteDescription";
import UserHasOwnContent from "./UserHasOwnContent";
import NewWebsiteReview from "./NewWebsiteReview";
import DomainNamePicker from "./DomainNamePicker";
import { globalData } from "../../../Pages/DashBoard";
import Confirmation from "../../Confirmation";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";

const WebsiteBuilderForm = () => {
  const { setDashBoardTitleInfo } = useContext(globalData);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [confirmationModal, showConfirmationModal] = useState(false);

  const { selections } = useNewWebsiteSelections();

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
        <SelectThemeSlide setActiveStageId={setStageIndex} />
      )}
      {stageIndex === 1 && (
        <SelectWebsiteType setActiveStageId={setStageIndex} />
      )}
      {stageIndex === 2 && (
        <UserWebsiteDescription setActiveStageId={setStageIndex} />
      )}
      {stageIndex === 3 && (
        <UserHasOwnContent setActiveStageId={setStageIndex} />
      )}
      {stageIndex === 4 && (
        <DomainNamePicker setActiveStageId={setStageIndex} />
      )}
      {stageIndex === 5 && <PlanSelector setActiveStageId={setStageIndex} />}
      {stageIndex === stages.length - 1 && (
        <NewWebsiteReview showConfirmationModal={showConfirmationModal} />
      )}
    </div>
  );
};

export default WebsiteBuilderForm;
