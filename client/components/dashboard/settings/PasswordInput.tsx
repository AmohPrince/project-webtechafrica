import { useState, ForwardedRef, forwardRef, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
const PasswordInput = forwardRef(
  ({ onChange }: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          onChange={onChange}
          ref={ref}
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="cursor-pointer h-3 absolute top-1/2 -translate-y-1/2 right-2"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    );
  }
);

export default PasswordInput;
