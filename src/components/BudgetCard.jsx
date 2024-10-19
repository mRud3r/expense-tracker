import { currencyFormatter } from "../util";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({ name, amount, max }) {


	return (
		<div className="bg-slate-900 p-4 rounded-md flex flex-col max-w-[400px] gap-8 shadow-lg ">
			<div className="flex justify-between">
				<div className="text-lg font-medium">{name}</div>
				<div className="text-xl font-medium">
					{currencyFormatter.format(amount)}
					<span className="text-base font-light text-slate-400">
						{" "}
						/ {currencyFormatter.format(max)}
					</span>
				</div>
			</div>
            <ProgressBar progress={(amount / max) * 100} />
            <div className="flex items-center justify-end gap-4">
                <button className="px-4 py-2 text-slate-900 rounded-sm font-medium bg-slate-100 hover:bg-slate-200">Add Expenses</button>
                <button className="px-4 py-2 rounded-sm border border-slate-100 font-medium hover:bg-slate-700">View Expenses</button>
            </div>
		</div>
	);
}
