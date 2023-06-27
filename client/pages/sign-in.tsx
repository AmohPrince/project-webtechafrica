import LogoTab from "@/components/LogoTab";
import { SubmitButton } from "@/components/buttons/SubmitButton";
import { ToolTip } from "@/components/ToolTip";
import { Wave } from "@/components/Wave";
import { getSignInErrorMessage, redirectResult } from "@/firebase/firebase";
import {
  fetchUserDataFromDB,
  addOrUpdateUserDataInDB,
} from "@/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import { LogoColor, assets } from "@/public/assets";
import { UserData } from "@/types/Global";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextHead } from "@/components/NextHead";

type Inputs = {
  email: string;
  password: string;
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sign In",
  description:
    "Sign in to your WebTech Africa account. Your can then access your dashboard and create websites! You can sign in either by email or your google account",
};

const SignIn = () => {
  //local hooks
  const { setUserData } = useAuth();
  const { showNotification } = useGlobalData();

  //next js hooks
  const router = useRouter();
  const { query } = router;
  const sourceParam = query.source;

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //react hooks
  const rememberFor30DaysCheckBox = useRef<HTMLInputElement>(null);
  const [signingInWithEmail, setSigningInWithEmail] = useState(false);
  const [signingInWithGoogle, setSigningInWithGoogle] = useState(false);

  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();

  //sign-in with email and password
  const signInWithEmailAndPasswordWrapper: SubmitHandler<Inputs> = async (
    inputs: Inputs
  ) => {
    setSigningInWithEmail(true);
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      const userData = await fetchUserDataFromDB(userCredential.user.uid);
      setUserData(userData);
      showNotification(
        `Hello ${userCredential.user.displayName ?? "user"}!`,
        "success"
      );
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      const signInErrorMessage = await getSignInErrorMessage(error);
      showNotification(signInErrorMessage, "error");
      setSigningInWithEmail(false);
    }
  };

  //sign-in with google
  const googleSignIn = async () => {
    setSigningInWithGoogle(true);

    let userCredential: UserCredential | null;

    try {
      userCredential = await signInWithPopup(auth, googleAuthProvider);
      showNotification(
        `Hello ${userCredential.user.displayName ?? "user"}!`,
        "success"
      );
    } catch (err: any) {
      const signInErrorMessage = await getSignInErrorMessage(err);
      showNotification(signInErrorMessage, "error");
      setSigningInWithGoogle(false);
      return;
    }

    try {
      const userData = await fetchUserDataFromDB(userCredential!.user.uid);
      setUserData(userData);
    } catch (error) {
      const newUserData: UserData = {
        paymentMethodSelected: false,
        plan: "basic",
      };
      await addOrUpdateUserDataInDB(newUserData, userCredential!.user.uid);
    }

    setTimeout(() => {
      setSigningInWithGoogle(false);
      router.push("/dashboard");
    }, 2000);
  };

  // useEffect(() => {
  //   const getRedirectResult = async () => {
  //     setSigningInWithGoogle(true);
  //     try {
  //       const userCredential: UserCredential | null = await redirectResult();
  //       if (userCredential) {
  //         showNotification(
  //           `Hello ${userCredential.user.displayName ?? "user"}!`,
  //           "success"
  //         );
  //         router.push("/dashboard");
  //       }
  //     } catch (error) {
  //       const signInErrorMessage = await getSignInErrorMessage(error);
  //       showNotification(signInErrorMessage, "error");
  //     }
  //     setSigningInWithGoogle(false);
  //   };
  //   getRedirectResult();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <NextHead
        canonical="https://www.webtechafrica.com/sign-in"
        description="Sign in to your WebTech Africa account. Your can then access your dashboard and create websites! You can sign in either by email or your google account"
        schemaJSON={schema}
        title="Sign In"
        twitterDescription="Sign in to your WebTech Africa account. Your can then access your dashboard and create websites! You can sign in either by email or your google account"
      />
      <main className="h-screen flex relative">
        <Image
          src={
            "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="hand holding with icon"
          className="h-full object-cover hidden md:block w-1/2"
          width={1260}
          height={750}
        />
        <div className="w-full md:w-1/2 py-[10%] md:py-[4%] px-[5%] h-full dark:bg-magloBlack relative">
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
            <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
              Email
            </p>
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
                href="/forgot-password"
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
            <Image
              src={assets.google}
              alt="google icon"
              className={`w-5 h-5 ${signingInWithGoogle ? "spin" : ""}`}
            />
            <p className="font-medium ml-2 text-gray-600">
              Sign in with google
            </p>
          </div>
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <Link
              className="cursor-pointer dark:text-white text-bgSignupPage font-semibold"
              href="/sign-up"
            >
              Sign up its free!
            </Link>
          </p>
        </div>
        <Wave />
      </main>
    </>
  );
};

export default SignIn;
