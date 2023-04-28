import React, { ChangeEvent, useRef, useState } from "react";
import { updateUserPassword } from "../../../Firebase/firebase";
import PrimaryButton from "../../PrimaryButton";
import { ToolTip } from "../../SignInOrSignUp/ToolTip";
import PasswordInput from "./PasswordInput";

export const PasswordEditor = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onReEnterPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const areTheSamePassword = newPasswordRef.current?.value === e.target.value;
    if (areTheSamePassword) {
      setPasswordMismatchError(false);
    } else {
      setPasswordMismatchError(true);
    }
  };

  const resetUserPassword = () => {
    setIsLoading(true);
    updateUserPassword(newPasswordRef.current!.value)
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-5 w-1/2 mx-auto flex flex-col">
      <p className="text-xl font-bold mt-4">Password</p>
      <div className="w-full mt-4">
        <p className="text-base font-medium">Current password</p>
        <p className="text-xs font-medium text-gray-400 my-1">
          This is the current password of this account
        </p>
        <PasswordInput />
      </div>
      <div className="w-full mt-4">
        <p className="text-base font-medium">New password</p>
        <p className="text-xs font-medium text-gray-400 my-1">
          Enter your new password here
        </p>
        <PasswordInput ref={newPasswordRef} />
      </div>
      <div className="w-full mt-4">
        <p className="text-base font-medium">Re-Enter your password here</p>
        <p className="text-xs font-medium text-gray-400 my-1">
          Re-Enter your new password here
        </p>
        <div className="relative">
          {passwordMismatchError && <ToolTip text="Passwords do not match" />}
          <PasswordInput onChange={onReEnterPassword} />
        </div>
      </div>
      <PrimaryButton
        text="Reset Password"
        className="mt-4 ml-auto"
        disabled={passwordMismatchError}
        isLoading={isLoading}
        onClick={resetUserPassword}
      />
    </div>
  );
};
