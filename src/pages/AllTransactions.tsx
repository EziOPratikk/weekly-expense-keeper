import { Fragment } from 'react/jsx-runtime';
import { type ReactNode } from 'react';

import TransactionList from '../components/TransactionList.tsx';
import { useTransactionsContext } from '../hooks/useTransactionsContext.tsx';
import Chart from '../components/Chart.tsx';
import waitingImg from '../assets/icons/waiting.png';

export default function AllTransactions() {
  const { transactions } = useTransactionsContext();

  let transactionListContent: ReactNode;

  if (transactions.length === 0) {
    transactionListContent = (
      <aside className='text-center'>
        <img
          src={waitingImg}
          alt='zzz-image'
          className='w-20 xl:w-24 2xl:w-28 mx-auto'
        />
        <p className='mt-4'>NO TRANSACTION ADDED YET!</p>
      </aside>
    );
  } else {
    transactionListContent = (
      <section className='flex justify-center items-center'>
        <TransactionList transactions={transactions} />
      </section>
    );
  }

  return (
    <Fragment>
      <section className='border-2 rounded-sm mb-8'>
        <Chart transactions={transactions} />
      </section>
      {transactionListContent}
    </Fragment>
  );
}