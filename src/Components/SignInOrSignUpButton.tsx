import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignInOrSignUpButton = ({
  disabled,
  isLoading,
  icon,
  text,
  className,
}: {
  disabled: boolean;
  isLoading: boolean;
  icon: IconProp;
  text: string;
  className: string;
}) => {
  return (
    <button
      className={`text-sm font-semibold bg-bgSignupPage text-white w-full px-5 py-3 rounded-lg mt-4 disabled:cursor-not-allowed disabled:bg-blue-400 smooth ${className}`}
      disabled={disabled}
      type="submit"
    >
      {isLoading ? <FontAwesomeIcon icon={icon} className="spin" /> : text}
    </button>
  );
};

export default SignInOrSignUpButton;
