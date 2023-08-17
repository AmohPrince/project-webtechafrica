import { SubmitButton } from "@/components/buttons/SubmitButton";
import { PasswordEditor } from "@/components/dashboard/settings/PasswordEditor";
import { SettingsInput } from "@/components/dashboard/settings/SettingsInput";
import { ToolTip } from "@/components/ToolTip";
import {
  updateUserDisplayName,
  updateUserEmailAddress,
} from "@/firebase/firebase";
import { addOrUpdateUserDataInDB } from "@/firebase/firestore";
import { uploadUserProfilePicture } from "@/firebase/storage";
import { useAuth } from "@/hooks/useAuth";
import { faCamera, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, updateCurrentUser } from "firebase/auth";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../layout";

export type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const Settings = () => {
  const { user, userData } = useAuth();
  const fileInput = useRef<HTMLInputElement>(null);
  const profilePictureRef = useRef<HTMLImageElement>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const [activeTab, setActiveTab] = useState<
    "personal-information" | "password"
  >("personal-information");
  const [isUploadingUserProfilePic, setIsUploadingUserProfilePic] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  //This function is responsible for updating the user`s profile picture
  const handleChangingUserProfilePicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsUploadingUserProfilePic(true);
    await uploadUserProfilePicture(e.target.files![0], user!.uid)
      .then((url) => {
        setIsUploadingUserProfilePic(false);
        return url;
      })
      .catch((err) => {
        console.error(err);
        return null;
      });

    updateCurrentUser(auth, user);
  };

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleUpdateUserInformation = async (inputData: Inputs) => {
    try {
      setIsLoading(true);
      await updateUserDisplayName(
        inputData.firstName + " " + inputData.lastName
      );
      await updateUserEmailAddress(inputData.email);
      await addOrUpdateUserDataInDB(
        {
          ...userData!,
          phoneNumber: inputData.phoneNumber,
        },
        user!.uid
      );
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   setDashBoardTitleInfo({
  //     h1: "Settings",
  //     sub: "Update your profile information",
  //   });
  // }, [setDashBoardTitleInfo]);

  return (
    <Layout>
      <div className="w-11/12 md:w-2/3 mx-auto mt-5 bg-white">
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
          <div className="p-5">
            {/* profile picture */}
            <div className="h-20 w-20 mx-auto relative">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={user?.displayName + "`s profile picture"}
                  className="z-0 h-full w-full rounded-full"
                  ref={profilePictureRef}
                  height={100}
                  width={100}
                />
              ) : (
                <div className="p-5 bg-black h-full w-full rounded-full">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="z-0 h-full w-full text-white"
                  />
                </div>
              )}
              {isUploadingUserProfilePic && (
                <div className="h-1/4 w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    className="text-white h-full"
                  />
                </div>
              )}
              <div
                className="rounded-full w-7 h-7 bg-white flex shadow-sm shadow-primaryOne justify-center items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3"
                onClick={handleClick}
              >
                <input
                  type="file"
                  hidden
                  onChange={handleChangingUserProfilePicture}
                  ref={fileInput}
                />
                <FontAwesomeIcon icon={faCamera} className="text-primaryOne" />
              </div>
            </div>
            <form
              onSubmit={handleSubmit(handleUpdateUserInformation)}
              className="flex flex-col"
            >
              <p className="text-xl font-bold">Personal information</p>
              {/* first name and last name  */}
              <div className="flex mt-5 gap-x-2">
                <div className="w-1/2">
                  <p className="text-base font-medium">First Name</p>
                  <p className="text-xs font-medium text-gray-400 my-1">
                    Enter your first name here
                  </p>
                  <SettingsInput
                    type="text"
                    regParam="firstName"
                    register={register}
                  />
                </div>
                <div className="w-1/2">
                  <p className="text-base font-medium">Last Name</p>
                  <p className="text-xs font-medium text-gray-400 my-1">
                    Enter your last name here
                  </p>
                  <SettingsInput
                    type="text"
                    regParam="lastName"
                    register={register}
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
                  <div className="relative w-full">
                    {errors.email && (
                      <ToolTip text="Email is invalid or incomplete" />
                    )}
                    <SettingsInput
                      type="email"
                      regParam="email"
                      register={register}
                      // eslint-disable-next-line no-useless-escape
                      pattern={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="text-base font-medium">Phone number</p>
                  <p className="text-xs font-medium text-gray-400 my-1">
                    Enter your phone number here
                  </p>
                  <div className="relative w-full">
                    {errors.phoneNumber && (
                      <ToolTip text="Enter a valid phone number in international format (+254...)" />
                    )}
                    <SettingsInput
                      type="tel"
                      regParam="phoneNumber"
                      register={register}
                      pattern={/^\+(?:[0-9] ?){6,14}[0-9]$/}
                    />
                  </div>
                </div>
              </div>
              {/* <p className="text-sm text-gray-400 mt-5">
              This account was created on{" "}
              {formatDateFromTimestamp(user?.metadata.creationTime)}
            </p> */}
              <SubmitButton
                disabled={Object.keys(errors).length !== 0}
                isLoading={isLoading}
                text="Update details"
                className="ml-auto mt-5 w-1/4"
              />
            </form>
          </div>
        ) : (
          <PasswordEditor />
        )}
      </div>
    </Layout>
  );
};

export default Settings;
