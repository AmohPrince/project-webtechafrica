import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets, LogoColor } from "../Assets/assets";
import LogoTab from "../Components/LogoTab";
import SignInOrSignUpButton from "../Components/SignInOrSignUpButton";
// import { useAuth } from "../Hooks/UseAuth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const SignUp = () => {
  const lastNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // const { setUser } = useAuth();
  //TODO Disable submit button when the inputs are empty.

  const handleSignUp = () => {
    console.log(firstNameRef.current?.value.length);
    console.log(lastNameRef.current?.value.length);
    console.log(emailRef.current?.value.length);
    console.log(passwordRef.current?.value.length);
    // const auth = getAuth(firebaseApp);
    // createUserWithEmailAndPassword(auth , emailRef.current!.value , passwordRef.current!.value).then(() => {

    // }).catch(error => console.log(error))
    // setUser({
    //   email: emailRef.current!.value,
    //   name: "From Sign Up",
    // });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  useEffect(() => {
    if (
      lastNameRef.current?.value.length === 0 ||
      firstNameRef.current?.value.length === 0 ||
      emailRef.current?.value.length === 0 ||
      passwordRef.current?.value.length === 0
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [
    lastNameRef.current?.value,
    firstNameRef.current?.value,
    emailRef.current?.value,
    passwordRef.current?.value,
  ]);

  return (
    <div className="h-screen flex">
      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <LogoTab logoColor={LogoColor.sign_up} />
        <p className="font-semibold text-3xl mt-[9%] dark:text-white">
          Create new account
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <div className="flex gap-x-2">
          <div>
            <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
              First Name
            </p>
            <input
              type="text"
              placeholder="Enter your first name"
              className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
              ref={firstNameRef}
            />
          </div>
          <div>
            <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
              Last Name
            </p>
            <input
              type="text"
              placeholder="Enter your last name"
              className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
              ref={lastNameRef}
            />
          </div>
        </div>
        <p className="text-sm font-medium mt-6 mb-2 dark:text-white">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          ref={emailRef}
        />
        <p className="text-sm font-medium mt-4 mb-2 dark:text-white">
          Password
        </p>
        <input
          type="password"
          className="py-2 px-4 border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          placeholder="Password"
          ref={passwordRef}
        />
        <SignInOrSignUpButton
          disabled={isButtonDisabled}
          icon={faGear}
          isLoading={isLoading}
          onClick={handleSignUp}
          text="Create Account"
        />
        <div className="flex justify-center mt-4 mb-6 cursor-pointer items-center">
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
