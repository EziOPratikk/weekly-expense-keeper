type ChartBarProps = {
  title: string;
  totalDaySpending: number;
  totalSpendingPctRatio: number;
};

export default function ChartBar(props: ChartBarProps) {
  return (
    <div className='flex flex-col pt-4 pb-8 justify-center items-center'>
      <p className='text-xs sm:text-sm md:text-lg font-bold'>{props.title}</p>
      <div className='bg-[#e4e3e3] w-4 h-24 sm:w-6 sm:h-28 my-2 rounded-full flex flex-col-reverse overflow-hidden'>
        <div
          className={`w-4 sm:w-6 bg-[#f8ed62] rounded-full`}
          style={{
            height: `${
              parseFloat(props.totalSpendingPctRatio.toFixed(2)) * 100
            }%`,
          }}
        />
      </div>
      <p className='text-xs sm:text-sm md:text-lg w-20 font-bold truncate text-center'>
        ${props.totalDaySpending.toFixed(2)}
      </p>
    </div>
  );
}