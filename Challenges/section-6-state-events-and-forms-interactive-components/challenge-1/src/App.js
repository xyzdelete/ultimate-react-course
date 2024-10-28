import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(date);
  const [step, setStep] = useState(0);
  const [daysCountStep, setDaysCountStep] = useState(0);

  function handleMinusStep() {
    setStep((step) => step - 1);
  }
  function handlePlusStep() {
    setStep((step) => step + 1);
  }
  function handleMinusCountDays() {
    setDaysCountStep((daysCountStep) => daysCountStep - step);

    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - step
    );

    setCurrentDate(newDate);
  }
  function handlePlusCountDays() {
    setDaysCountStep((daysCountStep) => daysCountStep + step);

    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + step
    );

    setCurrentDate(newDate);
  }

  return (
    <>
      <div>
        <button onClick={handleMinusStep}> - </button>
        <span> Step: {step} </span>
        <button onClick={handlePlusStep}> + </button>
      </div>
      <div>
        <button onClick={handleMinusCountDays}> - </button>
        <span> Count: {daysCountStep} </span>
        <button onClick={handlePlusCountDays}> + </button>
      </div>
      <p>
        {daysCountStep} days from today is
        {` ${currentDate.toLocaleString("default", {
          weekday: "short",
        })} ${currentDate.toLocaleString("default", {
          month: "short",
        })} ${currentDate.getDate()} ${currentDate.getFullYear()}`}
      </p>
    </>
  );
}

export default App;
