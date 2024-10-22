import { useState } from "react";
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

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSliderChange(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function handleIncrement() {
    setCount((c) => c + step);
  }

  function handleDecrement() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleSliderChange(e)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="text"
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder={count}
          value={count}
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
