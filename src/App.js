import { useState } from "react";
import "./styles.css"; // CSS dosyamızı içeri aktardık

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Başlangıç tarihi
  const startDate = new Date("June 21 2027");
  startDate.setDate(startDate.getDate() + count);

  // Step sınırı: minimum 1
  function changeStep(amount) {
    setStep((s) => Math.max(s + amount, 1));
  }

  // Count sınırı: -1000 ile +1000
  function changeCount(amount) {
    setCount((c) => Math.min(1000, Math.max(-1000, c + amount)));
  }

  return (
    <div className="counter-container">
      {/* Step Kontrolleri */}
      <div>
        <button onClick={() => changeStep(-1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => changeStep(1)}>+</button>
      </div>

      {/* Count Kontrolleri */}
      <div>
        <button onClick={() => changeCount(-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => changeCount(step)}>+</button>
      </div>

      {/* Tarih Bilgisi */}
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{startDate.toDateString()}</span>
      </p>
    </div>
  );
}
