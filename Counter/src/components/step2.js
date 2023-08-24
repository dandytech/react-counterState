import React, { useState } from "react";
import "../index.css";

function DateChecker() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleRest() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div className="step">
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: <label>{step}</label>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}

        <input
          type="range"
          max="10"
          min="0"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div className="counter">
        {/* <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: <label>{count}</label>
        <button onClick={() => setCount((c) => c + step)}>+</button> */}
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div className="message">
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
      </div>

      <div>
        {count !== 0 || step !== 1 ? (
          <button onClick={handleRest} style={{ cursor: "pointer" }}>
            Rest
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default DateChecker;
