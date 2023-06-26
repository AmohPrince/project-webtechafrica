import React, { useState } from "react";
import { WebsiteType } from "../../../types/Global";
import website_types from "../../../json/WebsiteTypes.json";
import { SecondaryButton } from "../../buttons/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useNewWebsiteSelections } from "../../../hooks/useNewWebsiteSelections";

const SelectWebsiteType = ({
  setActiveStageId,
}: {
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { selections, setSelections } = useNewWebsiteSelections();

  const [activeWebsiteType, setActiveWebsiteType] = useState<WebsiteType>(
    website_types[0]
  );

  return (
    <div className="px-6 py-6 bg-white">
      <div className="flex items-center justify-between">
        <p>Website Type</p>
        <SecondaryButton
          text={
            <DashboardButtonText text={`Pick ${selections.websiteType.type}`} />
          }
          style={{
            backgroundColor: selections.theme.colors.primary,
            color: selections.theme.colors.text,
          }}
          className="outline-none hover:scale-100 transition-all duration-300 hidden md:block"
          onClick={() => setActiveStageId((prev) => prev + 1)}
        />
      </div>
      <select
        onChange={(e) => {
          const activeWebsite = website_types.find(
            (type) => type.type === e.target.value
          )!;
          setActiveWebsiteType(activeWebsite);
          setSelections((prev) => {
            return {
              ...prev,
              websiteType: activeWebsite,
            };
          });
        }}
        className="border-2 rounded-md cursor-pointer my-5 p-3 border-primaryOne outline-none"
      >
        {website_types.map((type, i) => (
          <option
            value={type.type}
            className="rounded-sm border border-primaryOne"
            key={i}
          >
            {type.type}
          </option>
        ))}
      </select>
      <p>{activeWebsiteType.description}</p>
      <SecondaryButton
        text={
          <DashboardButtonText text={`Pick ${selections.websiteType.type}`} />
        }
        style={{
          backgroundColor: selections.theme.colors.primary,
          color: selections.theme.colors.text,
        }}
        className="outline-none hover:scale-100 transition-all duration-300 block md:hidden mt-5 mx-auto w-full"
        onClick={() => setActiveStageId((prev) => prev + 1)}
      />
    </div>
  );
};

export default SelectWebsiteType;

const DashboardButtonText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center w-max mx-auto">
      <p className="mr-2">{text}</p>
      <FontAwesomeIcon icon={faRocket} className="h-5" />
    </div>
  );
};
