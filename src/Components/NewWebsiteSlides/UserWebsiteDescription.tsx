import React, { useEffect, useState } from "react";
import { NewWebsiteSelections } from "../../Types/Global";

export const UserWebsiteDescription = ({
  setIsProgressButtonDisabled,
  setSelections,
}: {
  setIsProgressButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
}) => {
  const [noOfCharacters, setNoOfCharacters] = useState<number>(0);
  useEffect(() => {
    setIsProgressButtonDisabled(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-5">
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
      />
      <p className="ml-auto">{noOfCharacters} / 250 characters</p>
    </div>
  );
};
