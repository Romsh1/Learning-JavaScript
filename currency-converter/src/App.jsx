import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');

  return (
    <div>
      <input type='text'
       value={amount}
       onChange={ (e) => setAmount(Number(e.target.value))} 
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="NPR">NPR</option>
        <option value="EUR">EUR</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="NPR">NPR</option>
        <option value="EUR">EUR</option>
      </select>
    </ div>
  );
}

export default App
