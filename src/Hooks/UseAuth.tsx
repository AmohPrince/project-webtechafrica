import React from "react";
// import { auth } from "../Firebase/firebase";
import { User } from "../Types/Global";
import { useLocalStorage } from "./UseLocalStorage";

export function useAuth(): {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} {
  const [user, setUser] = useLocalStorage<User | null>(null, "user-data");

  const lastSavedDate: string | null = localStorage.getItem("lastSignInDate");

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
      setUser(null);
    }
  }

  return {
    user,
    setUser,
  };
}
