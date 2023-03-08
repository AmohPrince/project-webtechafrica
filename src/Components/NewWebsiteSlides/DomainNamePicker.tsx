import React from "react";
import { NewWebsiteSelections } from "../../Types/Global";

const DomainNamePicker = ({
  setSelections,
  setIsProgressButtonDisabled,
}: {
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
  setIsProgressButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return <div>DomainNamePicker</div>;
};

export default DomainNamePicker;
