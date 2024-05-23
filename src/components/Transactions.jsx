import React from "react";
import { useContext } from "react";
import TransactionRow from "./TransactionRow";
import { GlobalContext } from "../context/GlobalState";
export default function Transactions() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <div className="mt-8 w-full">
        <h2 className="text-xl font-medium">History</h2>
        <hr className="mb-4 border-b-2 border-slate-300" />
        <div className="flex flex-col gap-2">
          {transactions.map((transaction) => (
            <TransactionRow
              type={transaction.amount > 0 ? "income" : "expense"}
              text={transaction.text}
              amount={transaction.amount}
              key={transaction.id}
              transactionId={transaction.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
