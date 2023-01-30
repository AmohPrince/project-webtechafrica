import React from "react";
import { User } from "../Types/Global";
import { useLocalStorage } from "./UseLocalStorage";

export function useAuth(): {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} {
  const [user, setUser] = useLocalStorage<User>(null, "user-data");

  return {
    user,
    setUser,
  };
}
