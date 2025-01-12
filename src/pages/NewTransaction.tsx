import { useNavigate } from 'react-router-dom';

import NewTransactionForm from '../components/NewTransactionForm.tsx';
import { type Transaction } from '../model/transaction.tsx';
import { useTransactionsContext } from '../hooks/useTransactionsContext.tsx';

export default function NewTransaction() {
  const navigate = useNavigate();

  const { addTransaction } = useTransactionsContext();

  function addTransactionItem(transaction: Transaction) {
    addTransaction(transaction);

    navigate('/');
  }

  return (
    <section>
      <h1 className='text-center font-bold text-2xl'>EXPENSE ENTRY</h1>
      <NewTransactionForm onAdd={addTransactionItem} />
    </section>
  );
}