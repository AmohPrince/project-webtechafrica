import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
} from "firebase/auth";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
import { auth } from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";
import { PopUp, PopUpInfo, ToolTip } from "./SignUp";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [creatingUserWithEmail, setCreatingUserWithEmail] = useState(false);
  const [creatingUserWithGoogle, setCreatingUserWithGoogle] = useState(false);
  const [popUp, setPopUp] = useState<PopUpInfo>({
    showing: false,
    text: null,
    type: null,
  });

  const googleAuthProvider = new GoogleAuthProvider();

  const showPopUp = (type: "success" | "error", userName?: string) => {
    setPopUp({ showing: true, text: userName ? userName : "", type: type });
    setTimeout(() => {
      setPopUp({
        showing: false,
        text: null,
        type: null,
      });
      if (type === "success") {
        navigate("/dashboard");
      }
    }, 3000);
  };

  //sign-in with email and password
  const signInWithEmailAndPasswordWrapper: SubmitHandler<Inputs> = (
    userCredentials: Inputs
  ) => {
    setCreatingUserWithEmail(true);

    setTimeout(() => {
      signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      )
        .then((user) => {
          setUser({
            email: user.user.email!,
            name: user.user.displayName
              ? user.user.displayName!
              : user.user.email!,
            paymentMethodSelected: false,
            plan: "basic",
          });
          setCreatingUserWithEmail(false);
          showPopUp(
            "success",
            user.user.displayName ? user.user.displayName! : user.user.email!
          );
        })
        .catch((err) => {
          console.log(err);
          showPopUp("error", getSignInErrorMessage(err));
          setCreatingUserWithEmail(false);
        });
    }, 3000);
  };

  // TODO handle sign in errors for small screens

  //sign in with google
  const signInWithGoogle = () => {
    setCreatingUserWithGoogle(true);
    setTimeout(() => {
      if (window.innerWidth < 768) {
        // code for mobile devices
        signInWithRedirect(auth, googleAuthProvider)
          .then((result: UserCredential) => {
            const user = result.user;
            setUser({
              email: user.email ? user.email : "Undefined email",
              name: user.displayName ? user.displayName! : user.email!,
              paymentMethodSelected: false,
              plan: "basic",
              photoUrl: user.photoURL!,
            });
            setCreatingUserWithGoogle(false);
            showPopUp("success", user.displayName!);
          })
          .catch((err) => {
            setCreatingUserWithGoogle(false);
            showPopUp("error", getSignInErrorMessage(err));
          });
      } else {
        // code for desktop devices
        signInWithPopup(auth, googleAuthProvider)
          .then((result) => {
            const user = result.user;
            setUser({
              email: user.email ? user.email : "Undefined email",
              name: user.displayName ? user.displayName! : user.email!,
              paymentMethodSelected: false,
              plan: "basic",
              photoUrl: user.photoURL!,
            });
            setCreatingUserWithGoogle(false);
            showPopUp("success", user.displayName!);
          })
          .catch((err) => {
            setCreatingUserWithGoogle(false);
            showPopUp("error", getSignInErrorMessage(err));
          });
      }
    }, 3000);
  };

  return (
    <div className="h-screen flex relative">
      {popUp.showing && <PopUp popUpInfo={popUp} />}

      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.sign_in} />
        <p className="font-semibold text-3xl mt-[14%] dark:text-white">
          Welcome back
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <form onSubmit={handleSubmit(signInWithEmailAndPasswordWrapper)}>
          <p className="text-sm font-medium mt-6 mb-2 dark:text-white">Email</p>
          <div className="relative">
            {errors.email?.type === "required" && (
              <ToolTip text="Email is required" />
            )}
            {errors.email?.type === "pattern" && (
              <ToolTip text="Email is not valid" />
            )}
            <input
              type="email"
              placeholder="Enter your email"
              className="py-3 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
              {...register("email", {
                required: true,
                // eslint-disable-next-line no-useless-escape
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
          </div>
          <p className="text-sm font-medium mt-4 mb-2 dark:text-white">
            Password
          </p>
          <div className="relative">
            {errors.password && <ToolTip text="Password is required" />}
            <input
              type="password"
              className="py-3 px-4 border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center mt-5 mb-6">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2 dark:bg-transparent"
            />
            <p className="text-sm font-medium dark:text-white">
              Remember for 30 days
            </p>
            <p className="font-medium text-sm ml-auto dark:text-white">
              Forgot password
            </p>
          </div>
          <SignInOrSignUpButton
            disabled={Object.keys(errors).length !== 0}
            icon={faCircleNotch}
            isLoading={creatingUserWithEmail}
            text="Sign In"
            className="bg-bgSignInPage"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={signInWithGoogle}
        >
          <img
            src={assets.google}
            alt="google icon"
            className={`w-5 h-5 ${creatingUserWithGoogle ? "spin" : ""}`}
          />
          <p className="font-medium ml-2 text-gray-600">Sign in with google</p>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link
            className="cursor-pointer dark:text-white text-bgSignupPage font-semibold"
            to="/sign-up"
          >
            Sign up its free!
          </Link>
        </p>
      </div>
      <div className="w-1/2 h-full">
        <img
          src={
            "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="hand holding with icon"
          className="h-full object-cover w-full"
        />
      </div>
    </div>
  );
};

export default SignIn;

const getSignInErrorMessage = (err: any): string => {
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
      errorMessage = "An internal error has occurred. Please try again later.";
      break;
    default:
      errorMessage = err.message;
  }
  return errorMessage;
};
