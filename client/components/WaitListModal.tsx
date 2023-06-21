import { addEmailToWaitList } from "@/firebase/firestore";
import { useGlobalData } from "@/hooks/useGlobalData";
import {
  faCircleNotch,
  faCircleXmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Overlay } from "./Overlay";

export const WaitListModal = ({
  setIsShowingEmailModal,
}: {
  setIsShowingEmailModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useGlobalData();
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleJoiningWaitlist = async () => {
    setIsLoading(true);
    try {
      await addEmailToWaitList(emailRef.current!.value);
      showNotification(
        "You successfully joined the premium waitlist!",
        "success"
      );
      setIsShowingEmailModal(false);
    } catch (error) {
      showNotification("An error occurred", "error");
    }
    setIsLoading(false);
  };

  return (
    <Overlay>
      <motion.div
        className="bg-white rounded-lg p-5 sm:w-1/3 w-11/12"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-lg">Joining the waitlist!</h2>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="cursor-pointer text-primaryOne h-4 w-4"
            onClick={() => setIsShowingEmailModal(false)}
          />
        </div>
        <p className="text-xs text-gray-500">Please enter your email!</p>
        <div className="relative my-5">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-sm p-2 border rounded-md w-full pl-9 outline-none"
            required
            ref={emailRef}
          />
        </div>
        <button
          className="rounded-full w-full text-xs text-white hover:bg-orangeText py-4 mt-5 bg-primaryOne transition-all disabled:cursor-not-allowed"
          onClick={handleJoiningWaitlist}
        >
          {isLoading ? <FontAwesomeIcon icon={faCircleNotch} spin /> : "Join"}
        </button>
        <div
          className="flex justify-center"
          onClick={() => setIsShowingEmailModal(false)}
        >
          <p className="mx-auto py-2 cursor-pointer text-sm font-medium">
            Cancel
          </p>
        </div>
      </motion.div>
    </Overlay>
  );
};
