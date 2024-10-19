import { currencyFormatter } from "../util";

export default function BudgetCard({ name, amount, max }) {
    return (
        <div className="bg-slate-900 p-4 rounded-md flex justify-between max-w-[400px] ">
            <div className="text-lg font-medium">{name}</div>
            <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
        </div>
    );
}
