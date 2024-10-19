import { currencyFormatter } from "../util";
import ProgressBar from "./ProgressBar";

export default function BudgetCard({ name, amount, max }) {


	return (
		<div className="bg-slate-900 p-4 rounded-md flex flex-col max-w-[400px] gap-4 ">
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
		</div>
	);
}
