import { useState } from 'react';

import { type Transaction } from '../model/transaction.tsx';
import NewTransactionForm from '../components/NewTransactionForm.tsx';
import { useTransactionsContext } from '../hooks/useTransactionsContext.tsx';
import Toast from '../utils/Toast.tsx';

export default function NewTransaction() {
  const [isToastOpen, setIsToastOpen] = useState(false);

  const { addTransaction } = useTransactionsContext();

  function addTransactionItem(transaction: Transaction) {
    addTransaction(transaction);

    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 2000);
  }

  return (
    <section>
      <h1 className='text-center font-bold text-2xl'>EXPENSE ENTRY</h1>
      <NewTransactionForm onAdd={addTransactionItem} />
      {isToastOpen && (
        <Toast
          message='Expense added successfully!'
          type='success'
        />
      )}
    </section>
  );
}