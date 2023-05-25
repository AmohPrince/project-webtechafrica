import React, { useContext, useEffect, useState } from "react";
import SelectThemeSlide from "./SelectThemeSlide";
import PlanSelector from "./PlanSelector";
import SelectWebsiteType from "./SelectWebsiteType";
import { UserWebsiteDescription } from "./UserWebsiteDescription";
import UserHasOwnContent from "./UserHasOwnContent";
import NewWebsiteReview from "./NewWebsiteReview";
import DomainNamePicker from "./DomainNamePicker";
import { globalData } from "../../../Pages/DashBoard";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";
import Confirmation from "../Confirmation";
import { StageSwitch } from "./StageSwitch";

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
    "Theme",
    "Website Type",
    "Website Description",
    "Content Generation Type",
    "Domain Finder",
    "Plan (No Credit Card)",
    "Finish",
  ];

  return (
    <div className="relative w-full pt-4">
      {confirmationModal && (
        <Confirmation
          text={`Your website at ${selections.domainName} has been submitted for approval. Expect a response within one to three business days`}
        />
      )}
      <div className="flex justify-between bg-white py-4 px-12 my-2 items-center text-xs">
        {stages.map((stage, i) => (
          <StageSwitch
            i={i}
            numberOfStages={stages.length}
            setStageIndex={setStageIndex}
            stage={stage}
            stageIndex={stageIndex}
            key={i}
          />
        ))}
      </div>
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
      {stageIndex === 6 && (
        <NewWebsiteReview showConfirmationModal={showConfirmationModal} />
      )}
    </div>
  );
};

export default WebsiteBuilderForm;
