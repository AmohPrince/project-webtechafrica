import { faCaretDown, faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
// import { useAuth } from "../Hooks/UseAuth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
} from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth, firebaseApp } from "../Firebase/firebase";
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
  const [isLoading, setIsLoading] = useState(false);

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

  const googleAuthProvider = new GoogleAuthProvider();

  const showPopUp = (type: "success" | "error", text: string) => {
    setPopUp({
      showing: true,
      text: text,
      type: type,
    });

    setTimeout(() => {
      //reset popup object
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
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const auth = getAuth(firebaseApp);
    setIsLoading(true);
    setTimeout(
      () =>
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((user) => {
            setUser({
              email: user.user.email!,
              name: user.user.displayName
                ? user.user.displayName!
                : user.user.email!,
              paymentMethodSelected: false,
              plan: "basic",
            });
            setIsLoading(false);
            showPopUp(
              "success",
              user.user.displayName ? user.user.email! : user.user.displayName!
            );
          })
          .catch((error) => {
            setIsLoading(false);
            showPopUp("error", error.message);
          }),
      3000
    );
  };

  //TODO signUpWithGoogle with google
  const logInWithGoogle = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (window.innerWidth < 768) {
        // code for mobile devices
        signInWithRedirect(auth, googleAuthProvider)
          .then((result: UserCredential) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            // console.log(token, "token");
            const user = result.user;
            // console.log(user, "user");
            console.log(result);
            setUser({
              email: user.email ? user.email : "Undefined email",
              name: user.displayName ? user.displayName! : user.email!,
              paymentMethodSelected: false,
              plan: "basic",
              photoUrl: user.photoURL!,
            });
            setIsLoading(false);
            showPopUp("success", user.displayName!);
          })
          .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            setIsLoading(false);
            showPopUp("error", errorMessage);
          });
      } else {
        // code for desktop devices
        signInWithPopup(auth, googleAuthProvider)
          .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            // console.log(token, "token");
            const user = result.user;
            // console.log(user, "user");
            setUser({
              email: user.email ? user.email : "Undefined email",
              name: user.displayName ? user.displayName! : user.email!,
              paymentMethodSelected: false,
              plan: "basic",
              photoUrl: user.photoURL!,
            });
            setIsLoading(false);
            showPopUp("success", user.displayName!);
          })
          .catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            setIsLoading(false);
            showPopUp("error", errorMessage);
          });
      }
    }, 3000);
  };

  return (
    <div className="h-screen flex relative z-0">
      {popUp.showing && <PopUp popUpInfo={popUp} />}
      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.sign_up} />
        <p className="font-semibold text-3xl mt-[9%] dark:text-white">
          Create new account
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-x-2">
            <div>
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
            <div>
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
            isLoading={isLoading}
            text="Create Account"
            className="bg-bgSignupPage"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={logInWithGoogle}
        >
          <img src={assets.google} alt="google icon" className="w-5 h-5" />
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
      <div className="w-1/2 h-full">
        <img
          src={
            "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="hand holding with icon"
          className="h-full object-cover w-full"
        />
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
