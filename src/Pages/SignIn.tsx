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
  const [isLoading, setIsLoading] = useState(false);
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
  const onSubmit: SubmitHandler<Inputs> = (userCredentials: Inputs) => {
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

    setIsLoading(true);

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
          setIsLoading(false);
          showPopUp(
            "success",
            user.user.displayName ? user.user.displayName! : user.user.email!
          );
        })
        .catch((err) => {
          console.log(err);
          showPopUp("error", err.message);
          setIsLoading(false);
        });
    }, 3000);
  };

  //TODO handle sign-in errors

  const signInWithGoogle = () => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
            isLoading={isLoading}
            text="Sign In"
            className="bg-bgSignInPage"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={signInWithGoogle}
        >
          <img src={assets.google} alt="google icon" className="w-5 h-5" />
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
