import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Expenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <>
      <div className="flex flex-row justify-center py-4 bg-white h-fit uppercase mt-8 shadow-xl w-full">
        <div className="flex flex-col border-r-2 w-1/2 justify-center items-center">
          <h2 className="font-bold">Income</h2>
          <p className="text-green-400 text-2xl font-medium">{income}</p>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
          <h2 className="font-bold">Expense</h2>
          <p className="text-red-400 text-2xl font-medium">{expense}</p>
        </div>
      </div>
    </>
  );
}
