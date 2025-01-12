import { Fragment } from 'react/jsx-runtime';

import dayjs from 'dayjs';

import ChartBar from './ChartBar.tsx';
import { Transaction } from '../model/transaction.tsx';

type ChartBarProps = {
  transactions: Transaction[];
};

export default function Chart(props: ChartBarProps) {
  const days = Array.from({ length: 7 }, (_, i) => ({
    name: dayjs().add(i, 'day').format('ddd'),
    totalSpending: 0,
  }));

  props.transactions.forEach((transaction) => {
    const transactionDay = dayjs(transaction.date).format('ddd');

    const existingDay = days.find((day) => day.name === transactionDay);

    existingDay!.totalSpending += transaction.amount;
  });

  const initialValue = 0;
  const totalWeekSpending = props.transactions.reduce((sum, item) => {
    return sum + item.amount;
  }, initialValue);

  return (
    <Fragment>
      <p className='text-center font-bold mt-4'>
        TOTAL EXPENSES: ${totalWeekSpending.toFixed(2)}
      </p>
      <div className='flex justify-around items-center'>
        {days.map((day) => {
          return (
            <ChartBar
              key={day.name}
              title={day.name}
              totalDaySpending={day.totalSpending}
              totalWeekSpendingPctRatio={
                totalWeekSpending === 0
                  ? 0.0
                  : day.totalSpending / totalWeekSpending
              }
            />
          );
        })}
      </div>
    </Fragment>
  );
}