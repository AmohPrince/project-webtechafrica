import React, { useContext, useState } from "react";
import { globalData } from "../../Pages/DashBoard";
import {
  NewWebsiteSelections,
  PendingVerificationWebsite,
} from "../../Types/Global";
import { SecondaryButton } from "../SecondaryButton";
import { ThemeBox } from "../ThemeBox";

const NewWebsiteReview = ({
  selections,
  showConfirmationModal,
}: {
  selections: NewWebsiteSelections;
  showConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setMutableUserObject } = useContext(globalData);
  const completeWebsiteBuildingProcess = () => {
    setIsLoading(true);
    //TODO
    //submit to server. after the post call is completed update the state objects holding the pending verification websites
    //submitToServer(selections, user);
    //This is just simulation
    setTimeout(() => {
      setIsLoading(false);
      setMutableUserObject((prev) => {
        const newWebsite: PendingVerificationWebsite = {
          id: "fakeId",
          url: selections.domainName!,
          hasShop: true,
          decisionDeadline: "24th June 2021",
        };

        return {
          ...prev,
          id: prev!.id ?? "",
          name: prev?.name ?? "",
          email: prev?.email ?? "",
          plan: prev?.plan ?? "basic",
          paymentMethodSelected: prev?.paymentMethodSelected ?? false,
          pendingVerificationWebsites: [
            ...(prev?.pendingVerificationWebsites
              ? prev?.pendingVerificationWebsites!
              : []),
            newWebsite,
          ],
        };
      });
      showConfirmationModal(true);
    }, 3000);
  };
  return (
    <div className="bg-white p-6">
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
      <div className="flex justify-between w-2/3">
        <div>
          <p className="mt-5 text-sm text-gray-400">Plan</p>
          <p className="font-semibold">{selections.plan}</p>
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Content Style</p>
          {selections.userHasOwnContent ? (
            <p className="font-semibold">User generated</p>
          ) : (
            <p className="font-semibold">AI generated</p>
          )}
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Website Type</p>
          <p className="font-semibold">{selections.websiteType.type}</p>
        </div>
        <div>
          <p className="mt-5 text-sm text-gray-400">Website Domain</p>
          <p className="font-semibold">{selections.domainName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteReview;
