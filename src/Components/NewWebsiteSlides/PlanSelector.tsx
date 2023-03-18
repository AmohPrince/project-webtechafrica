import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { NewWebsiteSelections } from "../../Types/Global";
import { SecondaryButton } from "../SecondaryButton";

const PlanSelector = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [selected, setSelected] = useState<null | string>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (selected) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-center">
        {selections.websiteType.type === "E-commerce websites" && (
          <p>
            The basic plan is not available for {selections.websiteType.type}
          </p>
        )}
        <SecondaryButton
          text="Submit description"
          style={{
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 transition-all ml-auto"
          onClick={() => setActiveStageId((prev) => prev + 1)}
          disabled={isButtonDisabled}
        />
      </div>
      <div className="flex py-4">
        {selections.websiteType.type !== "E-commerce websites" && (
          <div className="shadow-md py-6 px-6 w-1/3 rounded-xl">
            <p className="font-bold text-lg">Basic</p>
            <p className="font-medium text-sm">Perfect for beginners</p>
            <p className="text-xl font-semibold mt-3 mb-4">
              kes.899/<span className="text-gray-400 text-sm">monthly</span>{" "}
            </p>
            <PrimaryButton
              text={selected === "Basic" ? "Basic it is 🤝" : "Choose Basic"}
              className={`hover:scale-100 w-full transition-all ${
                selected === "Basic"
                  ? "bg-gray-400 rounded-md hover:bg-gray-400"
                  : ""
              }`}
              onClick={() => {
                setSelections((prev) => {
                  return {
                    ...prev,
                    plan: "Basic",
                  };
                });
                setSelected("Basic");
              }}
            />
            <div className="mt-5">
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Unlimited customer support
              </p>
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Hosting
              </p>
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Custom domain name
              </p>
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Complete website design and development
              </p>
            </div>
          </div>
        )}
        <div className="shadow-md py-6 px-6 w-1/3 ml-5 border border-primaryOne rounded-xl">
          <p className="font-bold text-lg">Advanced</p>
          <p className="font-medium text-sm">
            Perfect for professionals and business
          </p>
          <p className="text-xl font-semibold mt-3 mb-4">
            kes.5700/<span className="text-gray-400 text-sm">monthly</span>{" "}
          </p>
          <PrimaryButton
            text={
              selected === "Premium" ? "Premium it is 🤝" : "Choose Premium"
            }
            className={`w-full hover:scale-100 ${
              selected === "Premium"
                ? "bg-gray-400 rounded-md hover:bg-gray-400"
                : ""
            }`}
            onClick={() => {
              setSelections((prev) => {
                return {
                  ...prev,
                  plan: "Premium",
                };
              });
              setSelected("Premium");
            }}
          />
          <div className="mt-5">
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Unlimited customer support
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Hosting
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Custom domain name
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Complete website design and development
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Social media management
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Custom Ads management
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Fully designed and deployed web shop
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Payments covered!
            </p>
            <p className="text-sm flex items-center">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              Sell products online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;
