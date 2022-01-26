import { useState } from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import CompanyInfo from './CompanyInfo';

function App() {
  const [symbol, setSymbol] = useState();
  return (
    <div>
      <Header />

      <Input setSymbol={setSymbol} />
      <hr />
      {symbol && <CompanyInfo symbol={symbol} />}

    </div>
  );
}

export default App;
