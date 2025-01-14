import { type Transaction } from '../model/transaction.tsx';
import TransactionItem from './TransactionItem.tsx';

type TransactionListProps = {
  transactions: Transaction[];
};

export default function TransactionList(props: TransactionListProps) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-8'>
      {props.transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <TransactionItem
              id={transaction.id}
              title={transaction.title}
              amount={transaction.amount}
              date={transaction.date}
            />
          </li>
        );
      })}
    </ul>
  );
}