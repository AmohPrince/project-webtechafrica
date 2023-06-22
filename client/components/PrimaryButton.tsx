import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  style,
  disabled,
  isLoading,
}: {
  style?: React.CSSProperties;
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  return (
    <button
      className={`bg-primaryOne rounded-full px-7 py-3 text-white text-sm font-medium hover:bg-primaryOneLight transition-all disabled:cursor-not-allowed ${className} disabled:bg-primaryOneLight`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {isLoading ? (
        <FontAwesomeIcon
          icon={faCircleNotch}
          spin
          className="text-center text-white"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default PrimaryButton;
