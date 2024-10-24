import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetsContext";

export default function ViewExpensesModal({
	budgetId,
	showModal,
	setShowModal,
}) {
	const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
		useBudgets();

	const budget =
		UNCATEGORIZED_BUDGET_ID === budgetId
			? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
			: budgets.find((b) => b.id === budgetId);

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-slate-600 rounded shadow-lg space-y-8 p-6 w-11/12 sm:w-1/2 lg:w-1/3">
				<div className="flex items-center justify-between">
					<div>Expenses - {budget?.name}</div>
					{budgetId !== UNCATEGORIZED_BUDGET_ID && (
						<button
						className="px-4 py-2 rounded-sm font-medium bg-red-400 hover:bg-red-600"
							onClick={() => {
								deleteBudget(budgetId);
								setShowModal(false);
							}}>
							Delete Budget
						</button>
					)}
					<button
						className="text-slate-400 hover:text-slate-200 font-medium"
						onClick={() => setShowModal(false)}>
						Close
					</button>
				</div>

				<div>
					{getBudgetExpenses(budgetId).map((expense) => (
						<div key={expense.id} className="flex justify-between items-center">
							<div>{expense.description}</div>
							<div>${expense.amount.toFixed(2)}</div>
							<button className="text-xl text-red-400 p- hover:text-red-600" onClick={() => deleteExpense(expense.id)}>
								X
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
