import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
import {
  redirectResult,
  signInWithEmailAndPassword,
  signInWithGoogle,
  testUser,
} from "../Firebase/firebase";
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
  const [signingInWithEmail, setSigningInWithEmail] = useState(false);
  const [signingInWithGoogle, setSigningInWithGoogle] = useState(false);
  const [popUp, setPopUp] = useState<PopUpInfo>({
    showing: false,
    text: null,
    type: null,
  });

  const showPopUp = (type: "success" | "error", text: string) => {
    setPopUp({ showing: true, text: text, type: type });
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
    setSigningInWithEmail(true);
    setTimeout(() => {
      signInWithEmailAndPassword(
        userCredentials.email,
        userCredentials.password
      )
        .then((user) => {
          setUser(user);
          setSigningInWithEmail(false);
          showPopUp("success", user.name);
        })
        .catch((err) => {
          showPopUp("error", getSignInErrorMessage(err));
          setSigningInWithEmail(false);
        });
    }, 3000);
  };

  //sign-in with google
  const googleSignIn = async () => {
    setSigningInWithGoogle(true);
    try {
      const user = await signInWithGoogle();
      setUser(user);
      showPopUp("success", user.name);
    } catch (err: any) {
      showPopUp("error", getSignInErrorMessage(err));
    }
    setSigningInWithGoogle(false);
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setSigningInWithGoogle(true);
      await redirectResult()
        .then((res) => {
          if (res) {
            // setUser(res);
            setUser(testUser);
            showPopUp("success", res.name);
          }
        })
        .catch((err) => {
          showPopUp("error", getSignInErrorMessage(err));
        });
      setSigningInWithGoogle(false);
    };
    getRedirectResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex relative">
      {popUp.showing && <PopUp popUpInfo={popUp} />}
      <img
        src={
          "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="hand holding with icon"
        className="h-full object-cover w-1/2"
      />
      <div className="w-1/2 py-[4%] px-[5%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.primary} />
        <p className="font-semibold text-3xl mt-[7%] dark:text-white">
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
            isLoading={signingInWithEmail}
            text="Sign In"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={googleSignIn}
        >
          <img
            src={assets.google}
            alt="google icon"
            className={`w-5 h-5 ${signingInWithGoogle ? "spin" : ""}`}
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
