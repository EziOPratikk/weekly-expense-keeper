import { createContext, useReducer, type ReactNode } from 'react';

import { type Transaction } from '../model/transaction';

type TransactionState = {
  transactions: Transaction[];
};

type TransactionContextValue = {
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
  clearAllTransactions: () => void;
} & TransactionState;

const initialState: TransactionState = {
  transactions: [],
};

type TransactionContextProviderProps = {
  children: ReactNode;
};

type AddTransactionAction = {
  type: 'ADD_TRANSACTION';
  payload: Transaction;
};

type DeleteTransactionAction = {
  type: 'DELETE_TRANSACTION';
  payload: {
    transactionId: number;
  };
};

type ClearAllTransactionsAction = {
  type: 'CLEAR_ALL_TRANSACTIONS';
};

type TransactionsActions =
  | AddTransactionAction
  | DeleteTransactionAction
  | ClearAllTransactionsAction;

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionContext = createContext<TransactionContextValue | null>(
  null
);

function transactionReducer(
  state: TransactionState,
  action: TransactionsActions
): TransactionState {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        transactions: [
          ...state.transactions,
          {
            id: action.payload.id,
            title: action.payload.title,
            amount: action.payload.amount,
            date: action.payload.date,
          },
        ],
      };

    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.transactionId
        ),
      };

    case 'CLEAR_ALL_TRANSACTIONS':
      return {
        transactions: [],
      };

    default:
      return state;
  }
}

export default function TransactionContextProvider(
  props: TransactionContextProviderProps
) {
  const [transactionState, dispatch] = useReducer(
    transactionReducer,
    initialState
  );

  const ctx: TransactionContextValue = {
    transactions: transactionState.transactions,
    addTransaction(transaction) {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    },
    deleteTransaction(id) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: { transactionId: id } });
    },
    clearAllTransactions() {
      dispatch({ type: 'CLEAR_ALL_TRANSACTIONS' });
    },
  };

  return (
    <TransactionContext.Provider value={ctx}>
      {props.children}
    </TransactionContext.Provider>
  );
}