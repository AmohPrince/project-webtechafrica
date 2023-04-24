import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SettingsInput = ({
  type,
}: {
  type: React.HTMLInputTypeAttribute;
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
      />
      <FontAwesomeIcon
        icon={faPen}
        className="text-primaryOne absolute top-1/2 -translate-y-1/2 right-2"
      />
    </div>
  );
};
