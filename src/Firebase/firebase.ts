import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { User } from "../Types/Global";
import {
  createUserWithEmailAndPassword as createUserWithEmailFnFromFirebase,
  signInWithEmailAndPassword as signInUserFnFromFirebase,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "projectwebtechafrica.firebaseapp.com",
  projectId: "projectwebtechafrica",
  storageBucket: "projectwebtechafrica.appspot.com",
  messagingSenderId: "503691559074",
  appId: "1:503691559074:web:7ce5f7e7dffa3db5a4d7fb",
  measurementId: "G-HP7VRMT9JW",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

/**
 * A function to sign in or create a new user using google firebase.
 * @param firstTimeUser a flag indicating that it is a first time user
 */
export const signInWithGoogle = async (
  firstTimeUser: boolean
): Promise<User> => {
  if (window.innerWidth < 768) {
    try {
      const userCredential: UserCredential = await signInWithRedirect(
        auth,
        googleAuthProvider
      );
      const user = {
        id: userCredential.user.uid,
        email: userCredential.user.email!,
        name: userCredential.user.displayName ?? userCredential.user.email!,
        paymentMethodSelected: false,
        plan: "basic",
        photoUrl: userCredential.user.photoURL!,
      };

      if (firstTimeUser) {
        addNewUserToDB(user);
      } else {
        //TODO fetch and return saved user from DB
      }
      return user;
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const UserCredential: UserCredential = await signInWithPopup(
        auth,
        googleAuthProvider
      );
      const user = {
        id: UserCredential.user.uid,
        email: UserCredential.user.email!,
        name: UserCredential.user.displayName ?? UserCredential.user.email!,
        paymentMethodSelected: false,
        plan: "basic",
        photoUrl: UserCredential.user.photoURL!,
      };
      if (firstTimeUser) {
        addNewUserToDB(user);
      } else {
        //TODO fetch and return saved user from DB
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const user = await signInUserFnFromFirebase(auth, email, password);
    //TODO fetch saved user from DB
    return {
      id: user.user.uid,
      email: user.user.email!,
      name: user.user.displayName ?? user.user.email!,
      paymentMethodSelected: false,
      plan: "basic",
    };
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
): Promise<User> => {
  try {
    const userCredential: UserCredential =
      await createUserWithEmailFnFromFirebase(auth, email, password);
    const newUser: User = {
      id: userCredential.user.uid,
      email: userCredential.user.email!,
      name:
        userCredential.user.displayName ?? name.firstName + " " + name.lastName,
      paymentMethodSelected: false,
      plan: "basic",
    };
    addNewUserToDB(newUser);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const redirectResult = async (): Promise<User | null> => {
  try {
    const userCredential: UserCredential | null = await getRedirectResult(auth);
    if (userCredential) {
      const newUser: User = {
        id: userCredential.user.uid,
        email: userCredential.user.email!,
        name: userCredential.user.displayName ?? userCredential.user.email!,
        paymentMethodSelected: false,
        plan: "basic",
        photoUrl: userCredential.user.photoURL!,
      };
      addNewUserToDB(newUser);
      return newUser;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const addNewUserToDB = async (user: User) => {
  const usersRef = doc(db, "users", user.id);
  await setDoc(usersRef, user, {
    merge: true,
  });
};

export const getSignInErrorMessage = (err: any): string => {
  let errorMessage: string;
  switch (err.code) {
    case 'auth/user-not-found':
      errorMessage = 'User not found. Please check your email and try again.';
      break;
    case 'auth/wrong-password':
      errorMessage =
        'Wrong password. Please check your password and try again.';
      break;
    case 'auth/network-request-failed':
      errorMessage =
        'Network error. Please check your internet connection and try again.';
      break;
    case 'auth/popup-closed-by-user':
      errorMessage = 'Sign in failed: You closed the sign-in window.';
      break;
    case 'auth/cancelled-popup-request':
      errorMessage = 'Sign in failed: You cancelled the sign-in window.';
      break;
    case 'auth/email-already-in-use':
      errorMessage =
        'This email is already in use. Please sign in or use a different email address.';
      break;
    case 'auth/operation-not-allowed':
      errorMessage =
        'Sign in is currently not available. Please try again later.';
      break;
    case 'auth/too-many-requests':
      errorMessage =
        'Sign in has been temporarily disabled due to too many requests. Please try again later.';
      break;
    case 'auth/internal-error':
      errorMessage = 'An internal error has occurred. Please try again later.';
      break;
    default:
      errorMessage = err.message;
  }
  return errorMessage;
};

export const getSignUpErrorMessage = (error: any): string => {
  if (error.code === 'auth/account-exists-with-different-credential') {
    return 'An account with this email already exists. Try signing in with a different method.';
  } else if (error.code === 'auth/popup-closed-by-user') {
    return 'The sign-up popup was closed before authentication could complete. Please try again.';
  } else if (error.code === 'auth/cancelled-popup-request') {
    return 'The sign-up popup was cancelled before authentication could complete. Please try again.';
  } else if (error.code === 'auth/email-already-in-use') {
    return 'An account with this email already exists. Please use a different email address.';
  } else if (error.code === 'auth/invalid-email') {
    return 'The email address you entered is not valid. Please check your email and try again.';
  } else if (error.code === 'auth/weak-password') {
    return 'Your password is too weak. Please choose a stronger password.';
  } else {
    return 'An error occurred. Please try again later. ' + error.code;
  }
};

export const testUser: User = {
  id: "ssydd",
  name: "Test User",
  email: "Test email",
  plan: "Basic",
  paymentMethodSelected: false,
  activeWebsites: [
    {
      id: "randomId",
      url: "https://testuser.webtechafrica.com/",
      hasShop: true,
      shopUrl: "https://testuser.webtechafrica.com/shop",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
      plan: "Basic",
    },
  ],
  devWebsites: [
    {
      id: "tastjs",
      url: "https://testuser.webtechafrica.com/",
      expectedCompletionDate: "24th January",
      hasShop: true,
      shopUrl: "https://testuser.webtechafrica.com/shop",
      websiteScreenShot:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
    },
    {
      id: "Trsfsf",
      expectedCompletionDate: "28th February",
      url: "https://testuser.webtechafrica.com/",
      hasShop: false,
      websiteScreenShot:
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg",
    },
  ],
  pendingVerificationWebsites: [
    {
      id: "sgukkb",
      hasShop: true,
      url: "https://website.com",
      decisionDeadline: "24th March",
    },
  ],
  cards: [
    {
      endsIn: "5353",
      expiryDate: "04/2023",
      type: "MasterCard",
    },
  ],
};
