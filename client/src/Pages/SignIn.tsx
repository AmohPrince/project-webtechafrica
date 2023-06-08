import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { UserCredential } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import { Wave } from "../Components/NavBar/Wave";
import { PopUp } from "../Components/SignInOrSignUp/PopUp";
import { ToolTip } from "../Components/SignInOrSignUp/ToolTip";
import { SubmitButton } from "../Components/SubmitButton";
import {
  getSignInErrorMessage,
  redirectResult,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/firebase";
import {
  addOrUpdateUserDataInDB,
  fetchUserDataFromDB,
} from "../Firebase/firestore";
import { useAuth } from "../Hooks/UseAuth";
import { useGlobalData } from "../Hooks/useGlobalData";
import { UserData } from "../Types/Global";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { setUserData } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sourceParam = searchParams.get("source");

  const rememberFor30DaysCheckBox = useRef<HTMLInputElement>(null);

  const [signingInWithEmail, setSigningInWithEmail] = useState(false);
  const [signingInWithGoogle, setSigningInWithGoogle] = useState(false);

  const { popUpInfo, setPopUpInfo } = useGlobalData();

  const showPopUp = (type: "success" | "error", text: string) => {
    setSigningInWithEmail(false);
    setSigningInWithGoogle(false);
    setPopUpInfo({ showing: true, text: text, type: type });
    setTimeout(() => {
      if (type === "success") {
        setPopUpInfo({
          showing: false,
          text: null,
          type: null,
        });
        navigate("/dashboard");
      }
    }, 3000);
  };

  //sign-in with email and password
  const signInWithEmailAndPasswordWrapper: SubmitHandler<Inputs> = async (
    inputs: Inputs
  ) => {
    setSigningInWithEmail(true);
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      const userData = await fetchUserDataFromDB(userCredential.user.uid);
      setUserData(userData);
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (error) {
      const signInErrorMessage = await getSignInErrorMessage(error);
      showPopUp("error", signInErrorMessage);
    }
    setSigningInWithEmail(false);
  };

  //sign-in with google
  const googleSignIn = async () => {
    setSigningInWithGoogle(true);
    try {
      const userCredential = await signInWithGoogle();
      try {
        const userData = await fetchUserDataFromDB(userCredential.user.uid);
        setUserData(userData);
      } catch (error) {
        // if this fetchUserDataFromDB fails it implies no user so we create one
        const newUserData: UserData = {
          paymentMethodSelected: false,
          plan: "basic",
        };
        await addOrUpdateUserDataInDB(newUserData, userCredential.user.uid);
      }
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (err: any) {
      const signInErrorMessage = await getSignInErrorMessage(err);
      showPopUp("error", signInErrorMessage);
    }
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setSigningInWithGoogle(true);
      try {
        const userCredential: UserCredential | null = await redirectResult();
        if (userCredential) {
          showPopUp("success", userCredential.user.displayName ?? "user");
        }
      } catch (error) {
        const signInErrorMessage = await getSignInErrorMessage(error);
        showPopUp("error", signInErrorMessage);
      }
      setSigningInWithGoogle(false);
    };
    getRedirectResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex relative">
      {popUpInfo.showing && (
        <PopUp popUpInfo={popUpInfo} setPopUp={setPopUpInfo} />
      )}
      <img
        src={
          "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="hand holding with icon"
        className="h-full object-cover hidden sm:block w-1/2"
      />
      <div className="w-full sm:w-1/2 py-[10%] sm:py-[4%] px-[5%] h-full dark:bg-magloBlack relative">
        <LogoTab logoColor={LogoColor.primary} />
        <p className="font-semibold text-3xl mt-[4%] dark:text-white">
          {sourceParam === "get-started" ? "Welcome!" : "Welcome back"}
        </p>
        <p className="font-normal text-base text-gray-400">
          {sourceParam === "get-started"
            ? "How about we sign you in first."
            : "Welcome back please enter your details"}
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
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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
              ref={rememberFor30DaysCheckBox}
            />
            <p className="text-sm font-medium dark:text-white">
              Remember for 30 days
            </p>
            <Link
              to="/sign-in/forgot-password"
              className="font-medium text-sm ml-auto dark:text-white cursor-pointer"
            >
              Forgot password
            </Link>
          </div>
          <SubmitButton
            disabled={Object.keys(errors).length !== 0}
            icon={faCircleNotch}
            isLoading={signingInWithEmail}
            text="Sign In"
            className="w-full"
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
      <Wave />
    </div>
  );
};

export default SignIn;
