import BudgetCard from "./components/BudgetCard"

function App() {

  return (
    <>
    <header className="container mx-auto w-full flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Finances</h1>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-slate-100 text-slate-800 font-medium rounded-sm hover:bg-slate-200">Add Budget</button>
        <button className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">Add Expense</button>
      </div>
    </header>
    <main className="container mx-auto w-full">
      <BudgetCard name='name' amount={900} max={1000} />
    </main>
    
    </>
  )
}

export default App
