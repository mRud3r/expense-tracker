import { useState } from "react"
import AddBudgetModal from "./components/AddBudgetModal"
import BudgetCard from "./components/BudgetCard"
import { useBudgets } from "./context/BudgetsContext";
import AddExpenseModal from "./components/AddExpenseModal";

function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(false);
  const { budgets, expenses, getBudgetExpenses } = useBudgets();

  const openAddExpenseModal = (budgetId) => {
    setShowExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
    <header className="container mx-auto w-full flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Finances</h1>
      <div className="flex gap-4">
        <button onClick={() => setShowBudgetModal(true)} className="px-4 py-2 bg-slate-100 text-slate-800 font-medium rounded-sm hover:bg-slate-200">Add Budget</button>
        <button onClick={openAddExpenseModal} className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">Add Expense</button>
      </div>
    </header>
    <main className="container mx-auto w-full p-4">
      {budgets.map(budget => {
        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
       return  <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max} onAddExpense={() => openAddExpenseModal(budget.id)} />
})}

    </main>
    <AddBudgetModal showModal={showBudgetModal} setShowModal={setShowBudgetModal}/>
    <AddExpenseModal showModal={showExpenseModal} setShowModal={setShowExpenseModal} defaultBudgetId={addExpenseModalBudgetId}/>
    
    </>
  )
}

export default App
