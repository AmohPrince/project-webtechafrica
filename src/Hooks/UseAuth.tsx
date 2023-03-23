import React from "react";
// import { auth } from "../Firebase/firebase";
import { User } from "../Types/Global";
import { useLocalStorage } from "./UseLocalStorage";

export function useAuth(): {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} {
  const [user, setUser] = useLocalStorage<User | null>(null, "user-data");

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       setUser({
  //         email: userAuth.email!,
  //         name: userAuth.displayName ? userAuth.displayName! : userAuth.email!,
  //         paymentMethodSelected: false,
  //         plan: "basic",
  //       });
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return unsubscribe;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return {
    user,
    setUser,
  };
}
