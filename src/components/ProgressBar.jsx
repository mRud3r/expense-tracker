export default function ProgressBar({ progress }) {

	const getColor = () => {
		if (progress < 30) return "bg-blue-400";
        if (progress < 50) return "bg-blue-600";
        if (progress < 80) return "bg-yellow-600";
		return "bg-red-600";
	};

	return (
		<div className="w-full bg-slate-600 rounded-full h-4">
			<div
				className={`${getColor()} h-4 rounded-full transition-all duration-300`}
				style={{ width: `${progress}%` }}></div>
		</div>
	);
}
