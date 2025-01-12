import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout.tsx';
import AllTransactions from './pages/AllTransactions.tsx';
import NewTransaction from './pages/NewTransaction.tsx';
import NotFound from './pages/NotFound.tsx';
import TransactionContextProvider from './store/transaction-context.tsx';
function App() {
  return (
    <TransactionContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<AllTransactions />}></Route>
          <Route path='/new-transaction' element={<NewTransaction />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </TransactionContextProvider>
  );
}

export default App;