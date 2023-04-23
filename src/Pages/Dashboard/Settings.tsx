import { faPenFancy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuth } from "../../Hooks/UseAuth";

const Settings = () => {
  const { user } = useAuth();
  return (
    <div className="w-1/2 mx-auto mt-5 bg-white p-5 flex flex-col">
      {/* profile picture */}
      <div className="h-20 w-20 mx-auto relative">
        {user?.photoUrl ? (
          <img
            src={user?.photoUrl}
            alt={user.name + "`s profile picture"}
            className="z-0 h-full w-full"
          />
        ) : (
          <div className="p-5 bg-black h-full w-full rounded-full">
            <FontAwesomeIcon
              icon={faUser}
              className="z-0 h-full w-full text-white"
            />
          </div>
        )}
        <div className="rounded-full w-7 h-7 bg-white flex shadow-sm shadow-primaryOne justify-center items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
          <FontAwesomeIcon icon={faPenFancy} className="text-primaryOne" />
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
          <input
            type="text"
            className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          />
        </div>
        <div className="w-1/2">
          <p className="text-base font-medium">Last Name</p>
          <p className="text-xs font-medium text-gray-400 my-1">
            Enter your last name here
          </p>
          <input
            type="text"
            className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          />
        </div>
      </div>
      {/* email address and phone number */}
      <div className="flex mt-5 gap-x-2">
        <div className="w-1/2">
          <p className="text-base font-medium">Email address</p>
          <p className="text-xs font-medium text-gray-400 my-1">
            Enter your email address here
          </p>
          <input
            type="email"
            className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          />
        </div>
        <div className="w-1/2">
          <p className="text-base font-medium">Phone number</p>
          <p className="text-xs font-medium text-gray-400 my-1">
            Enter your phone number here
          </p>
          <input
            type="tel"
            className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          />
        </div>
      </div>
      <p className="text-xl font-bold mt-4">Account information</p>
      <div className="flex mt-5 gap-x-2">
        <div className="w-1/2">
          <p className="text-base font-medium">Password</p>
          <p className="text-xs font-medium text-gray-400 my-1">
            Enter new password here
          </p>
          <input
            type="password"
            className="bg-gray-50 h-10 w-full rounded-sm text-sm px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
