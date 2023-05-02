import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
import { UserData } from "../Types/Global";
import { LOCAL_STORAGE_KEYS } from "../Util/Utilities";
import { useLocalStorage } from "./UseLocalStorage";

const authContext = createContext<AuthContext>(null as any);

type AuthContext = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  user: User | null;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useLocalStorage<UserData | null>(
    null,
    LOCAL_STORAGE_KEYS.USER_DATA
  );
  const [user, setUser] = useLocalStorage<User | null>(
    null,
    LOCAL_STORAGE_KEYS.USER
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

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE,
        new Date().toISOString()
      );
    }
  }, [user]);

  return (
    <authContext.Provider
      value={{
        userData,
        setUserData,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
