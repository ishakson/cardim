import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [yourPercentage, setYourPercentage] = useState(0);
  const [friendsPercentage, setFriendsPercentage] = useState(0);
  
  const tip = bill * ((yourPercentage + friendsPercentage) / 2 / 100);
  
  function handleReset() {
    setBill(0);
    setYourPercentage(0);
    setFriendsPercentage(0);
  }
  
  return (
    <div className="calculator">
      <h1>Tip Calculator</h1>
      
      <Bill bill={bill} onBill={setBill} />
      
      <TipPercentage
        percentage={yourPercentage}
        onSelect={setYourPercentage}
      >
        How did you like the service?
      </TipPercentage>
      
      <TipPercentage
        percentage={friendsPercentage}
        onSelect={setFriendsPercentage}
      >
        How did your friends like the service?
      </TipPercentage>
      
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div className="input-group">
      <h2>How much is your bill?</h2>
      <input
        type="number"
        min="0"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
        className="input-field"
      />
    </div>
  );
}

function TipPercentage({ percentage, onSelect, children }) {
  return (
    <div className="input-group">
      <h2>{children}</h2>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="select-field"
      >
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output">
      <h3>Tip: ${tip.toFixed(2)}</h3>
      <h3>Total: ${(bill + tip).toFixed(2)}</h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div className="reset">
      <button onClick={onReset} className="reset-button">Reset</button>
    </div>
  );
}