import React, { useState } from "react";
import { NewWebsiteSelections, WebsiteType } from "../../Types/Global";
import website_types from "../../Json/WebsiteTypes.json";
import { SecondaryButton } from "../SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const SelectWebsiteType = ({
  selections,
  setSelections,
  setActiveStageId,
}: {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setActiveStageId: React.Dispatch<React.SetStateAction<number>>;
}) => {
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
          className="outline-none hover:scale-100 transition-all duration-300"
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
        {website_types.map((type) => (
          <option
            value={type.type}
            className="rounded-sm border border-primaryOne"
          >
            {type.type}
          </option>
        ))}
      </select>
      <p>{activeWebsiteType.description}</p>
    </div>
  );
};

export default SelectWebsiteType;

const DashboardButtonText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <p className="mr-2">{text}</p>
      <FontAwesomeIcon icon={faRocket} />
    </div>
  );
};
