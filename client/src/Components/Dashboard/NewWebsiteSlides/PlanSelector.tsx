import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { SecondaryButton } from "../../SecondaryButton";
import { useNewWebsiteSelections } from "../../../Hooks/useNewWebsiteSelections";
import { PurpleButton } from "./PurpleButton";
import { BASIC_FEATURES, PREMIUM_FEATURES } from "../../../App";
import { useGlobalData } from "../../../Hooks/useGlobalData";

const PlanSelector = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { selections, setSelections } = useNewWebsiteSelections();
  const { price } = useGlobalData();

  useEffect(() => {
    if (selections.websiteType.type === "E-commerce websites") {
      setSelections((prev) => {
        return {
          ...prev,
          plan: "Basic",
        };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white p-6">
      <div className="flex items-center justify-center">
        {/* {selections.websiteType.type === "E-commerce websites" && (
          <p className="hidden sm:block">
            The basic plan is not available for {selections.websiteType.type}
          </p>
        )} */}
        <SecondaryButton
          text="Review and finish 🚀"
          style={{
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 transition-all ml-auto"
          onClick={() => setActiveStageId((prev) => prev + 1)}
          disabled={selections.plan === null}
        />
      </div>
      <div className="sm:flex py-4">
        <div className="shadow-md py-6 px-6 w-full sm:w-1/3 rounded-xl">
          <p className="font-bold text-lg">Basic</p>
          <p className="font-medium text-sm">Perfect for beginners</p>
          <p className="text-xl font-semibold mt-3 mb-4">
            {price.basic + " " + price.currency}/{" "}
            <span className="text-gray-400 text-sm">monthly</span>{" "}
          </p>
          <PurpleButton
            text={
              selections.plan === "Basic" ? "Basic it is 🤝" : "Choose Basic"
            }
            onClick={() => {
              setSelections((prev) => {
                return {
                  ...prev,
                  plan: "Basic",
                };
              });
            }}
            className={`w-full ${
              selections.plan === "Basic"
                ? "bg-gray-400 rounded-md hover:bg-gray-400"
                : "bg-primaryOne"
            }`}
            disabled={selections.plan === "Basic"}
          />
          <div className="mt-5">
            {BASIC_FEATURES.map((feature) => feature.text).map((feature) => (
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                {feature.replace(/<\/?sp>/g, "")}
              </p>
            ))}
          </div>
        </div>
        {/* {selections.websiteType.type !== "E-commerce websites" ? (
        ) : (
          <p className="block sm:hidden">
            The basic plan is not available for {selections.websiteType.type}
          </p>
        )} */}
        <div className="shadow-md py-6 px-6 w-full sm:w-1/3 sm:ml-5 mt-5 sm:mt-0 border border-primaryOne rounded-xl">
          <p className="font-bold text-lg">Advanced</p>
          <p className="font-medium text-sm">
            Perfect for professionals and business
          </p>
          <p className="text-xl font-semibold mt-3 mb-4">
            {price.advanced + " " + price.currency}/
            <span className="text-gray-400 text-sm">monthly</span>{" "}
          </p>
          <PurpleButton
            text={
              selections.plan === "Premium"
                ? "Premium it is 🤝"
                : "Not Available"
            }
            onClick={() => {
              setSelections((prev) => {
                return {
                  ...prev,
                  plan: "Premium",
                };
              });
            }}
            className={`w-full ${
              selections.plan === "Premium"
                ? "bg-gray-400 rounded-md hover:bg-gray-400 transition-all"
                : "bg-primaryOne"
            }`}
            disabled
          />
          <div className="mt-5">
            {PREMIUM_FEATURES.map((feature) => feature.text).map((feature) => (
              <p className="text-sm flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                {feature.replace(/<\/?sp>/g, "")}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;
