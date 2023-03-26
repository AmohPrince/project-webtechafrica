import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignInOrSignUpButton = ({
  disabled,
  isLoading,
  icon,
  text,
}: {
  disabled: boolean;
  isLoading: boolean;
  icon: IconProp;
  text: string;
}) => {
  return (
    <button
      className={`text-sm font-semibold bg-primaryOne text-white w-full px-5 py-3 rounded-full mt-4 disabled:cursor-not-allowed disabled:bg-primaryOneLight smooth`}
      disabled={disabled}
      type="submit"
    >
      {isLoading ? <FontAwesomeIcon icon={icon} className="spin" /> : text}
    </button>
  );
};

export default SignInOrSignUpButton;
