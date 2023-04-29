import React, { useEffect, useRef, useState } from "react";
import { NewWebsiteSelections } from "../../Types/Global";
import { SecondaryButton } from "../SecondaryButton";

const UserHasOwnContent = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const userHasOwnContentRef = useRef<HTMLInputElement>(null);
  const automaticContentGenerationRef = useRef<HTMLInputElement>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsButtonDisabled(
      automaticContentGenerationRef.current?.checked === false &&
        userHasOwnContentRef.current?.checked === false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userHasOwnContentRef.current?.checked,
    automaticContentGenerationRef.current?.checked,
  ]);

  return (
    <div className="bg-white p-6">
      <p>
        Do you have any content or would you like our AI to generate everything
        for you? You are allowed to change anything you want later
      </p>
      <div className="sm:flex justify-between items-center my-5">
        <div className="flex mb-2 sm:mb-0">
          <input
            type="checkbox"
            onChange={(e) => {
              automaticContentGenerationRef.current!.checked = false;
              setSelections((prev) => {
                return {
                  ...prev,
                  userHasOwnContent: e.target.checked,
                };
              });
            }}
            ref={userHasOwnContentRef}
            className="mr-2 w-4 cursor-pointer h-4"
          />
          <p>I have my own</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="mr-2 w-4 cursor-pointer h-4"
            onChange={(e) => {
              userHasOwnContentRef.current!.checked = false;
              setSelections((prev) => {
                return {
                  ...prev,
                  userHasOwnContent: !e.target.checked,
                };
              });
            }}
            ref={automaticContentGenerationRef}
          />
          <p>Find out what might seem right for me. (recommended)</p>
        </div>
      </div>
      <SecondaryButton
        text="Pick domain"
        style={{
          backgroundColor: selections.theme.colors.primary,
          color: selections.theme.colors.text,
        }}
        className="outline-none hover:scale-100 transition-all ml-auto w-full sm:w-auto mt-5 sm:mt-0"
        onClick={() => setActiveStageId((prev) => prev + 1)}
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default UserHasOwnContent;
