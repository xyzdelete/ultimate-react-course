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
  const [input, setInput] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleSliderChange(e) {
    setStep(Number(e.target.value));
  }

  function handleInputChange(e) {
    setInput(Number(e.target.value));
  }

  function handleReset() {
    setInput(0);
    setCount(0);
    setStep(1);
  }

  function handleIncrement() {
    if (step !== 0) {
      setInput((input) => input + step);
      setCount((c) => c + input);
    } else {
      setCount((c) => c + input);
    }
  }

  function handleDecrement() {
    if (step !== 0) {
      setInput((input) => input - step);
      setCount((c) => c - input);
    } else {
      setCount((c) => c - input);
    }
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => handleSliderChange(e)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          placeholder={input}
          value={input}
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

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
