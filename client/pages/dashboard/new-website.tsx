import Confirmation from "@/components/dashboard/Confirmation";
import DomainNamePicker from "@/components/dashboard/newwebsiteslides/DomainNamePicker";
import NewWebsiteReview from "@/components/dashboard/newwebsiteslides/NewWebsiteReview";
import PlanSelector from "@/components/dashboard/newwebsiteslides/PlanSelector";
import SelectThemeSlide from "@/components/dashboard/newwebsiteslides/SelectThemeSlide";
import SelectWebsiteType from "@/components/dashboard/newwebsiteslides/SelectWebsiteType";
import { StageSwitch } from "@/components/dashboard/newwebsiteslides/StageSwitch";
import UserHasOwnContent from "@/components/dashboard/newwebsiteslides/UserHasOwnContent";
import { UserWebsiteDescription } from "@/components/dashboard/newwebsiteslides/UserWebsiteDescription";
import { Overlay } from "@/components/Overlay";
import { useGlobalData } from "@/hooks/useGlobalData";
import { useNewWebsiteSelections } from "@/hooks/useNewWebsiteSelections";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/dashboard/Layout";

const NewWebsite = () => {
  const { setDashBoardTitleInfo } = useGlobalData();
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [confirmationModal, showConfirmationModal] = useState(false);
  const { selections } = useNewWebsiteSelections();

  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "New Website",
      sub: "Lets get you hooked up with a website!",
    });
  }, [setDashBoardTitleInfo]);

  const stages: { text: string; selectionsProp: string }[] = [
    {
      text: "Theme",
      selectionsProp: "theme",
    },
    {
      text: "Website Type",
      selectionsProp: "theme",
    },
    {
      text: "Website Description",
      selectionsProp: "websiteType",
    },

    {
      text: "Content Generation Type",
      selectionsProp: "websiteDescription",
    },

    {
      text: "Domain Finder",
      selectionsProp: "userHasOwnContent",
    },
    {
      selectionsProp: "domainName",
      text: "Plan (No Credit Card)",
    },
    {
      selectionsProp: "plan",
      text: "Finish",
    },
  ];

  return (
    <Layout>
      <div className="w-full pt-4">
        {confirmationModal && (
          <Overlay>
            <Confirmation
              text={`Your website at ${selections.domainName} has been submitted for approval. Expect a response within one to three business days`}
            />
          </Overlay>
        )}
        <div className="flex justify-between bg-white py-4 px-12 my-2 items-center text-xs overflow-x-auto">
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
    </Layout>
  );
};

export default NewWebsite;
