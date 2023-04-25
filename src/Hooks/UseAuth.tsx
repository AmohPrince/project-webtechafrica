import { UserCredential } from "firebase/auth";
import React from "react";
import { UserData } from "../Types/Global";
import { LOCAL_STORAGE_KEYS } from "../Util/Utilities";
import { useLocalStorage } from "./UseLocalStorage";

export function useAuth(): {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  userCredential: UserCredential | null;
  setUserCredential: React.Dispatch<
    React.SetStateAction<UserCredential | null>
  >;
} {
  const [userData, setUserData] = useLocalStorage<UserData | null>(
    null,
    LOCAL_STORAGE_KEYS.USER_DATA
  );
  const [userCredential, setUserCredential] =
    useLocalStorage<UserCredential | null>(
      null,
      LOCAL_STORAGE_KEYS.USER_CREDENTIAL
    );

  const lastSavedDate: string | null = localStorage.getItem(
    LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE
  );

  if (lastSavedDate) {
    const lastSignInDateInMilliSeconds: number = new Date(
      lastSavedDate
    ).getTime();
    const todaysDateInMilliSeconds: number = new Date().getTime();
    const differenceInMilliSeconds: number =
      todaysDateInMilliSeconds - lastSignInDateInMilliSeconds;
    const differenceInDays: number =
      differenceInMilliSeconds / (1000 * 60 * 60 * 24);
    if (differenceInDays >= 30) {
      // It's been 30 days or more since the last sign-in
      setUserData(null);
    }
  }

  return {
    userData,
    setUserData,
    userCredential,
    setUserCredential,
  };
}
