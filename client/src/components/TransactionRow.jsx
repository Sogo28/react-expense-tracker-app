import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function TransactionRow({ transactionId, type, text, amount }) {
  const border = type == "expense" ? "border-r-red-500" : "border-r-green-500";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <div className="flex flex-row group">
        <button
          className="bg-red-500 text-white font-bold w-8"
          onClick={() => deleteTransaction(transactionId)}
        >
          X
        </button>
        <div
          className={`bg-white group border-r-4 border-b-4 border-b-slate-300 p-2 w-full flex flex-row justify-between ${border}`}
        >
          <p className="text-xl font-light">{text}</p>
          <p className="text-xl font-medium">{amount}</p>
        </div>
      </div>
    </>
  );
}
