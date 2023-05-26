import { createContext, useContext, useState } from "react";
import { PopUpInfo } from "../Components/SignInOrSignUp/PopUp";
import { Country, fetchCountries } from "../Util/FetchCountries";
import { LOCAL_STORAGE_KEYS } from "../Util/Utilities";
import { useLocalStorage } from "./UseLocalStorage";

type GlobalData = {
  countries: Country[] | null;
  isLoading: boolean;
  popUpInfo: PopUpInfo;
  setPopUpInfo: React.Dispatch<React.SetStateAction<PopUpInfo>>;
};

export const globalDataContext = createContext<GlobalData>(null as any);

export const GlobalDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [countries, setCountries] = useLocalStorage<Country[]>(
    null,
    LOCAL_STORAGE_KEYS.COUNTRIES
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popUpInfo, setPopUpInfo] = useState<PopUpInfo>({
    showing: false,
    text: null,
    type: null,
  });

  fetchCountries()
    .then((countries) => {
      setCountries(countries);
    })
    .finally(() => setIsLoading(false));

  return (
    <globalDataContext.Provider
      value={{
        countries,
        isLoading,
        popUpInfo,
        setPopUpInfo,
      }}
    >
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);
