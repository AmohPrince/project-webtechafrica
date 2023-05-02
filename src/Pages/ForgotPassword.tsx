import React, { useEffect, useRef, useState } from "react";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import PrimaryButton from "../Components/PrimaryButton";
import { ToolTip } from "../Components/SignInOrSignUp/ToolTip";
import { resetPassword } from "../Firebase/firebase";

export const ForgotPassword = () => {
  const resetEmailInput = useRef<HTMLInputElement>(null);

  const [disabled, setDisabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    resetEmailInput.current?.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const disabled = !resetEmailInput.current?.value.match(emailPattern);
    if (disabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handlePasswordReset = async () => {
    if (disabled) {
      setShowPopUp(true);
    }
    await resetPassword(resetEmailInput!.current!.value);
    console.log("resetting password!!");
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col items-center px-[4%] py-[5%]">
        <LogoTab logoColor={LogoColor.primary} textColor="text-primaryOne" />
        <h1 className="h1 my-[4%]">Forgot Your Password?</h1>
        <p className="text-center w-3/4">
          Please enter the e-mail address you used when creating your account,
          we`ll send you instructions to reset your password.
        </p>
        <div className="w-3/4 my-[7%]">
          <p className="text-gray-400 mr-auto text-sm">E-MAIL</p>
          <div className="relative">
            {showPopUp && (
              <ToolTip text="This ain't a valid email address. A valid email address must at least include ne extension e.g .com" />
            )}
            <input
              type="text"
              className="w-full border-b text-sm h-10 outline-none mb-[5%]"
              ref={resetEmailInput}
              onChange={onChange}
            />
          </div>
        </div>
        <PrimaryButton
          text="Send"
          className="mx-auto rounded-md"
          onClick={handlePasswordReset}
          disabled={disabled}
        />
      </div>
      <img
        src={assets.forgot_password}
        alt="forgot password"
        className="w-1/2 object-cover h-full"
      />
    </div>
  );
};
