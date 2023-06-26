import LogoTab from "@/components/LogoTab";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ToolTip } from "@/components/ToolTip";
import { Wave } from "@/components/Wave";
import { resetPassword } from "@/firebase/firebase";
import { useGlobalData } from "@/hooks/useGlobalData";
import { LogoColor } from "@/public/assets";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const ForgotPassword = () => {
  const resetEmailInput = useRef<HTMLInputElement>(null);
  const { showNotification } = useGlobalData();

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
    showNotification("Please check your email", "success");
  };

  return (
    <div className="flex h-screen bg-pageBgGrey">
      <Link href="/">
        <LogoTab
          logoColor={LogoColor.primary}
          textColor="text-primaryOne"
          className="absolute top-5 left-5"
        />
      </Link>
      <div className="w-3/4 md:w-1/2 px-[4%] py-[5%] mx-auto my-auto">
        <Link className="flex items-center text-sm" href="/sign-in">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          <p>Back to login</p>
        </Link>
        <h1 className="h3 my-[4%]">Forgot Password?</h1>
        <p className="w-full">
          Please enter the e-mail address you used when creating your account,
          we`ll send you instructions to reset your password.
        </p>
        <div className="w-full my-[7%]">
          <p className="text-gray-400 mr-auto text-sm">E-MAIL</p>
          <div className="relative">
            {showPopUp && (
              <ToolTip text="This ain't a valid email address. A valid email address must at least include ne extension e.g .com" />
            )}
            <input
              type="text"
              className="w-full border-b text-sm h-10 outline-none mb-[5%] bg-transparent px-2"
              ref={resetEmailInput}
              onChange={onChange}
            />
          </div>
        </div>
        <PrimaryButton
          text="Send"
          className="mx-auto w-full"
          onClick={handlePasswordReset}
          disabled={disabled}
        />
      </div>
      <Wave />
    </div>
  );
};

export default ForgotPassword;
