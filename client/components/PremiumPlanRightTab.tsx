"use client";

import { addEmailToWaitList } from "@/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { WaitListModal } from "./WaitListModal";

export const PremiumPlanRightTab = () => {
  const { user } = useAuth();
  const { price, showNotification } = useGlobalData();

  const [isLoading, setIsLoading] = useState(false);
  const [isShowingEmailModal, setIsShowingEmailModal] = useState(false);

  const handleJoiningWaitlist = async () => {
    if (user) {
      setIsLoading(true);
      try {
        await addEmailToWaitList(user.email!);
        showNotification(
          "You successfully joined the premium waitlist!",
          "success"
        );
      } catch (error) {
        console.error(error);
        showNotification("An error occurred!", "error");
      }
      setIsLoading(false);
    } else {
      setIsShowingEmailModal(true);
    }
  };

  return (
    <div className="rounded-[30px] bg-secondaryOne px-10 py-9 w-full md:w-[45%] mt-5 md:mt-0">
      <AnimatePresence>
        {isShowingEmailModal && (
          <WaitListModal setIsShowingEmailModal={setIsShowingEmailModal} />
        )}
      </AnimatePresence>
      <h2 className="h3">So how much will it cost me?</h2>
      <p className="default-paragraph mb-8">
        The advanced plan currently goes for as little as {price.currency + " "}
        {price.advanced} / month. This is inclusive of everything listed in both
        the basic and advanced plan.
      </p>
      <p className="font-bold text-5xl">
        {price.currency} {price.advanced}{" "}
        <span className="text-base">/ month</span>
      </p>
      <button
        className="rounded-full w-full text-xs text-white bg-orangeText py-4 mt-5 hover:bg-primaryOne transition-all"
        onClick={handleJoiningWaitlist}
      >
        {isLoading ? (
          <FontAwesomeIcon icon={faCircleNotch} spin />
        ) : (
          "Join the waitlist 🚀"
        )}
      </button>
    </div>
  );
};
