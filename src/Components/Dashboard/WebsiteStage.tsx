import React from "react";
import { WebsiteStage as WebsiteStageType } from "../../Types/Global";

export const WebsiteStage = ({ stage }: { stage: WebsiteStageType }) => {
  return (
    <div
      className={`py-2 rounded-md ${
        stage === "In Review"
          ? "bg-lightOrange text-magloOrange"
          : "bg-lightGreen text-green-600"
      }  px-4 w-max text-xs ml-auto`}
    >
      {stage}
    </div>
  );
};
