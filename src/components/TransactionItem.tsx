import { type Transaction } from '../model/transaction.tsx';

import deleteBinImg from '../assets/icons/delete.png';
import { useTransactionsContext } from '../hooks/useTransactionsContext.tsx';

type TransactionItemProps = Transaction;

export default function TransactionItem(props: TransactionItemProps) {
  const { deleteTransaction } = useTransactionsContext();

  function handleDeleteTransactionItem() {
    deleteTransaction(props.id);
  }

  return (
    <div className='border-2 rounded-sm flex justify-between items-center w-96 md:w-80 p-6 sm:w-96'>
      <p className='bg-[#be29ec] text-white flex items-center justify-center rounded-full w-16 h-16 p-3 truncate text-sm'>
        ${props.amount.toFixed(2)}
      </p>

      <div className='w-32 truncate text-center'>
        <p className='font-bold'>{props.title}</p>
        <p className='text-xs text-gray-600'>{props.date}</p>
      </div>
      <div>
        <img
          src={deleteBinImg}
          alt='a-dustbin'
          className='w-7 cursor-pointer hover:translate-y-[-0.12rem] transition-transform duration-200'
          onClick={handleDeleteTransactionItem}
        />
      </div>
    </div>
  );
}