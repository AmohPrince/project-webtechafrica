import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
      />
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className="cursor-pointer h-3 absolute top-1/2 -translate-y-1/2 right-2"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
};
export default PasswordInput;
