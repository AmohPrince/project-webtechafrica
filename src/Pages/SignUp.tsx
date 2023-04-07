import { faCaretDown, faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createUserWithEmailAndPassword,
  redirectResult,
  signInWithGoogle,
  testUser,
} from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type PopUpInfo = {
  showing: boolean;
  text: null | string;
  type: null | "success" | "error";
};

export const SignUp = () => {
  const [creatingUserWithEmail, setCreatingUserWithEmail] = useState(false);
  const [creatingUserWithGoogle, setCreatingUserWithGoogle] = useState(false);

  const [popUp, setPopUp] = useState<PopUpInfo>({
    showing: false,
    text: null,
    type: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { setUser } = useAuth();
  const redirect = useNavigate();

  const showPopUp = (type: "success" | "error", text: string) => {
    setPopUp({
      showing: true,
      text: text,
      type: type,
    });

    setTimeout(() => {
      setPopUp({
        showing: false,
        text: null,
        type: null,
      });
      if (type === "success") {
        redirect("/dashboard");
      }
    }, 3000);
  };

  //sign up with email and password
  const signUpWithEmailAndPassword: SubmitHandler<Inputs> = (data: Inputs) => {
    setCreatingUserWithEmail(true);
    setTimeout(
      () =>
        createUserWithEmailAndPassword(data.email, data.password, {
          firstName: data.firstName,
          lastName: data.lastName,
        })
          .then((user) => {
            setUser(user);
            setCreatingUserWithEmail(false);
            showPopUp("success", user.name);
          })
          .catch((error) => {
            setCreatingUserWithEmail(false);
            showPopUp("error", getSignUpErrorMessage(error));
          }),
      3000
    );
  };

  const signUpWithGoogle = async () => {
    setCreatingUserWithGoogle(true);
    try {
      const user = await signInWithGoogle(true);
      setUser(user);
      showPopUp("success", user.name);
    } catch (err: any) {
      showPopUp("error", getSignUpErrorMessage(err.message));
    }
    setCreatingUserWithGoogle(false);
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setCreatingUserWithGoogle(true);

      await redirectResult()
        .then((res) => {
          if (res) {
            // setUser(res);
            setUser(testUser);
            showPopUp("success", res.name);
          }
        })
        .catch((err) => {
          showPopUp("error", getSignUpErrorMessage(err));
        });
      setCreatingUserWithGoogle(false);
    };
    getRedirectResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex relative z-0">
      {popUp.showing && <PopUp popUpInfo={popUp} />}
      <img
        src={
          "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt="hand holding with icon"
        className="hidden sm:block h-full object-cover w-1/2"
      />
      <div className="w-full sm:w-1/2 py-[10%] sm:py-[4%] px-[5%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.primary} />
        <p className="font-semibold text-3xl mt-[9%] dark:text-white">
          Create new account
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <form onSubmit={handleSubmit(signUpWithEmailAndPassword)}>
          <div className="flex gap-x-2">
            <div className="w-1/2">
              <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
                First Name
              </p>
              <div className="relative">
                {errors.firstName && <ToolTip text="Enter your first name" />}
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
                  {...register("firstName", { required: true })}
                />
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
                Last Name
              </p>
              <div className="relative">
                {errors.lastName && <ToolTip text="Enter your last name" />}
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
                  {...register("lastName", { required: true })}
                />
              </div>
            </div>
          </div>
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
              className={`py-2 px-4 text-sm border w-full smooth dark:bg-transparent dark:text-white focus:outline-none`}
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
              className={`py-2 px-4 border w-full dark:bg-transparent dark:text-white focus:outline-none`}
              placeholder="Password"
              {...register("password", {
                required: true,
                // pattern: /^[\u4e00-\u9fa5]{2,9}$/,
              })}
            />
          </div>
          <SignInOrSignUpButton
            disabled={Object.keys(errors).length !== 0}
            icon={faGear}
            isLoading={creatingUserWithEmail}
            text="Create Account"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={signUpWithGoogle}
        >
          <img
            src={assets.google}
            alt="google icon"
            className={`w-5 h-5 ${creatingUserWithGoogle ? "spin" : ""}`}
          />
          <p className="font-medium ml-2 text-gray-600">Sign up with google</p>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link
            className="cursor-pointer dark:text-white text-bgSignInPage"
            to="/sign-in"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export const ToolTip = ({ text }: { text: string }) => {
  return (
    <div className="absolute -top-2 p-1 left-1/2 -translate-x-1/2 -translate-y-full text-center rounded-sm text-white text-xs bg-bgSignupPage">
      <p>{text}</p>
      <FontAwesomeIcon
        icon={faCaretDown}
        className="absolute left-1/2 -translate-x-1/2 text-bgSignupPage"
      />
    </div>
  );
};

export const PopUp = ({ popUpInfo }: { popUpInfo: PopUpInfo }) => {
  return (
    <div
      className={`absolute top-4 left-1/2 bg-white rounded-sm py-2 px-3 shadow-sm text-sm -translate-x-1/2 overflow-x-hidden ${
        popUpInfo.type === "success"
          ? "border-b shadow-green-500"
          : "border shadow-red-500"
      }`}
    >
      <p>
        {popUpInfo.type === "success"
          ? "Hello " + popUpInfo.text + "!"
          : popUpInfo.text}
      </p>
      <div className="h-[2px] transition" />
    </div>
  );
};

export const getSignUpErrorMessage = (error: any): string => {
  if (error.code === "auth/account-exists-with-different-credential") {
    return "An account with this email already exists. Try signing in with a different method.";
  } else if (error.code === "auth/popup-closed-by-user") {
    return "The sign-up popup was closed before authentication could complete. Please try again.";
  } else if (error.code === "auth/cancelled-popup-request") {
    return "The sign-up popup was cancelled before authentication could complete. Please try again.";
  } else if (error.code === "auth/email-already-in-use") {
    return "An account with this email already exists. Please use a different email address.";
  } else if (error.code === "auth/invalid-email") {
    return "The email address you entered is not valid. Please check your email and try again.";
  } else if (error.code === "auth/weak-password") {
    return "Your password is too weak. Please choose a stronger password.";
  } else {
    return "An error occurred. Please try again later. " + error.code;
  }
};
