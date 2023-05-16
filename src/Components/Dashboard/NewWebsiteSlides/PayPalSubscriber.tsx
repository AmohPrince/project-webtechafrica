import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { uid } from "uid";
import { addOrUpdateUserDataInDB } from "../../../Firebase/firestore";
import { useAuth } from "../../../Hooks/UseAuth";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";
import { UserData } from "../../../Types/Global";
import { SecondaryButton } from "../../SecondaryButton";
import Confirmation from "../../Confirmation";
import { getTimestampForThreeDaysFromNow } from "../../../Util/Utilities";

export const PayPalSubscriber = ({
  showConfirmationModal,
}: {
  showConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { selections } = useNewWebsiteSelections();

  const { user, userData } = useAuth();

  //state variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const completeWebsiteBuildingProcess = async () => {
    setIsLoading(true);
    const randomId = uid(10);
    const updatedUserData: UserData = {
      ...userData!,
      pendingVerificationWebsites: [
        ...(userData!.pendingVerificationWebsites
          ? userData!.pendingVerificationWebsites
          : []),
        {
          decisionDeadline: getTimestampForThreeDaysFromNow(),
          hasShop: false,
          id: randomId,
          url: selections.domainName!,
          shopUrl: undefined,
          selections: selections,
        },
      ],
    };

    try {
      await addOrUpdateUserDataInDB(updatedUserData, user!.uid);
      showConfirmationModal(true);
    } catch (error) {
      setErrorOccurred(true);
    }
    setIsLoading(false);
  };
  return (
    <div className="bg-white p-5 flex flex-col">
      {errorOccurred && (
        <Confirmation text="An error occurred! But don`t worry we have stored everything for you so that you dont have to make your selections again." />
      )}
      <SecondaryButton
        text="Complete 🚀"
        style={{
          backgroundColor: selections.theme.colors.primary,
          color: selections.theme.colors.text,
        }}
        className="outline-none hover:scale-100 transition-all ml-auto"
        onClick={() => completeWebsiteBuildingProcess()}
        isLoading={isLoading}
      />
      <p className="w-3/4">
        Please subscribe with paypal, no need to worry, no amount of money is
        going to be extracted from your account for the 1st month!
      </p>
      <PayPalButtons
        className="mt-6 playfair w-1/2 mx-auto"
        createSubscription={async (data, actions) => {
          const orderId = await actions.subscription.create({
            plan_id: "sgsgsggsgsg",
            // plan : "basic",
          });
          console.log(data);
          console.log(orderId);
          return orderId;
        }}
        style={{
          label: "subscribe",
          color: "gold",
          height: 40,
        }}
      />
    </div>
  );
};
