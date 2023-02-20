import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/assets";
import DashBoardTitle from "../Components/DashBoardTitle";
import PrimaryButton from "../Components/PrimaryButton";
import { useAuth } from "../Hooks/UseAuth";

const MyPlan = () => {
  const { user } = useAuth();
  return (
    <div className="mt-5">
      <DashBoardTitle h1="My Plan" sub="Your current plan" />
      <div className="bg-white rounded-xl shadow-sm mt-7">
        <p className="font-bold text-lg border-b px-7 py-3">Plan & Pricing</p>
        <div className="flex py-8 px-7">
          <div className="shadow-md py-6 px-6 w-1/3 rounded-xl">
            <p className="font-bold text-lg">Basic</p>
            <p className="font-medium text-sm">Perfect for beginners</p>
            <p className="text-xl font-semibold mt-3 mb-4">
              kes.899/<span className="text-gray-400 text-sm">monthly</span>{" "}
            </p>
            {user?.plan === "Basic" ? (
              <button className="w-full py-3 text-center text-gray-500 bg-gray-200 rounded-md text-sm font-semibold cursor-not-allowed">
                Current plan
              </button>
            ) : (
              <PrimaryButton text="Get Started" />
            )}
            <div className="mt-5">
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Unlimited customer support
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Hosting
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Custom domain name
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Complete website design and development
              </p>
            </div>
          </div>
          <div className="shadow-md py-6 px-6 w-1/3 ml-5 border border-primaryOne rounded-xl">
            <p className="font-bold text-lg">Advanced</p>
            <p className="font-medium text-sm">
              Perfect for professionals and business
            </p>
            <p className="text-xl font-semibold mt-3 mb-4">
              kes.5700/<span className="text-gray-400 text-sm">monthly</span>{" "}
            </p>
            {user?.plan === "Premium" ? (
              <button className="w-full py-3 text-center text-gray-500 bg-gray-200 rounded-md text-sm font-semibold">
                Current plan
              </button>
            ) : (
              <PrimaryButton text="Get Started" className="w-full" />
            )}
            <div className="mt-5">
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Unlimited customer support
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Hosting
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Custom domain name
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Complete website design and development
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Social media management
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Custom Ads management
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Fully designed and deployed web shop
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Payments covered!
              </p>
              <p className="text-sm flex items-center">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-2"
                >
                  <path
                    d="M5.33356 9.13333L13.2002 1.26666C13.4447 1.02222 13.7558 0.899994 14.1336 0.899994C14.5113 0.899994 14.8224 1.02222 15.0669 1.26666C15.3113 1.5111 15.4336 1.82222 15.4336 2.19999C15.4336 2.57777 15.3113 2.88888 15.0669 3.13333L6.26689 11.9333C6.00023 12.2 5.68912 12.3333 5.33356 12.3333C4.978 12.3333 4.66689 12.2 4.40023 11.9333L0.933561 8.46666C0.689116 8.22222 0.566895 7.9111 0.566895 7.53333C0.566895 7.15555 0.689116 6.84444 0.933561 6.59999C1.17801 6.35555 1.48912 6.23333 1.86689 6.23333C2.24467 6.23333 2.55578 6.35555 2.80023 6.59999L5.33356 9.13333Z"
                    fill="#644AFF"
                  />
                </svg>
                Sell products online
              </p>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-white rounded-xl py-3 px-6">
              <p className="font-bold border-b text-sm py-3">Recent Payment</p>
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-500">Plan Subscribed</p>
                <p className="font-semibold">{user?.plan}</p>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-500">Payment Date</p>
                <p className="font-semibold">06/01/2023</p>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-500">Time</p>
                <p className="font-semibold">19:00</p>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-500">Card used</p>
                <p className="font-semibold">Debit xxxx xxxx 2679</p>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-500">Total</p>
                <p className="font-semibold">Ksh 4,700</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3">
              <p className="font-bold border-b text-sm py-3 text-center">
                Next Payment
              </p>
              <div className="flex items-center w-max mx-auto my-4">
                <img
                  src={assets.Calendar}
                  alt="Calendar"
                  className="mr-4 w-6 h-6"
                />
                <div>
                  <p className="text-gray-500 font-semibold text-sm">
                    Billing date
                  </p>
                  <p className="font-semibold">07/04/2023</p>
                </div>
              </div>
              <Link className="justify-center flex" to="/dashboard/payment">
                <PrimaryButton text="Manage Payment" className="mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
