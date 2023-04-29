import React, { useEffect, useState } from "react";
import { NewWebsiteSelections } from "../../Types/Global";
import { SecondaryButton } from "../SecondaryButton";

export const UserWebsiteDescription = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [noOfCharacters, setNoOfCharacters] = useState<number>(0);
  const [isProgressButtonDisabled, setIsProgressButtonDisabled] =
    useState(false);

  useEffect(() => {
    setIsProgressButtonDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            setIsProgressButtonDisabled(false);
            setSelections((prev) => {
              return {
                ...prev,
                websiteDescription: e.target.value,
              };
            });
          } else {
            setIsProgressButtonDisabled(true);
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
        disabled={isProgressButtonDisabled}
      />
    </div>
  );
};

// const DashboardButtonText = ({ text }: { text: string }) => {
//   return (
//     <div className="flex items-center">
//       <p className="mr-2">{text}</p>
//       <FontAwesomeIcon icon={faRocket} />
//     </div>
//   );
// };
