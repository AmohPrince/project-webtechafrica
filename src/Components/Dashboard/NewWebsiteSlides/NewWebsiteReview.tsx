import React, { useState } from "react";
import { uid } from "uid";
import { addOrUpdateUserDataInDB } from "../../../Firebase/firestore";
import { useAuth } from "../../../Hooks/UseAuth";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";
import { UserData } from "../../../Types/Global";
import { SecondaryButton } from "../../SecondaryButton";
import { ThemeBox } from "../../ThemeBox";
import Confirmation from "../../Confirmation";
import { getTimestampForThreeDaysFromNow } from "../../../Util/Utilities";

const NewWebsiteReview = ({
  showConfirmationModal,
}: {
  showConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //contexts
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
    <div className="bg-white p-6">
      {errorOccurred && (
        <Confirmation text="An error occurred! But don`t worry we have stored everything for you so that you dont have to make your selections again." />
      )}
      <div className="flex items-center justify-center">
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
      </div>
      <p className="font-semibold mt-5 mb-2">Theme</p>
      <ThemeBox theme={selections.theme} activeThemeId={selections.theme.id} />
      <div>
        <p className="font-semibold mt-5">Description</p>
        <p className="break-words">{selections.websiteDescription}</p>
      </div>
      <div className="flex justify-between flex-wrap w-full sm:w-2/3">
        <div className="w-1/2 sm:w-auto">
          <p className="mt-5 text-sm text-gray-400">Plan</p>
          <p className="font-semibold">{selections.plan}</p>
        </div>
        <div className="w-1/2 sm:w-auto">
          <p className="mt-5 text-sm text-gray-400">Content Style</p>
          {selections.userHasOwnContent ? (
            <p className="font-semibold">User generated</p>
          ) : (
            <p className="font-semibold">AI generated</p>
          )}
        </div>
        <div className="w-1/2 sm:w-auto">
          <p className="mt-5 text-sm text-gray-400">Website Type</p>
          <p className="font-semibold">{selections.websiteType.type}</p>
        </div>
        <div className="w-1/2 sm:w-auto">
          <p className="mt-5 text-sm text-gray-400">Website Domain</p>
          <p className="font-semibold">{selections.domainName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteReview;
