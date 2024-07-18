import React from "react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
export default function ExpenseForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };
  return (
    <>
      <form className="mt-8 w-full" onSubmit={onSubmit}>
        <h2 className="text-xl font-medium">Add a new transaction</h2>
        <hr className="mb-4 border-b-2 border-slate-300" />
        <div className="flex flex-col">
          <label htmlFor="transName" className="font-medium">
            Text
          </label>
          <input
            type="text"
            name="text"
            placeholder="Enter text"
            className="p-4 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-300 mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="font-medium">
            Amount <br />
            (negative-expense, positive-income)
          </label>
          <input
            type="text"
            name="amount"
            placeholder="Enter an amount"
            className="p-4 rounded border-2 border-slate-300 focus:outline-none focus:border-slate-300"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Add transaction"
          className="w-full mt-8 bg-violet-400 text-white p-2 rounded font-medium hover:cursor-pointer hover:bg-violet-500 transition-all duration-300 ease-in-out"
        />
      </form>
    </>
  );
}
