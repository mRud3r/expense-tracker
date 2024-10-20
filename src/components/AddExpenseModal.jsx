import { useContext, useRef } from "react";
import { useBudgets } from "../context/BudgetsContext";

export default function AddExpenseModal({ showModal, setShowModal, defaultBudgetId }) {
	const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();
    const { addExpenses, budgets } = useBudgets()
    function handleSubmit(e) {
        e.preventDefault()
        addExpense({
            descriptionRef: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
        })
        setShowModal(false);
    }
    
    
    if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-slate-600 rounded shadow-lg space-y-8 p-6 w-11/12 sm:w-1/2 lg:w-1/3">
				<div className="flex items-center justify-between">
					<p className="text-xl font-bold">New Expense</p>
					<button
						className="text-slate-400 hover:text-slate-200 font-medium"
						onClick={() => setShowModal(false)}
					>
						Close
					</button>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col items-end gap-5">
					<div className="flex flex-col gap-2 w-full">
						<label className="font-semibold text-lg">
							Description
						</label>
						<input
							type="text"
                            required
                            ref={descriptionRef}
							className="bg-slate-200 rounded p-2 text-slate-900"
						/>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label htmlFor="" className="font-semibold text-lg">
							Amount
						</label>
						<input
							type="number"
                            required
                            ref={amountRef}
							className="bg-slate-200 rounded p-2 text-slate-900"
						/>
					</div>
					<button type="submit" className="px-4 py-2 bg-slate-950 rounded">Add</button>
				</form>
			</div>
		</div>
	);
}