import React, { useState } from "react";
import "../index.css";

function Step() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // const t = new Date();
  // const today =
  //   t.toLocaleString("default", { month: "long" }) +
  //   " " +
  //   t.getDay() +
  //   ", " +
  //   t.getFullYear();

  // const newtoday = Date(today);
  // const newDate = newtoday + count;

  // function handleStepAdd() {
  //   if (step >= 1) setStep(step + 1);
  // }
  // function handleStepSub() {
  //   if (step > 1) setStep(step - 1);
  // }

  // const handleCountAdd = () => {
  //   if (count >= 1) setCount(count + step);
  // };
  // const handleCountSub = () => {
  //   if (count > 1) setCount(count - step);

  // };

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: <label>{step}</label>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count: <label>{count}</label>
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
    </div>
  );
}
export default Step;
