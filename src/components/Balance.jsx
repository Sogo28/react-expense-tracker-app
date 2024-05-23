import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  return (
    <>
      <div className="w-full">
        <h2 className="text-xl font-medium uppercase">Your Balance</h2>
        <h3 className="text-4xl font-bold">${amount}</h3>
      </div>
    </>
  );
}
