import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { NewWebsiteSelections } from "../../../types/Global";
import PrimaryButton from "../../PrimaryButton";

export const FoundDomain = ({
  domainName,
  selections,
  setSelections,
  setIsButtonDisabled,
}: {
  domainName: string;
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isSelected = domainName === selections.domainName;
  return (
    <motion.div
      className="border rounded-md p-4 w-1/2 sm:w-1/4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-green-600" />
        <p className="font-bold text-sm">{domainName}</p>
      </div>
      <PrimaryButton
        text={isSelected ? "Selected" : "Select Domain"}
        className="w-full rounded-md mt-5 hover:scale-100 disabled:bg-gray-400"
        onClick={() => {
          setSelections((prev) => {
            return {
              ...prev,
              domainName: domainName,
            };
          });
          setIsButtonDisabled(false);
        }}
        disabled={isSelected}
      />
    </motion.div>
  );
};
