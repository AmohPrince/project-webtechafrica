import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  getSignUpErrorMessage,
  redirectResult,
  signInWithGoogle,
} from "../Firebase/firebase";
import { useAuth } from "../Hooks/UseAuth";
import { PopUpInfo, PopUp } from "../Components/SignInOrSignUp/PopUp";
import { ToolTip } from "../Components/SignInOrSignUp/ToolTip";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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

  const { setUserCredential } = useAuth();
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
          .then((userCredential) => {
            setUserCredential(userCredential);
            setCreatingUserWithEmail(false);
            showPopUp("success", userCredential.user.displayName ?? "user");
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
      const userCredential = await signInWithGoogle();
      setUserCredential(userCredential);
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (err: any) {
      showPopUp("error", getSignUpErrorMessage(err.message));
    }
    setCreatingUserWithGoogle(false);
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setCreatingUserWithGoogle(true);
      await redirectResult()
        .then((userCredential) => {
          if (userCredential) {
            setUserCredential(userCredential);
            showPopUp("success", userCredential.user.displayName ?? "user");
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
