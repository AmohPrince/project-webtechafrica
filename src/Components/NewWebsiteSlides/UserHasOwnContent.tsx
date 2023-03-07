import React, { useEffect, useRef } from "react";
import { NewWebsiteSelections } from "../../Types/Global";

const UserHasOwnContent = ({
  setSelections,
  setIsProgressButtonDisabled,
}: {
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setIsProgressButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userHasOwnContentRef = useRef<HTMLInputElement>(null);
  const automaticContentGenerationRef = useRef<HTMLInputElement>(null);
  //TODO disable button when neither of the inputs are checked

  useEffect(() => {
    console.log(automaticContentGenerationRef.current?.checked, "Auto");
    console.log(userHasOwnContentRef.current?.checked, "Manual");
    // setIsProgressButtonDisabled(
    //   !isUserHasOwnContentChecked && !isAutomaticContentGenerationChecked
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userHasOwnContentRef, automaticContentGenerationRef]);

  return (
    <div className="mb-5">
      <p>
        Do you have any content or would you like our AI to generate everything
        for you? You are allowed to change anything you want later
      </p>
      <div className="flex">
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
        />
        <p>I have my own</p>
        <input
          type="checkbox"
          className="ml-6"
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
        <p>Find out what might seem right for me.</p>
      </div>
    </div>
  );
};

export default UserHasOwnContent;
