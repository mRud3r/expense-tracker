import { useState } from "react"
import AddBudgetModal from "./components/AddBudgetModal"
import BudgetCard from "./components/BudgetCard"
import { useBudgets } from "./context/BudgetsContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { budgets, expenses, getBudgetExpenses } = useBudgets();

  return (
    <>
    <header className="container mx-auto w-full flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Finances</h1>
      <div className="flex gap-4">
        <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-slate-100 text-slate-800 font-medium rounded-sm hover:bg-slate-200">Add Budget</button>
        <button className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">Add Expense</button>
      </div>
    </header>
    <main className="container mx-auto w-full p-4">
      {budgets.map(budget => {
        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
       return  <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max} />
})}
    </main>
    <AddBudgetModal showModal={showModal} setShowModal={setShowModal}/>
    
    </>
  )
}

export default App
