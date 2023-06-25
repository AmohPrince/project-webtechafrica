import { assets } from "@/public/assets";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import BlackIshButton from "../buttons/BlackIshButton";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { GreyButton } from "../buttons/GreyButton";

export const HowWeWork = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const { user } = useAuth();

  return (
    <section className="text-center mt-[10%] px-[5%] md:px-[12%]">
      <GreyButton text="How we work" />
      <h3 className="h2 mt-8 mb-12">Work smarter, work faster..</h3>
      <div className="flex justify-between gap-x-2">
        <button
          className={`bg-gray-200 py-5 md:px-16 rounded-md ${
            activeButton === 1 ? "active" : ""
          }`}
          onClick={() => setActiveButton(1)}
        >
          01. Create account
        </button>
        <button
          className={`bg-gray-200 py-5 md:px-10 rounded-md ${
            activeButton === 2 ? "active" : ""
          }`}
          onClick={() => setActiveButton(2)}
        >
          02. Call in or fill website application form
        </button>
        <button
          className={`bg-gray-200 py-5 md:px-16 rounded-md ${
            activeButton === 3 ? "active" : ""
          }`}
          onClick={() => setActiveButton(3)}
        >
          03. Track your progress
        </button>
      </div>
      {activeButton === 1 && (
        <div className="px-[4%] pt-[5%] text-left md:flex items-start">
          <div className="w-full md:w-3/5">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Person}
                alt="person"
                className="w-16 h-16 mr-5"
              />
              <h3 className="h4 md:h3">
                Create your account <br />& start your work
              </h3>
            </div>
            <p className="default-paragraph w-[95%] my-5">
              Creating user accounts allows us to track your web development
              process , payment information of individual users, making it
              easier to identify and resolve any issues that may arise. This
              also allows us better understand how users interact with their
              sites, which can be used to improve the overall user experience.
            </p>
            <Link href="/sign-up">
              <BlackIshButton text="Create account" />
            </Link>
          </div>
          <Image
            src={assets.Accounts}
            alt="account"
            className="hidden md:inline w-2/5"
          />
        </div>
      )}
      {activeButton === 2 && (
        <div className="px-[4%] pt-[5%] text-left flex items-start">
          <Image
            src={assets.BlueCard}
            alt="account"
            className="hidden md:inline w-2/5 mr-3"
          />
          <div className="flex justify-end flex-col">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Phone}
                alt="Phone"
                className="mr-3 w-16 h-16"
              />
              <h3 className="h4 md:h3">
                Call in or fill out our simple web info form and let us know
                more!
              </h3>
            </div>
            <p className="default-paragraph my-5">
              We strongly encourage clients to reach out to us either by phone
              or by filling out the form on our website. This will allow us to
              gather all the necessary information to build the perfect website
              tailored to your needs and preferences. Your input is crucial in
              creating a website that meets your goals and exceeds your
              expectations. So please don't hesitate to contact us, we are here
              to help and guide you through the process.
            </p>
            <Suspense>
              <Link
                href={`${
                  user
                    ? "/dashboard/new-website"
                    : "/sign-in/?source=get-started"
                }`}
                className="ml-auto"
              >
                <BlackIshButton text="Create a website now !" />
              </Link>
            </Suspense>
          </div>
        </div>
      )}
      {activeButton === 3 && (
        <div className="px-[4%] pt-[5%] text-left flex items-start justify-between">
          <div className="md:w-1/2">
            <div className="flex items-start md:items-center">
              <Image
                src={assets.Clock}
                alt="Phone"
                className="mr-3 w-16 h-16"
              />
              <h3 className="h4 md:h3">Sit back and watch the magic happen</h3>
            </div>
            <div className="flex my-5 gap-x-2">
              <p className="default-paragraph ">
                Get ready to be amazed! With our unique system, clients can sit
                back and watch as their website is built before their eyes.
                Whether they choose to track their progress through a convenient
                link or view it directly on their dashboards, you'll be able to
                see the magic happen in real-time.
              </p>
              <Image
                src={assets.Magic}
                alt="account"
                className="md:hidden w-2/5 object-cover"
              />
            </div>
            <Suspense>
              <Link
                href={`${
                  user
                    ? "/dashboard/new-website"
                    : "/sign-in/?source=get-started"
                }`}
                className="ml-auto"
              >
                <BlackIshButton text="Get me a website  🚀" />
              </Link>
            </Suspense>
          </div>
          <Image
            src={assets.Magic}
            alt="account"
            className="hidden md:inline w-2/5 ml-3 object-cover"
          />
        </div>
      )}
    </section>
  );
};
