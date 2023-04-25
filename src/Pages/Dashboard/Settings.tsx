import { faCamera, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PasswordInput from "../../Components/Dashboard/Payments/Settings/PasswordInput";
import { SettingsInput } from "../../Components/Dashboard/Payments/Settings/SettingsInput";
import PrimaryButton from "../../Components/PrimaryButton";
import { useAuth } from "../../Hooks/UseAuth";

const Settings = () => {
  const { userCredential } = useAuth();
  const user = userCredential?.user;
  const [activeTab, setActiveTab] = useState<
    "personal-information" | "password"
  >("personal-information");

  console.log(userCredential);

  return (
    <div className="w-2/3 mx-auto mt-5 bg-white">
      <div className="flex font-semibold text-sm cursor-pointer">
        <p
          className={`py-4 w-1/2 text-center transition-colors ${
            activeTab === "personal-information"
              ? "text-white bg-primaryOne"
              : "text-primaryOne"
          }`}
          onClick={() => setActiveTab("personal-information")}
        >
          Personal Information
        </p>
        <p
          className={`py-4 w-1/2 text-center transition-colors ${
            activeTab === "password"
              ? "text-white bg-primaryOne"
              : "text-primaryOne"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Password
        </p>
      </div>
      {activeTab === "personal-information" ? (
        <div className="p-5 flex flex-col">
          {/* profile picture */}
          <div className="h-20 w-20 mx-auto relative">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName + "`s profile picture"}
                className="z-0 h-full w-full rounded-full"
              />
            ) : (
              <div className="p-5 bg-black h-full w-full rounded-full">
                <FontAwesomeIcon
                  icon={faUser}
                  className="z-0 h-full w-full text-white"
                />
              </div>
            )}
            <div className="rounded-full w-7 h-7 bg-white flex shadow-sm shadow-primaryOne justify-center items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3">
              <FontAwesomeIcon icon={faCamera} className="text-primaryOne" />
            </div>
          </div>
          <p className="text-xl font-bold">Personal information</p>
          {/* first name and last name  */}
          <div className="flex mt-5 gap-x-2">
            <div className="w-1/2">
              <p className="text-base font-medium">First Name</p>
              <p className="text-xs font-medium text-gray-400 my-1">
                Enter your first name here
              </p>
              <SettingsInput type="text" />
            </div>
            <div className="w-1/2">
              <p className="text-base font-medium">Last Name</p>
              <p className="text-xs font-medium text-gray-400 my-1">
                Enter your last name here
              </p>
              <SettingsInput type="text" />
            </div>
          </div>
          {/* email address and phone number */}
          <div className="flex mt-5 gap-x-2">
            <div className="w-1/2">
              <p className="text-base font-medium">Email address</p>
              <p className="text-xs font-medium text-gray-400 my-1">
                Enter your email address here
              </p>
              <SettingsInput type="email" />
            </div>
            <div className="w-1/2">
              <p className="text-base font-medium">Phone number</p>
              <p className="text-xs font-medium text-gray-400 my-1">
                Enter your phone number here
              </p>
              <SettingsInput type="tel" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-5">
            This account was created on {user?.createdAt}
          </p>
          <PrimaryButton text="Update details" className="ml-auto w-1/4 mt-5" />
        </div>
      ) : (
        <div className="p-5 w-1/2 mx-auto flex flex-col">
          <p className="text-xl font-bold mt-4">Password</p>
          <div className="w-full mt-4">
            <p className="text-base font-medium">Current password</p>
            <p className="text-xs font-medium text-gray-400 my-1">
              This is the current password of this account
            </p>
            <PasswordInput />
          </div>
          <div className="w-full mt-4">
            <p className="text-base font-medium">New password</p>
            <p className="text-xs font-medium text-gray-400 my-1">
              Enter your new password here
            </p>
            <PasswordInput />
          </div>
          <div className="w-full mt-4">
            <p className="text-base font-medium">Re-Enter your password here</p>
            <p className="text-xs font-medium text-gray-400 my-1">
              Re-Enter your new password here
            </p>
            <PasswordInput />
          </div>
          <PrimaryButton text="Reset Password" className="mt-4 ml-auto" />
        </div>
      )}
    </div>
  );
};

export default Settings;
