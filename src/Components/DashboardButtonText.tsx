import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DashboardButtonText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <p className="mr-2">{text}</p>
      <FontAwesomeIcon icon={faRocket} />
    </div>
  );
};
