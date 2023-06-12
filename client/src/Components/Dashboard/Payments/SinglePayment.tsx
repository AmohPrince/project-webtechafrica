import React from "react";
import { Transaction } from "../../../Types/Global";
import { formatDate, formatTime } from "../../../Util/Utilities";

const SinglePayment = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="flex justify-between text-sm mt-2 border-b font-semibold pb-4">
      <div className="w-1/4">
        <p>{transaction.websiteUrl}</p>
        <p className="text-xs text-gray-500">Plan : {transaction.plan}</p>
      </div>
      <div className="w-1/5">
        <p>{formatDate(transaction.lastPaymentDate)}</p>
        <p className="text-xs text-gray-500">
          at {formatTime(transaction.lastPaymentTime)}
        </p>
      </div>
      {transaction.card === "Paypal" ? (
        <p>Paypal</p>
      ) : (
        <p className="w-1/5">Debit xxxx xxxx {transaction.card.endsIn}</p>
      )}
      <p className="w-[10%]">
        {transaction.currencyCode} {transaction.amount}
      </p>
      <p className="w-1/5">{formatDate(transaction.billingDate)}</p>
    </div>
  );
};

export default SinglePayment;
