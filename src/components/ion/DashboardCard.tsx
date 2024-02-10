// Generated with Ion on 2/10/2024, 1:40:30 PM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4014:28299
import clsx from 'clsx';
type DashboardCardProps = {
	src?: string;
	value?: string;
	title?: string;
	className?: string;
};

function DashboardCard({
	src = ' ',
	value = '1 Job',
	title = 'Total Opening',
	className = '',
}: DashboardCardProps) {
	return (
		<div
			className={clsx(
				'bg-background w-[320px] h-[120px] flex justify-between items-center px-5 py-6 rounded-radius shadow-[0_1px_1px_0_rgba(0,0,0,0.07),0_1px_2px_0_rgba(0,0,0,0.08),0_2px_2px_0_rgba(0,0,0,0.1),0_0_8px_0_rgba(0,0,0,0.05)]',
				className
			)}
		>
			<div className="h-full flex-col flex justify-between">
				<div className="text-base text-sub-foreground">{title}</div>
				<div className="text-2xl font-medium text-foreground">{value}</div>
			</div>
			<img
				className="object-cover h-[72px] w-[72px]"
				alt="Untitled 2"
				src="/images/dashboard/untitled-2.png"
			/>
		</div>
	);
}
export default DashboardCard;
