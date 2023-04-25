import React, { useContext, useEffect } from "react";
import { useAuth } from "../../../Hooks/UseAuth";
import { globalData } from "../../../Pages/DashBoard";
import SinglePayment from "./SinglePayment";
import { SinglePaymentSmallScreen } from "./SinglePaymentSmallScreen";

const Transactions = ({ type }: { type: "Upcoming" | "Past" }) => {
  const { userData } = useAuth();
  const { setDashBoardTitleInfo } = useContext(globalData);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDashBoardTitleInfo({
        h1: "Payments",
        sub: "Your upcoming and past payments",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex-grow border p-2 mb-2 rounded-md hidden sm:block">
        <div className="flex justify-between text-sm mt-2 text-gray-500">
          <p className="w-1/4">Website url</p>
          <p className="w-1/5">Payment Date</p>
          <p className="w-1/5">Card used</p>
          <p className="w-[10%]">Total</p>
          <p className="w-1/5">Billing date</p>
        </div>
        {type === "Upcoming"
          ? userData?.upcomingTransactions?.map((transaction) => (
              <SinglePayment transaction={transaction} />
            ))
          : userData?.pastTransactions?.map((transaction) => (
              <SinglePayment transaction={transaction} />
            ))}
      </div>
      <div className="sm:hidden">
        {type === "Upcoming"
          ? userData?.upcomingTransactions?.map((transaction) => (
              <SinglePaymentSmallScreen transaction={transaction} />
            ))
          : userData?.pastTransactions?.map((transaction) => (
              <SinglePaymentSmallScreen transaction={transaction} />
            ))}
      </div>
    </>
  );
};

export default Transactions;
