import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  getSignUpErrorMessage,
  redirectResult,
  signInWithGoogle,
} from "../Firebase/firebase";
import { ToolTip } from "../Components/SignInOrSignUp/ToolTip";
import { SubmitButton } from "../Components/SubmitButton";
import { UserData } from "../Types/Global";
import { UserCredential } from "firebase/auth";
import { addOrUpdateUserDataInDB } from "../Firebase/firestore";
import { Wave } from "../Components/NavBar/Wave";
import { useGlobalData } from "../Hooks/useGlobalData";
import { PopUpInfoType } from "../Components/SignInOrSignUp/PopUp";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  country: string;
};

export const SignUp = () => {
  const [creatingUserWithEmail, setCreatingUserWithEmail] = useState(false);
  const [creatingUserWithGoogle, setCreatingUserWithGoogle] = useState(false);
  const { countries } = useGlobalData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { showNotification } = useGlobalData();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get("email");

  const showPopUp = (type: PopUpInfoType, text: string) => {
    setCreatingUserWithEmail(false);
    setCreatingUserWithGoogle(false);
    showNotification(text, type);
    setTimeout(() => {
      if (type === "success") {
        navigate("/dashboard");
      }
    }, 3000);
  };

  //sign up with email and password
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
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (error) {
      const errorMessage = await getSignUpErrorMessage(error);
      showPopUp("error", errorMessage);
    }
  };

  //sign up with google
  const signUpWithGoogle = async () => {
    setCreatingUserWithGoogle(true);
    try {
      const userCredential = await signInWithGoogle();

      const newUserData: UserData = {
        paymentMethodSelected: false,
        plan: "basic",
      };

      await addOrUpdateUserDataInDB(newUserData, userCredential.user.uid);
      showPopUp("success", userCredential.user.displayName ?? "user");
    } catch (err: any) {
      const errorMessage = await getSignUpErrorMessage(err);
      showPopUp("error", errorMessage);
    }
  };

  useEffect(() => {
    const getRedirectResult = async () => {
      setCreatingUserWithGoogle(true);
      try {
        const userCredential: UserCredential | null = await redirectResult();
        if (userCredential) {
          showPopUp("success", userCredential.user.displayName ?? "user");
        }
      } catch (error) {
        const errorMessage = await getSignUpErrorMessage(error);
        showPopUp("error", errorMessage);
      }
      setCreatingUserWithGoogle(false);
    };
    getRedirectResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen flex relative z-0">
      <img
        src={
          "https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt="hand holding with icon"
        className="hidden sm:block h-full object-cover w-1/2"
      />
      <div className="w-full sm:w-1/2 py-[10%] sm:py-[2%] px-[5%] h-full dark:bg-magloBlack relative">
        <div className="flex justify-between items-center">
          <LogoTab logoColor={LogoColor.primary} />
          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              className="cursor-pointer dark:text-white text-primaryOne"
              to="/sign-in"
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
          <img
            src={assets.google}
            alt="google icon"
            className={`w-5 h-5 ${creatingUserWithGoogle ? "spin" : ""}`}
          />
          <p className="font-medium ml-2 text-gray-600">Sign up with google</p>
        </div>
      </div>
      <Wave />
    </div>
  );
};
