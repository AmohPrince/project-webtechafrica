import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import { PopUpInfo, PopUp } from "../Components/SignInOrSignUp/PopUp";
import { ToolTip } from "../Components/SignInOrSignUp/ToolTip";
import { SubmitButton } from "../Components/SubmitButton";
import {
  getSignInErrorMessage,
  redirectResult,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/firebase";
import { LOCAL_STORAGE_KEYS } from "../Util/Utilities";

type Inputs = {
  email: string;
  password: string;
};

//Todo learn how to use different identity providers in firebase

const SignIn = () => {
  // const { setUserCredential } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // const passwordRef = useRef<HTMLInputElement>(null);
  const rememberFor30DaysCheckBox = useRef<HTMLInputElement>(null);

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
      if (type === "success") {
        setPopUp({
          showing: false,
          text: null,
          type: null,
        });
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
        .then((userCredential) => {
          if (rememberFor30DaysCheckBox.current?.checked) {
            localStorage.setItem(
              LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE,
              new Date().toISOString()
            );
          }
          setSigningInWithEmail(false);
          showPopUp("success", userCredential.user.displayName ?? "user");
        })
        .catch((err) => {
          showPopUp("error", getSignInErrorMessage(err));
          // if (err.code === "auth/wrong-password") {
          //   const passwordRefStyle = passwordRef.current?.style;
          //   passwordRefStyle?.setProperty("border", "red");
          // }
          setSigningInWithEmail(false);
        });
    }, 3000);
  };

  //sign-in with google
  const googleSignIn = async () => {
    setSigningInWithGoogle(true);
    try {
      const userCredential = await signInWithGoogle();
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE,
        new Date().toISOString()
      );
      //TODO fetch user data then redirect
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (err: any) {
      showPopUp("error", getSignInErrorMessage(err));
    }
    setSigningInWithGoogle(false);
  };

  const handlePasswordReset = async () => {
    // if (errors.email) {
    //   setShowForgotPasswordEmailError(true);
    // } else {
    //   setShowForgotPasswordEmailError(false);
    //   await resetPassword(emailRef!.current!.value);
    // }
    console.log("resetting password!!");
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setSigningInWithGoogle(true);
      await redirectResult()
        .then((userCredential) => {
          if (userCredential) {
            // setUserCredential(userCredential);
            localStorage.setItem(
              LOCAL_STORAGE_KEYS.LAST_SIGN_IN_DATE,
              new Date().toISOString()
            );
            showPopUp("success", userCredential.user.displayName ?? "user");
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
      <img
        src={
          "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="hand holding with icon"
        className="h-full object-cover hidden sm:block w-1/2"
      />
      <div className="w-full sm:w-1/2 py-[10%] sm:py-[4%] px-[5%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.primary} />

        {popUp.showing ? (
          <PopUp popUpInfo={popUp} />
        ) : (
          <>
            <p className="font-semibold text-3xl mt-[7%] dark:text-white">
              Welcome back
            </p>
            <p className="font-normal text-base text-gray-400">
              Welcome back please enter your details
            </p>
          </>
        )}
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
              // ref={passwordRef}
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
            <p
              className="font-medium text-sm ml-auto dark:text-white cursor-pointer"
              onClick={handlePasswordReset}
            >
              Forgot password
            </p>
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
    </div>
  );
};

export default SignIn;
