import React, { useContext, useEffect, useState } from "react";
// import { useAuth } from "../Hooks/UseAuth";
import { globalData } from "./DashBoard";
import { Cards } from "../../Components/Dashboard/Payments/Cards";
import Transactions from "../../Components/Dashboard/Payments/Transactions";

const Payments = () => {
  // const { user } = useAuth();
  const [activeSmallScreenTab, setActiveSmallScreenTab] = useState<
    "payment-methods" | "cards" | "transactions"
  >("transactions");

  const { setDashBoardTitleInfo } = useContext(globalData);
  useEffect(() => {
    setDashBoardTitleInfo({
      h1: "Payments",
      sub: "Add your preferred payment method",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-x-5 px-4 py-3 sm:bg-white sm:p-6 mt-4">
      <div className="text-sm flex justify-between mx-auto gap-x-4 mb-5 sm:hidden w-full">
        <button
          className={`w-1/2 px-3 py-2 border border-primaryOne rounded-[4px] ${
            activeSmallScreenTab === "transactions" &&
            "bg-primaryOne shadow-md text-white"
          } `}
          onClick={() => setActiveSmallScreenTab("transactions")}
        >
          Transactions
        </button>
        <button
          className={`w-1/2 px-3 py-2 border border-primaryOne font-semibold rounded-[4px] ${
            activeSmallScreenTab === "cards" &&
            "bg-primaryOne shadow-md text-white"
          }`}
          onClick={() => setActiveSmallScreenTab("cards")}
        >
          Cards
        </button>
      </div>
      <div className="sm:hidden w-full">
        {activeSmallScreenTab === "cards" && <Cards />}
        {activeSmallScreenTab === "transactions" && (
          <>
            <p className="font-semibold mb-2">Upcoming payments</p>
            <Transactions type="Upcoming" />
          </>
        )}
        {activeSmallScreenTab === "transactions" && (
          <>
            <p className="font-semibold mb-2">Past payments</p>
            <Transactions type="Past" />
          </>
        )}
      </div>
      <div className="hidden sm:flex justify-between w-full gap-x-2">
        <div className="flex-grow">
          <div>
            <p className="font-semibold mb-2">Upcoming payments</p>
            <Transactions type="Upcoming" />
          </div>
          <div>
            <p className="font-semibold mb-2">Past payments</p>
            <Transactions type="Past" />
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Payments;
