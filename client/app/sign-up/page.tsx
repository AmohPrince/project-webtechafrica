import { SubmitButton } from "@/components/buttons/SubmitButton";
import LogoTab from "@/components/LogoTab";
import { ToolTip } from "@/components/ToolTip";
import { Wave } from "@/components/Wave";
import {
  auth,
  createUserWithEmailAndPassword,
  getSignInErrorMessage,
  getSignUpErrorMessage,
} from "@/firebase/firebase";
import {
  addOrUpdateUserDataInDB,
  fetchUserDataFromDB,
} from "@/firebase/firestore";
import { useAuth } from "@/hooks/useAuth";
import { useGlobalData } from "@/hooks/useGlobalData";
import { assets, LogoColor } from "@/public/assets";
import { UserData } from "@/types/Global";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
};

const description =
  "Sign Up for a WebTech africa account! Your account helps us and you efficiently manage your websites and more! With your google account you can sign up with one click or email and password if you prefer.";

// const schema = {
//   "@context": "https://schema.org",
//   "@type": "WebPage",
//   name: "Sign Up",
//   description: description,
// };

{
  /* <NextHead
canonical="/sign-up"
description={description}
schemaJSON={schema}
title=""
twitterDescription={description}
/> */
}

export const metadata: Metadata = {
  description,
  title: "Sign up",
  twitter: {
    description,
  },
};

export const SignUp = () => {
  //local hooks
  const { countries, showNotification } = useGlobalData();
  const { setUserData } = useAuth();

  //react hooks
  const [creatingUserWithEmail, setCreatingUserWithEmail] = useState(false);
  const [creatingUserWithGoogle, setCreatingUserWithGoogle] = useState(false);

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const googleAuthProvider = new GoogleAuthProvider();

  //next-js
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");

  const signUpWithEmailAndPassword: SubmitHandler<Inputs> = async (
    data: Inputs
  ) => {
    try {
      setCreatingUserWithEmail(true);
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(data.email, data.password, {
          firstName: data.firstName,
          lastName: data.lastName,
        });

      const newUserData: UserData = {
        paymentMethodSelected: false,
        plan: "basic",
        phoneNumber: data.phoneNumber,
        country: data.country,
      };

      await addOrUpdateUserDataInDB(newUserData, userCredential.user.uid);
      showNotification(
        `Hello ${userCredential.user.displayName ?? "user"}!`,
        "success"
      );
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      const errorMessage = await getSignUpErrorMessage(error);
      showNotification(errorMessage, "error");
    } finally {
      setCreatingUserWithEmail(false);
    }
  };

  const signUpWithGoogle = async () => {
    setCreatingUserWithGoogle(true);
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
      setCreatingUserWithGoogle(false);
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
      setCreatingUserWithGoogle(false);
      router.push("/dashboard");
    }, 2000);
  };

  // useEffect(() => {
  //   const getRedirectResult = async () => {
  //     setCreatingUserWithGoogle(true);
  //     try {
  //       const userCredential: UserCredential | null = await redirectResult();
  //       if (userCredential) {
  //         showPopUp("success", userCredential.user.displayName ?? "user");
  //       }
  //     } catch (error) {
  //       const errorMessage = await getSignUpErrorMessage(error);
  //       showPopUp("error", errorMessage);
  //     }
  //     setCreatingUserWithGoogle(false);
  //   };
  //   getRedirectResult();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <main className="h-screen flex relative z-0">
      <Image
        src={
          "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt="hand holding with icon"
        className="hidden md:block h-full object-cover w-1/2"
        width={600}
        height={600}
      />
      <div className="w-full md:w-1/2 py-[10%] md:py-[2%] px-[5%] h-full dark:bg-magloBlack relative">
        <div className="flex justify-between items-center">
          <LogoTab logoColor={LogoColor.primary} />
          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              className="cursor-pointer dark:text-white text-primaryOne"
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
        </div>
        <p className="font-semibold text-3xl mt-[4%] dark:text-white">
          Create new account
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <form onSubmit={handleSubmit(signUpWithEmailAndPassword)}>
          {/* lastName and firstName  */}
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
          {/* email */}
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
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
              defaultValue={emailParam!}
            />
          </div>
          {/* country and phone number */}
          <div className="flex gap-x-2">
            <div className="w-1/2">
              <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
                Phone Number
              </p>
              <div className="relative">
                {errors.phoneNumber && <ToolTip text="Enter your first name" />}
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
                  {...register("phoneNumber")}
                />
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
                Country
              </p>
              <div className="relative">
                <select
                  className="text-sm py-2 px-4 border w-full rounded-sm"
                  {...register("country")}
                >
                  {Array.isArray(countries) &&
                    countries
                      .sort((countryA, countryB) =>
                        countryA.name.common.localeCompare(countryB.name.common)
                      )
                      .map((country) => (
                        <option
                          value={country.name.official}
                          key={country.name.common}
                        >
                          {country.name.common} ({country.cca2})
                        </option>
                      ))}
                </select>
              </div>
            </div>
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
          <SubmitButton
            disabled={Object.keys(errors).length !== 0}
            icon={faGear}
            isLoading={creatingUserWithEmail}
            text="Create Account"
            className="w-full"
          />
        </form>
        <div
          className="flex justify-center mt-4 mb-6 cursor-pointer items-center"
          onClick={signUpWithGoogle}
        >
          <Image
            src={assets.google}
            alt="google icon"
            className={`w-5 h-5 ${creatingUserWithGoogle ? "spin" : ""}`}
          />
          <p className="font-medium ml-2 text-gray-600">Sign up with google</p>
        </div>
      </div>
      <Wave />
    </main>
  );
};

export default SignUp;
