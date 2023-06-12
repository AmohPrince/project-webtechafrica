import { UserData } from "../Types/Global";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { uid } from "uid";

export const addOrUpdateUserDataInDB = async (
  userData: UserData | null | any,
  userId: string
) => {
  const usersRef = doc(db, "users", userId);
  await setDoc(usersRef, userData, {
    merge: true,
  });
};

export const fetchUserDataFromDB = async (
  userId: string
): Promise<UserData> => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as UserData;
    } else {
      throw new Error("User not found in the database");
    }
  } catch (error) {
    throw error;
  }
};

export const addEmailToWaitList = async (email: string) => {
  const id = uid(6);
  const emailListRef = doc(db, "premiumwaitlist", id);
  await setDoc(emailListRef, { email: email });
};
