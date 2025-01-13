import { useState, Fragment } from 'react';

import dayjs from 'dayjs';

import ChartBar from './ChartBar.tsx';
import { Transaction } from '../model/transaction.tsx';
import ConfirmDialog from '../utils/ConfirmDialog.tsx';
import { useTransactionsContext } from '../hooks/useTransactionsContext.tsx';

type ChartBarProps = {
  transactions: Transaction[];
};

export default function Chart(props: ChartBarProps) {
  const [isDialogOpen, SetIsDialogOpen] = useState(false);

  const { clearAllTransactions } = useTransactionsContext();

  const days = Array.from({ length: 7 }, (_, i) => ({
    name: dayjs().startOf('week').add(i, 'day').format('ddd'),
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

  function handleClearAllTransactions() {
    clearAllTransactions();

    SetIsDialogOpen(false);
  }

  return (
    <Fragment>
      <ConfirmDialog
        message='Are you sure you want to clear all transactions?'
        isOpen={isDialogOpen}
        onConfirm={handleClearAllTransactions}
        onCancel={() => SetIsDialogOpen(false)}
      />
      <div className='flex justify-between h-24 items-center px-4'>
        <p className='text-xs sm:text-sm md:text-lg text-center font-bold mt-4'>
          Total Expenses: ${totalWeekSpending.toFixed(2)}
        </p>
        {props.transactions.length !== 0 && (
          <button
            className='text-[#be29ec] rounded-sm px-4 py-2 hover:bg-slate-50 active:bg-slate-100 text-xs sm:text-sm md:text-lg'
            onClick={() => SetIsDialogOpen(true)}
          >
            Clear All
          </button>
        )}
      </div>
      <div className='grid grid-cols-7'>
        {days.map((day) => {
          return (
            <ChartBar
              key={day.name}
              title={day.name}
              totalDaySpending={day.totalSpending}
              totalSpendingPctRatio={
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