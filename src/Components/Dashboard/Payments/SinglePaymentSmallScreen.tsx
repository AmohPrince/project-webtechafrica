import React from "react";
import { Transaction } from "../../../Types/Global";
import { getCardTypeIcon } from "../../../Util/Utilities";

export const SinglePaymentSmallScreen = ({
  transaction,
}: {
  transaction: Transaction;
}) => {
  return (
    <div className="rounded-md border p-5 bg-white mb-2">
      <p className="text-gray-400 text-sm">Website url</p>
      <p className="font-semibold">{transaction.websiteUrl}</p>
      <p className="text-gray-400 text-sm">Plan: {transaction.plan}</p>

      <div className="flex justify-between mt-2">
        <div>
          <p className="text-gray-400 text-sm">Card Used</p>
          <p className="font-semibold">
            Debit xxxx xxxx {transaction.card.endsIn}
          </p>
          <div className="flex">
            <img src={getCardTypeIcon(transaction.card.type)} alt="Card icon" />
            <p>{transaction.card.type}</p>
          </div>
        </div>
        <div className="w-1/3">
          <p className="text-gray-400 text-sm">Last Payment</p>
          <p>{transaction.lastPaymentDate}</p>
          <p className="text-gray-400 text-sm">
            at {transaction.lastPaymentTime}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-gray-400 text-sm">Total</p>
          <p className="font-semibold">
            {transaction.currencyCode} {transaction.amount}
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-gray-400 text-sm">Billing Date</p>
          <p className="font-semibold">{transaction.billingDate}</p>
        </div>
      </div>
    </div>
  );
};
