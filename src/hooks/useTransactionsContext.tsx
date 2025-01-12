import { useContext } from 'react';

import { TransactionContext } from '../store/transaction-context.tsx';

export function useTransactionsContext() {
  const transactionsCtx = useContext(TransactionContext);

  if (!transactionsCtx)
    throw new Error(
      'useTransactionsContext must be used within a TransactionContextProvider'
    );

  return transactionsCtx;
}