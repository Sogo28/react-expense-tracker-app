import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
import ExpenseForm from "./components/ExpenseForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <div className="min-h-full flex justify-center items-center bg-slate-100 font-mono">
        <GlobalProvider>
          <div className="py-8 w-96 flex flex-col">
            <Header title="Expense Tracker" />
            <Balance />
            <Expenses />
            <Transactions />
            <ExpenseForm />
          </div>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
