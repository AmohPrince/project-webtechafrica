import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {
  deleteUser,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithRedirect,
  updateEmail,
  updatePassword,
  updateProfile,
  // updatePhoneNumber,
  UserCredential,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword as createUserWithEmailFnFromFirebase,
  signInWithEmailAndPassword as signInUserFnFromFirebase,
  signOut as signOutFnFromFirebase,
} from "firebase/auth";
import { LOCAL_STORAGE_KEYS } from "../util/utilities";
import { getChatGPTmessage } from "@/openai/openai";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "projectwebtechafrica.firebaseapp.com",
  projectId: "projectwebtechafrica",
  storageBucket: "projectwebtechafrica.appspot.com",
  messagingSenderId: "503691559074",
  appId: "1:503691559074:web:7ce5f7e7dffa3db5a4d7fb",
  measurementId: "G-HP7VRMT9JW",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage();
const googleAuthProvider = new GoogleAuthProvider();
// const storageRef = ref(storage);
// const profilePicturesRef = ref(storage, "profile-pictures");

export const signInWithGoogle = async (): Promise<UserCredential> => {
  if (window.innerWidth < 768) {
    try {
      const userCredential: UserCredential = await signInWithRedirect(
        auth,
        googleAuthProvider
      );
      return userCredential;
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        googleAuthProvider
      );
      return userCredential;
    } catch (error) {
      throw error;
    }
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential: UserCredential = await signInUserFnFromFirebase(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (err) {
    throw err;
  }
};

/**
 * a function to create a user with email and password
 * @param email the email of the new user
 * @param password the string representation of the user`s password
 * @param name a name object containing a firstName and lastName property
 * @returns a promise of a user object
 */
export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
  name: { firstName: string; lastName: string }
): Promise<UserCredential> => {
  try {
    const userCredential: UserCredential =
      await createUserWithEmailFnFromFirebase(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const redirectResult = async (): Promise<UserCredential | null> => {
  try {
    const userCredential: UserCredential | null = await getRedirectResult(auth);
    if (userCredential) {
      return userCredential;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  await signOutFnFromFirebase(auth)
    .then((res) => {
      Object.keys(LOCAL_STORAGE_KEYS).map((key) =>
        localStorage.removeItem(key)
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

// https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
export const resetPassword = async (email: string): Promise<boolean> => {
  return await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// https://firebase.google.com/docs/auth/web/manage-users#set_a_users_email_address
export const updateUserEmailAddress = async (
  email: string
): Promise<boolean> => {
  return await updateEmail(auth.currentUser!, email)
    .then(() => {
      // Email updated!
      // ...
      return true;
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
      return false;
    });
};

// https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password
export const updateUserPassword = async (
  newPassword: string
): Promise<boolean> => {
  return await updatePassword(auth.currentUser!, newPassword)
    .then(() => {
      // Update successful.
      return true;
    })
    .catch((error) => {
      // An error ocurred
      // ...
      console.log(error);
      return false;
    });
};

// export const updateUserPhoneNumber = async ():Promise<boolean> => {
//   return updatePhoneNumber(auth.currentUser , )
// }

export const deleteAccount = async (): Promise<boolean> => {
  return deleteUser(auth.currentUser!)
    .then(() => {
      // User deleted.
      return true;
    })
    .catch((error) => {
      // An error ocurred
      // ...
      return false;
    });
};

export const sendVerificationEmail = async (): Promise<boolean> => {
  await sendEmailVerification(auth.currentUser!)
    .then(() => {
      // Email verification sent!
      // ...
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

  return false;
};

// https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
export const updateUserDisplayName = async (
  displayName: string
): Promise<boolean> => {
  return updateProfile(auth.currentUser!, {
    displayName,
  })
    .then(() => {
      // displayName updated!
      // ...
      return true;
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
      return false;
    });
};

// https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
export const updateUserProfilePicture = async (url: string) => {
  return updateProfile(auth.currentUser!, {
    photoURL: url,
  })
    .then(() => {
      // displayName updated!
      // ...
      return true;
    })
    .catch((error) => {
      // An error occurred
      // ...
      console.log(error);
      return false;
    });
};

export const getSignInErrorMessage = async (err: any): Promise<string> => {
  try {
    return await getChatGPTmessage(err.code, "sign-in");
  } catch (error) {
    let errorMessage: string;
    switch (err.code) {
      case "auth/user-not-found":
        errorMessage = "User not found. Please check your email and try again.";
        break;
      case "auth/wrong-password":
        errorMessage =
          "Wrong password. Please check your password and try again.";
        break;
      case "auth/network-request-failed":
        errorMessage =
          "Network error. Please check your internet connection and try again.";
        break;
      case "auth/popup-closed-by-user":
        errorMessage = "Sign in failed: You closed the sign-in window.";
        break;
      case "auth/cancelled-popup-request":
        errorMessage = "Sign in failed: You cancelled the sign-in window.";
        break;
      case "auth/email-already-in-use":
        errorMessage =
          "This email is already in use. Please sign in or use a different email address.";
        break;
      case "auth/operation-not-allowed":
        errorMessage =
          "Sign in is currently not available. Please try again later.";
        break;
      case "auth/too-many-requests":
        errorMessage =
          "Sign in has been temporarily disabled due to too many requests. Please try again later.";
        break;
      case "auth/internal-error":
        errorMessage =
          "An internal error has occurred. Please try again later.";
        break;
      default:
        errorMessage = err.message;
    }
    return errorMessage;
  }
};

export const getSignUpErrorMessage = async (err: any): Promise<string> => {
  try {
    return await getChatGPTmessage(err.code, "sign-up");
  } catch (error) {
    switch (err.code) {
      case "auth/account-exists-with-different-credential":
        return "An account with this email already exists. Try signing in with a different method.";
      case "auth/popup-closed-by-user":
        return "The sign-up popup was closed before authentication could complete. Please try again.";
      case "auth/cancelled-popup-request":
        return "The sign-up popup was cancelled before authentication could complete. Please try again.";
      case "auth/email-already-in-use":
        return "An account with this email already exists. Please use a different email address.";
      case "auth/invalid-email":
        return "The email address you entered is not valid. Please check your email and try again.";
      case "auth/weak-password":
        return "Your password is too weak. Please choose a stronger password.";
      default:
        return "An error occurred. Please try again later. " + err.code;
    }
  }
};
