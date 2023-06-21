import PrimaryButton from "@/components/PrimaryButton";
import { ToolTip } from "@/components/ToolTip";
import { updateUserPassword } from "@/firebase/firebase";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React, { ChangeEvent, useRef, useState } from "react";
import PasswordInput from "./PasswordInput";

export const PasswordEditor = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

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
    <>
      {user?.providerId === "google.com" ? (
        <div className="p-5 w-1/2 mx-auto text-center mt-5">
          <p>
            You signed in using your google account and therefore have no
            password.
          </p>
          <Link href="/dashboard/payments">
            <PrimaryButton text="Payments" className="mt-5" />
          </Link>
        </div>
      ) : (
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
              {passwordMismatchError && (
                <ToolTip text="Passwords do not match" />
              )}
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
      )}
    </>
  );
};
