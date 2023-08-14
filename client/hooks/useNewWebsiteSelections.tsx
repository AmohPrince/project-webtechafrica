"use client";

import { NewWebsiteSelections } from "@/types/Global";
import React, { createContext, useContext, useState } from "react";
import website_types from "../json/WebsiteTypes.json";
import themes from "../util/themes.json";

type SelectionsContext = {
  selections: NewWebsiteSelections;
  setSelections: React.Dispatch<React.SetStateAction<NewWebsiteSelections>>;
};

const selectionsContext = createContext<SelectionsContext>({
  selections: {
    plan: null,
    theme: themes[0],
    domainName: null,
    userHasOwnContent: null,
    websiteDescription: null,
    websiteType: website_types[0],
  },
  setSelections: () => {},
});

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
