import { currencyFormatter } from "../util";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({ name, amount, max, onAddExpense, hideButtons, onViewExpenses }) {


	return (
		<div className="bg-slate-900 p-4 rounded-md flex flex-col w-full gap-8 shadow-lg ">
			<div className="flex justify-between">
				<div className="text-lg font-medium">{name}</div>
				<div className="text-xl font-medium">
					{currencyFormatter.format(amount)}
					{max && (<span className="text-base font-light text-slate-400">
						{" "}
						/ {currencyFormatter.format(max)}
					</span>)}
				</div>
			</div>
            {max && (<ProgressBar progress={(amount / max) * 100} />)}
            {!hideButtons && (<div className="flex items-center justify-end gap-4">
                <button onClick={onAddExpense} className="px-4 py-2 text-slate-900 rounded-sm font-medium bg-slate-100 hover:bg-slate-200">Add Expenses</button>
                <button onClick={onViewExpenses} className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">View Expenses</button>
            </div>)}
		</div>
	);
}
