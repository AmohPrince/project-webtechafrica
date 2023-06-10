import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ToolTip } from "../../SignInOrSignUp/ToolTip";

export const StageSwitch = ({
  stageIndex,
  setStageIndex,
  stage,
  numberOfStages,
  i,
}: {
  stageIndex: number;
  setStageIndex: React.Dispatch<React.SetStateAction<number>>;
  stage: string;
  numberOfStages: number;
  i: number;
}) => {
  const [isShowingToolTip, setIsShowingToolTip] = useState(false);

  const isCurrentStage = stageIndex === i;

  return (
    <>
      <div
        className={`flex items-center mx-[6px] cursor-pointer relative ${
          stageIndex > i ? "cursor-not-allowed" : ""
        } ${isCurrentStage && "text-primaryOne font-semibold text-sm"}`}
        onClick={() => {
          setStageIndex(i);
        }}
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
        <p className="cursor-pointer">{stage}</p>
        {isShowingToolTip && (
          <ToolTip
            text="complete previous"
            className="text-white bg-menu rounded-md"
          />
        )}
      </div>
      {i !== numberOfStages - 1 && (
        <div className="h-[1px] bg-gray-300 flex-1" />
      )}
    </>
  );
};
