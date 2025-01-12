import { type FormEvent } from 'react';

import dayjs from 'dayjs';

import { type Transaction } from '../model/transaction';

type NewTransactionFormProps = {
  onAdd: (data: Transaction) => void;
};

export default function NewTransactionForm(props: NewTransactionFormProps) {
  function handleTransactionSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const transactionData = {
      id: Date.now(),
      title: data.title as string,
      amount: +data.amount,
      date: data.date as string,
    };

    event.currentTarget.reset();

    props.onAdd(transactionData);
  }

  const today = dayjs();

  const startOfWeek = today.startOf('week');
  const endOfWeek = today.endOf('week');

  const minDate = startOfWeek.format('YYYY-MM-DD');
  const maxDate = endOfWeek.format('YYYY-MM-DD');

  return (
    <form className='shadow-md px-14 py-8' onSubmit={handleTransactionSubmit}>
      <p className='mt-8'>
        <label htmlFor='title'>TITLE</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='e.g., Dinner, Groceries, Movie'
          required
          className='border p-2 mt-2 w-full bg-white focus:outline-none rounded-sm focus:ring-2 focus:ring-[#F8ED62]'
        />
      </p>
      <p className='mt-8'>
        <label htmlFor='amount'>AMOUNT ($)</label>
        <input
          type='number'
          id='amount'
          name='amount'
          min={0}
          step='.01'
          placeholder='e.g., 50.00, 200.00'
          required
          className='border p-2 mt-2 w-full bg-white focus:outline-none rounded-sm focus:ring-2 focus:ring-[#F8ED62]'
        />
      </p>
      <p className='mt-8'>
        <label htmlFor='date'>DATE</label>
        <input
          type='date'
          id='date'
          name='date'
          min={minDate}
          max={maxDate}
          required
          className='border p-2 mt-2 w-full bg-white focus:outline-none rounded-sm focus:ring-2 focus:ring-[#F8ED62]'
        />
      </p>
      <p className='mt-8 text-center'>
        <button
          type='submit'
          className='bg-[#be29ec] text-white py-2 px-4 rounded-full shadow-md hover:text-[#F8ED62] hover:translate-y-[-0.2rem] transition-all duration-200'
        >
          &#43;
        </button>
      </p>
    </form>
  );
}