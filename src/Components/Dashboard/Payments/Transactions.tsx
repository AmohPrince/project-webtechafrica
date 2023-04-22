import React from "react";
import { useAuth } from "../../../Hooks/UseAuth";
import SinglePayment from "./SinglePayment";

const Transactions = ({ className }: { className?: string }) => {
  const { user } = useAuth();
  return (
    <div className={`flex-grow border p-2 mb-2 rounded-md ${className}`}>
      <div className="flex justify-between text-sm mt-2 text-gray-500">
        <p className="w-1/4">Website url</p>
        <p className="w-1/5">Payment Date</p>
        <p className="w-1/5">Card used</p>
        <p className="w-[10%]">Total</p>
        <p className="w-1/5">Billing date</p>
      </div>
      {user?.activeWebsites ? (
        user?.activeWebsites.map((website) => (
          <SinglePayment website={website} />
        ))
      ) : (
        <p>No Payments yet 😁</p>
      )}
    </div>
  );
};

export default Transactions;
