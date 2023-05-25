import React, { useState } from "react";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";
import { SecondaryButton } from "../../SecondaryButton";

export const UserWebsiteDescription = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [noOfCharacters, setNoOfCharacters] = useState<number>(0);
  const { setSelections, selections } = useNewWebsiteSelections();

  return (
    <div className="py-5 px-6 bg-white flex flex-col">
      <p>
        Describe the purpose and goals of the website? This will help us
        understand your specific niche and target audience to create a website
        that will be sure to fit your needs
      </p>
      <textarea
        className="w-full h-[10vh] p-2 border rounded-md mt-4"
        onChange={(e) => {
          setNoOfCharacters(e.target.value.length);
          if (e.target.value.length >= 250) {
            setSelections((prev) => {
              return {
                ...prev,
                websiteDescription: e.target.value,
              };
            });
          }
        }}
        style={{
          outlineColor: selections.theme.colors.primary,
        }}
      />
      <p className="my-3">{noOfCharacters} / 250 characters</p>
      <SecondaryButton
        text="Submit description"
        style={{
          backgroundColor: selections.theme.colors.primary,
          color: selections.theme.colors.text,
        }}
        className="outline-none hover:scale-100 transition-all ml-auto w-full sm:w-auto"
        onClick={() => setActiveStageId((prev) => prev + 1)}
        disabled={selections.websiteDescription === null}
      />
    </div>
  );
};
