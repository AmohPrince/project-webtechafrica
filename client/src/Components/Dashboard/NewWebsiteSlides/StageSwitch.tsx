import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useGlobalData } from "../../../Hooks/useGlobalData";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";

export const StageSwitch = ({
  stageIndex,
  setStageIndex,
  stage,
  numberOfStages,
  i,
}: {
  stageIndex: number;
  setStageIndex: React.Dispatch<React.SetStateAction<number>>;
  stage: { text: string; selectionsProp: string };
  numberOfStages: number;
  i: number;
}) => {
  const { selections } = useNewWebsiteSelections();
  const { showNotification } = useGlobalData();
  const stageRef = useRef<HTMLDivElement | null>(null);

  const isCurrentStage = stageIndex === i;

  useEffect(() => {
    stageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [isCurrentStage]);

  // @ts-ignore
  const previousStageValue = selections[stage.selectionsProp];

  return (
    <>
      <div
        className={`flex items-center mx-[6px] cursor-pointer relative ${
          stageIndex > i ? "cursor-not-allowed" : ""
        } ${isCurrentStage && "text-primaryOne font-semibold text-sm"}`}
        onClick={() => {
          if (previousStageValue !== null) {
            setStageIndex(i);
          } else {
            showNotification("Please complete previous stage", "error");
          }
        }}
        ref={stageRef}
      >
        {i < stageIndex ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="h-4 w-4 text-menu mr-1"
          />
        ) : (
          <p
            className={`relative p-[10px] rounded-full text-white text-xs mr-1 transition-all ${
              isCurrentStage ? "bg-primaryOne" : "bg-menu"
            }`}
          >
            <span className="absolute center-absolutely">{i + 1}</span>
          </p>
        )}
        <p className="cursor-pointer">{stage.text}</p>
      </div>
      {i !== numberOfStages - 1 && (
        <div className="h-[1px] bg-gray-300 flex-1 min-w-[30px] mx-2 sm:mx-0" />
      )}
    </>
  );
};
