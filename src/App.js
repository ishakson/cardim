import { useState, useEffect } from "react";
import "./styles.css";

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
  const [isLoaded, setIsLoaded] = useState(false);

  // Sayfa yüklenme animasyonu
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // Tarih formatını Türkçe olarak özelleştir
  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return date.toLocaleDateString('tr-TR', options);
  };

  return (
    <div className={`counter-container ${isLoaded ? 'loaded' : ''}`}>
      {/* Köşe süslemeleri */}
      <div className="corner corner-tl"></div>
      <div className="corner corner-tr"></div>
      <div className="corner corner-bl"></div>
      <div className="corner corner-br"></div>
      
      <h2>Tarih Hesaplayıcı</h2>
      
      <div className="control-row">
        <button onClick={() => setStep((c) => Math.max(1, c - 1))}></button>
        <span>
          Adım: {step}
          <span className="unit">birim</span>
        </span>
        <button onClick={() => setStep((c) => c + 1)}></button>
      </div>

      <div className="control-row">
        <button onClick={() => setCount((c) => c - step)}></button>
        <span>
          Sayaç: {count}
          <span className="unit">gün</span>
        </span>
        <button onClick={() => setCount((c) => c + step)}></button>
      </div>

      <p className="result">
        <span>
          {count === 0
            ? "Bugünün tarihi:"
            : count > 0
            ? `Bugünden ${count} gün sonrası:`
            : `${Math.abs(count)} gün öncesi:`}
        </span>
        <span className="date">{formatDate(date)}</span>
      </p>
    </div>
  );
}