import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SubmitButton = ({
  disabled,
  isLoading,
  icon,
  text,
  className,
}: {
  disabled: boolean;
  isLoading: boolean;
  icon?: IconProp;
  text: string;
  className: string;
}) => {
  return (
    <button
      className={`text-sm font-semibold bg-primaryOne text-white px-5 py-3 rounded-full mt-4 disabled:cursor-not-allowed disabled:bg-primaryOneLight smooth ${className}`}
      disabled={disabled}
      type="submit"
    >
      {isLoading ? (
        <FontAwesomeIcon
          icon={icon ?? faCircleNotch}
          className="spin h-5 w-5 mx-auto"
        />
      ) : (
        text
      )}
    </button>
  );
};
