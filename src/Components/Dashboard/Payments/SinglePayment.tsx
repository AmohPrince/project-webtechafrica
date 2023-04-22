import React from "react";
import { ActiveWebsite } from "../../../Types/Global";
import { extractHostname } from "../../../Util/Utilities";

const SinglePayment = ({ website }: { website: ActiveWebsite }) => {
  return (
    <div className="flex justify-between text-sm mt-2 border-b font-semibold pb-4">
      <div className="w-1/4">
        <p>{extractHostname(website.url)}</p>
        <p className="text-xs text-gray-500">Plan : {website.plan}</p>
      </div>
      <div className="w-1/5">
        <p>06/01/2023</p>
        <p className="text-xs text-gray-500">at 19:00</p>
      </div>
      <p className="w-1/5">Debit xxxx xxxx 2679</p>
      <p className="w-[10%]">Ksh 4,700</p>
      <p className="w-1/5">07/04/2023</p>
    </div>
  );
};

export default SinglePayment;
