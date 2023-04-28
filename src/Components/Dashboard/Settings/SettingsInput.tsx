import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { Inputs } from "../../../Pages/Dashboard/Settings";

export const SettingsInput = ({
  type,
  regParam,
  register,
  pattern,
}: {
  type: React.HTMLInputTypeAttribute;
  regParam: "email" | "firstName" | "lastName" | "phoneNumber";
  register: UseFormRegister<Inputs>;
  pattern?: ValidationRule<RegExp>;
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
        {...register(regParam, {
          pattern: pattern,
        })}
      />
      <FontAwesomeIcon
        icon={faPen}
        className="text-primaryOne absolute top-1/2 -translate-y-1/2 right-2"
      />
    </div>
  );
};
