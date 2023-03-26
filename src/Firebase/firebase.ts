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
  createUserWithEmailAndPassword as createUserFnFromFirebase,
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

export const signInWithGoogle = (): Promise<User> => {
  if (window.innerWidth < 768) {
    return signInWithRedirect(auth, googleAuthProvider)
      .then((result: UserCredential) => {
        const newUser: User = {
          id: result.user.uid,
          email: result.user.email!,
          name: result.user.displayName ?? result.user.email!,
          paymentMethodSelected: false,
          plan: "basic",
          photoUrl: result.user.photoURL!,
        };
        return newUser;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const newUser: User = {
          id: result.user.uid,
          email: result.user.email!,
          name: result.user.displayName ?? result.user.email!,
          paymentMethodSelected: false,
          plan: "basic",
          photoUrl: result.user.photoURL!,
        };
        addNewUserToDB(newUser);
        return newUser;
      })
      .catch((error) => {
        throw error;
      });
  }
};

//TODO fetch the user from the db
export const signInWithEmailAndPassword = (
  email: string,
  password: string
): Promise<User> => {
  return signInUserFnFromFirebase(auth, email, password)
    .then((user) => {
      return {
        id: user.user.uid,
        email: user.user.email!,
        name: user.user.displayName ?? user.user.email!,
        paymentMethodSelected: false,
        plan: "basic",
      };
    })
    .catch((err) => {
      throw err;
    });
};

export const redirectResult = (): Promise<User | null> => {
  return getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const newUser: User = {
          id: result.user.uid,
          email: result.user.email!,
          name: result.user.displayName ?? result.user.email!,
          paymentMethodSelected: false,
          plan: "basic",
          photoUrl: result.user.photoURL!,
        };
        addNewUserToDB(newUser);
        return newUser;
      }
      return null;
    })
    .catch((error) => {
      throw error;
    });
};

/**
 * a function to create a user with email and password
 * @param email the email of the new user
 * @param password the string representation of the user`s password
 * @param name a name object containing a firstName and lastName property
 * @returns a promise of a user object
 */
export const createUserWithEmailAndPassword = (
  email: string,
  password: string,
  name: { firstName: string; lastName: string }
): Promise<User> => {
  return createUserFnFromFirebase(auth, email, password)
    .then(async (user) => {
      const newUser: User = {
        id: user.user.uid,
        email: user.user.email!,
        name: user.user.displayName ?? name.firstName + " " + name.lastName,
        paymentMethodSelected: false,
        plan: "basic",
      };
      await addNewUserToDB(newUser);
      return newUser;
    })
    .catch((error) => {
      throw error;
    });
};

const addNewUserToDB = async (user: User) => {
  const usersRef = doc(db, "users", user.id);
  await setDoc(usersRef, user, {
    merge: true,
  });
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
