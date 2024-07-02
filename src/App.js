import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(3);

  function clickAdd() {
    setStep((s) => s + 1);
  }

  function clickSub() {
    setStep((s) => s - 1);
  }

  function countAdd() {
    setCount((s) => s + step);
  }
  function countSub() {
    setCount((s) => s - step);
  }

  let date = new Date();
  date = date.setDate(date.getDate() + count);

  return (
    <div className="body">
      <div className="inner-container">
        <Upper content={`step: ${step}`} click1={clickSub} click2={clickAdd} />
        <Upper
          content={`count: ${count}`}
          click1={countSub}
          click2={countAdd}
        />

        <p>{` ${
          count === 0
            ? "today is"
            : count === 1
            ? `${Math.abs(count)} day from today`
            : count > 1
            ? `${Math.abs(count)} days from today`
            : `${Math.abs(count)} days back`
        } is ${new Date(date)}`}</p>
      </div>
    </div>
  );
}

function Upper(props) {
  return (
    <div className="step">
      <button onClick={props.click1}>-</button>
      <p>{props.content}</p>
      <button onClick={props.click2}>+</button>
    </div>
  );
}
