import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import Logo from "../Components/Logo";
import { useAuth } from "../Hooks/UseAuth";

export const SignUp = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { setUser } = useAuth();

  const handleSignIn = () => {
    console.log(fullNameRef.current?.value);
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    console.log(setUser);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <Logo page="sign-up" />
        <p className="font-semibold text-3xl mt-[9%] dark:text-white">
          Create new account
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <p className="text-sm font-medium mt-6 mb-2 dark:text-white">
          Full name
        </p>
        <input
          type="text"
          placeholder="Enter your full names"
          className="py-2 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          ref={fullNameRef}
        />
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
        <button
          className="text-sm font-semibold bg-bgSignInPage w-full px-5 py-3 rounded-lg mt-6"
          onClick={handleSignIn}
        >
          Create account
        </button>
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
