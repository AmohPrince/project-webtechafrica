import LogoTab from "@/components/LogoTab";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { ToolTip } from "@/components/ToolTip";
import { Wave } from "@/components/Wave";
import { resetPassword } from "@/firebase/firebase";
import { useGlobalData } from "@/hooks/useGlobalData";
import { LogoColor } from "@/public/assets";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Overlay } from "../Overlay";
import { modalTransition } from "@/framer/motion";
import { motion } from "framer-motion";

const ForgotPassword = ({ close }: { close: () => void }) => {
  const { showNotification } = useGlobalData();

  const resetEmailInput = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    resetEmailInput.current?.focus();
  }, []);

  const onChange = () => {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const disabled = !resetEmailInput.current?.value.match(emailPattern);
    if (disabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handlePasswordReset = async () => {
    setIsLoading(true);
    await resetPassword(resetEmailInput!.current!.value);
    setIsLoading(false);
    showNotification("Please check your email", "success");
  };

  return (
    <Overlay>
      <motion.form
        className="bg-white p-5 rounded-lg relative md:w-1/3 w-3/4 z-30"
        {...modalTransition}
      >
        <p className="font-semibold text-xl mb-7">Forgot Your Password?</p>
        <FontAwesomeIcon
          icon={faClose}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={close}
        />
        <p className="text-sm text-gray-500 mb-6">
          We will send you a reset link
        </p>
        <input
          type="email"
          className="w-full py-3 px-3 border border-gray-400 rounded-xl text-sm mb-7 focus:outline-primaryOne"
          placeholder="Enter your email"
          onChange={onChange}
          ref={resetEmailInput}
        />
        <PrimaryButton
          text="Send"
          className="w-full mb-6"
          onClick={handlePasswordReset}
          disabled={disabled}
          isLoading={isLoading}
        />
        <button className="w-full text-center text-sm" onClick={close}>
          Cancel
        </button>
      </motion.form>
    </Overlay>
  );
};

export default ForgotPassword;
