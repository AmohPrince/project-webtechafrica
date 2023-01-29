import React from "react";
import { User } from "../Types/Global";
import { useLocalStorage } from "./UseLocalStorage";

export function useAuth(): {
  user: User;
  setUser: React.SetStateAction<React.Dispatch<User>>;
} {
  const initialUser = {
    name: "Sammy",
    email: "Fred",
  };

  const [user, setUser] = useLocalStorage<User>(initialUser, "user-data");

  return {
    user,
    setUser,
  };
}
