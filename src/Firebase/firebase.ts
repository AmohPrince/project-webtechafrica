import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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

// const user: User = {
//   name: "Test User",
//   email: userCredentials.email,
//   plan: "Basic",
//   paymentMethodSelected: false,
//   activeWebsites: [
//     {
//       websiteUrl: "https://testuser.webtechafrica.com/",
//       hasShop: true,
//       shopUrl: "https://testuser.webtechafrica.com/shop",
//       websiteScreenShot:
//         "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
//       plan: "Basic",
//     },
//   ],
//   devWebsites: [
//     {
//       previewUrl: "https://testuser.webtechafrica.com/",
//       hasShop: true,
//       shopUrl: "https://testuser.webtechafrica.com/shop",
//       websiteScreenShot:
//         "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
//     },
//     {
//       previewUrl: "https://testuser.webtechafrica.com/",
//       hasShop: false,
//       websiteScreenShot:
//         "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg",
//     },
//   ],
//   pendingVerificationWebsites: [
//     {
//       hasShop: true,
//       websiteUrl: "https://website.com",
//     },
//   ],
//   cards: [
//     {
//       endsIn: "5353",
//       expiryDate: "04/2023",
//       type: "MasterCard",
//     },
//   ],
// };

// setUser(user);
