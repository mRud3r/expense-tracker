import { useState } from "react";
import AddBudgetModal from "./components/AddBudgetModal";
import BudgetCard from "./components/BudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./context/BudgetsContext";
import AddExpenseModal from "./components/AddExpenseModal";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";

function App() {
	const [showBudgetModal, setShowBudgetModal] = useState(false);
	const [showExpenseModal, setShowExpenseModal] = useState(false);
	const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
	const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState();
	const { budgets, getBudgetExpenses } = useBudgets();

	const openAddExpenseModal = (budgetId) => {
		setShowExpenseModal(true);
		setAddExpenseModalBudgetId(budgetId);
	};

	const openViewExpensesModal = (budgetId) => {
		setViewExpenseModalBudgetId(budgetId);
	};

	const closeViewExpensesModal = () => {
		setViewExpenseModalBudgetId(undefined);
	};

	return (
		<>
			<header className="container mx-auto w-full flex justify-between items-center p-4">
				<h1 className="text-2xl font-bold">Finances</h1>
				<div className="flex gap-4">
					<button
						onClick={() => setShowBudgetModal(true)}
						className="px-4 py-2 bg-slate-100 text-slate-800 font-medium rounded-sm hover:bg-slate-200">
						Add Budget
					</button>
					<button
						onClick={() => openAddExpenseModal(undefined)}
						className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">
						Add Expense
					</button>
				</div>
			</header>
			<main className="container mx-auto w-full p-4">
				{budgets.map((budget) => {
					const amount = getBudgetExpenses(budget.id).reduce(
						(total, expense) => total + expense.amount,
						0
					);
					return (
						<BudgetCard
							key={budget.id}
							name={budget.name}
							amount={amount}
							max={budget.max}
							onAddExpense={() => openAddExpenseModal(budget.id)}
							onViewExpenses={() => openViewExpensesModal(budget.id)}
						/>
					);
				})}
				<UncategorizedBudgetCard
					onViewExpenses={() => openViewExpensesModal(UNCATEGORIZED_BUDGET_ID)}
					onAddExpense={openAddExpenseModal}
				/>
				<TotalBudgetCard />
			</main>
			<AddBudgetModal
				showModal={showBudgetModal}
				setShowModal={setShowBudgetModal}
			/>
			<AddExpenseModal
				showModal={showExpenseModal}
				setShowModal={setShowExpenseModal}
				defaultBudgetId={addExpenseModalBudgetId}
			/>
			<ViewExpensesModal
				budgetId={viewExpenseModalBudgetId}
				showModal={viewExpenseModalBudgetId !== undefined}
				setShowModal={closeViewExpensesModal}
			/>
		</>
	);
}

export default App;
