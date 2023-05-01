import React, { createContext, useContext, useState } from "react";
import { NewWebsiteSelections } from "../Types/Global";
import themes from "../Util/themes.json";
import website_types from "../Json/WebsiteTypes.json";

type SelectionsContext = {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
};

const selectionsContext = createContext<SelectionsContext>(null as any);

export const SelectionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selections, setSelections] = useState<NewWebsiteSelections>({
    plan: null,
    theme: themes[0],
    domainName: null,
    userHasOwnContent: null,
    websiteDescription: null,
    websiteType: website_types[0],
  });
  return (
    <selectionsContext.Provider
      value={{
        selections,
        setSelections,
      }}
    >
      {children}
    </selectionsContext.Provider>
  );
};

export const useNewWebsiteSelections = () => useContext(selectionsContext);
