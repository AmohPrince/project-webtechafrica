import React from "react";
import { assets } from "../Assets/assets";
import { ActiveWebsiteType } from "../Types/Global";
import { extractHostname } from "../Util/Utilities";

const SinglePayment = ({ website }: { website: ActiveWebsiteType }) => {
  return (
    <div className="w-2/3 show">
      <h4 className="h4">{extractHostname(website.websiteUrl)}</h4>
      <div className="flex justify-between">
        <div className="bg-white rounded-xl py-3 px-6 w-1/2">
          <p className="font-bold border-b text-sm py-3">Recent Payment</p>
          <div className="flex justify-between text-sm mt-2">
            <p className="text-gray-500">Plan Subscribed</p>
            <p className="font-semibold">{website.plan}</p>
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
        <div className="bg-white rounded-xl p-3 w-1/3">
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
        </div>
      </div>
    </div>
  );
};

export default SinglePayment;
