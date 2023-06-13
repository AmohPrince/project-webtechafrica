import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import {
  PopUp,
  PopUpInfo,
  PopUpInfoType,
} from "../Components/SignInOrSignUp/PopUp";
import { Country, fetchCountries } from "../Util/FetchCountries";
import { LOCAL_STORAGE_KEYS, toTheNearestHundredth } from "../Util/Utilities";
import { useLocalStorage } from "./UseLocalStorage";

type GlobalData = {
  countries: Country[] | null;
  isLoading: boolean;
  popUpInfo: PopUpInfo;
  showNotification: (message: string, type: PopUpInfoType) => void;
  price: Price;
};

type UserCoordinates = {
  latitude: number;
  longitude: number;
};

type Price = {
  currency: string;
  basic: number;
  advanced: number;
};

export const globalDataContext = createContext<GlobalData>(null as any);

export const DEFAULT_PRICE = {
  currency: "USD",
  basic: 49,
  advanced: 69,
};

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

  const [price, setPrice] = useState<Price>(DEFAULT_PRICE);

  const showNotification = (message: string, type: PopUpInfoType) => {
    setPopUpInfo({
      showing: true,
      text: message,
      type: type,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const initializeApp = async () => {
      setIsLoading(true);

      const userLocation = await promptUserForTheirLocation();
      const countries = await fetchCountries();

      setCountries(countries);

      if (userLocation && countries) {
        const userCurrency: string = getUsersCountryCurrencyCode(
          userLocation,
          countries
        );
        if (userCurrency !== price.currency) {
          const newBasicPrice = await convertCurrency(
            userCurrency,
            price.basic.toString()
          );
          const newPremiumPrice = await convertCurrency(
            userCurrency,
            price.advanced.toString()
          );
          if (newBasicPrice && newPremiumPrice) {
            setPrice({
              advanced: toTheNearestHundredth(
                parseInt(newPremiumPrice.toFixed(0))
              ),
              basic: toTheNearestHundredth(parseInt(newBasicPrice.toFixed(0))),
              currency: userCurrency,
            });
          }
        }
      }

      setIsLoading(false);
    };

    initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <globalDataContext.Provider
      value={{
        countries,
        isLoading,
        popUpInfo,
        showNotification,
        price,
      }}
    >
      <AnimatePresence>
        {popUpInfo.showing && (
          <PopUp popUpInfo={popUpInfo} setPopUp={setPopUpInfo} />
        )}
      </AnimatePresence>
      {children}
    </globalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(globalDataContext);

const promptUserForTheirLocation = (): Promise<UserCoordinates | null> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const userCoordinates: UserCoordinates = {
            latitude,
            longitude,
          };
          resolve(userCoordinates);
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            default:
              console.log(error.message);
          }
          reject(null);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      reject(null);
    }
  });
};

const getUsersCountryCurrencyCode = (
  userLocation: UserCoordinates,
  countries: Country[]
) => {
  const { latitude, longitude } = userLocation;

  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  let closestCountry;
  let closestDistance = Infinity;

  for (const country of countries) {
    const [countryLatitude, countryLongitude] = country.latlng;
    const distance = getDistance(
      latitude,
      longitude,
      countryLatitude,
      countryLongitude
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCountry = country;
    }
  }

  if (closestCountry && closestCountry.currencies) {
    const currencies = Object.keys(closestCountry.currencies);
    if (currencies.length > 0) {
      return currencies[0];
    }
  }

  throw new Error("Unable to determine user's country currency code.");
};

const convertCurrency = async (
  want: string,
  amount: string
): Promise<number | null> => {
  const options = {
    method: "GET",
    url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
    params: {
      have: "USD",
      want: want,
      amount: amount,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.new_amount;
  } catch (error) {
    console.error(error);
    return null;
  }
};
