import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import Logo from "../Components/Logo";
import { useAuth } from "../Hooks/UseAuth";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const thirtyDaysCheckboxRef = useRef<HTMLInputElement>(null);

  const { setUser } = useAuth();

  const handleLogin = () => {
    console.log(emailRef.current?.value);
    console.log(passwordRef.current?.value);
    console.log(thirtyDaysCheckboxRef.current?.checked);

    console.log(setUser);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/2 py-[4%] px-[10%] h-full dark:bg-magloBlack">
        <Logo page="sign-in" />
        <p className="font-semibold text-3xl mt-[14%] dark:text-white">
          Welcome back
        </p>
        <p className="font-normal text-base text-gray-400">
          Welcome back please enter your details
        </p>
        <p className="text-sm font-medium mt-6 mb-2 dark:text-white">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-3 px-4 text-sm border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          ref={emailRef}
        />
        <p className="text-sm font-medium mt-4 mb-2 dark:text-white">
          Password
        </p>
        <input
          type="password"
          className="py-3 px-4 border w-full rounded-sm dark:bg-transparent dark:text-white focus:outline-none"
          placeholder="Password"
          ref={passwordRef}
        />
        <div className="flex items-center mt-5 mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 mr-2 dark:bg-transparent"
            ref={thirtyDaysCheckboxRef}
          />
          <p className="text-sm font-medium dark:text-white">
            Remember for 30 days
          </p>
          <p className="font-medium text-sm ml-auto dark:text-white">
            Forgot password
          </p>
        </div>
        <button
          className="text-sm font-semibold bg-bgSignupPage text-white w-full px-5 py-3 rounded-lg"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <div className="flex justify-center mt-4 mb-6 cursor-pointer items-center">
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
