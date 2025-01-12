type ChartBarProps = {
  title: string;
  totalDaySpending: number;
  totalWeekSpendingPctRatio: number;
};

export default function ChartBar(props: ChartBarProps) {
  return (
    <div className='flex flex-col py-8 justify-center items-center'>
      <p className='font-bold'>{props.title}</p>
      <div className='bg-[#e4e3e3] w-6 h-28 my-2 rounded-full flex flex-col-reverse'>
        <div
          className={`w-6 bg-[#f8ed62] rounded-full`}
          style={{
            height: `${
              parseFloat(props.totalWeekSpendingPctRatio.toFixed(2)) * 100
            }%`,
          }}
        />
      </div>
      <p className='w-20 font-bold truncate text-center'>
        ${props.totalDaySpending.toFixed(2)}
      </p>
    </div>
  );
}