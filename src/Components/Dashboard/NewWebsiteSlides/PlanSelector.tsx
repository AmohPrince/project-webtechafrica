import React, { useEffect, useState } from "react";
import PrimaryButton from "../../PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { SecondaryButton } from "../../SecondaryButton";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";

const PlanSelector = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [selected, setSelected] = useState<null | string>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { selections, setSelections } = useNewWebsiteSelections();

  useEffect(() => {
    if (selected) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (selections.websiteType.type === "E-commerce websites") {
      setSelections((prev) => {
        return {
          ...prev,
          plan: "Premium",
        };
      });
      setSelected("Premium");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-center">
        {selections.websiteType.type === "E-commerce websites" && (
          <p className="hidden sm:block">
            The basic plan is not available for {selections.websiteType.type}
          </p>
        )}
        <SecondaryButton
          text="Review and finish 🚀"
          style={{
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 transition-all ml-auto"
          onClick={() => setActiveStageId((prev) => prev + 1)}
          disabled={isButtonDisabled}
        />
      </div>
      <div className="sm:flex py-4">
        {selections.websiteType.type !== "E-commerce websites" ? (
          <div className="shadow-md py-6 px-6 w-full sm:w-1/3 rounded-xl">
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
        ) : (
          <p className="block sm:hidden">
            The basic plan is not available for {selections.websiteType.type}
          </p>
        )}
        <div className="shadow-md py-6 px-6 w-full sm:w-1/3 sm:ml-5 mt-5 sm:mt-0 border border-primaryOne rounded-xl">
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
                : "bg-primaryOne"
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
