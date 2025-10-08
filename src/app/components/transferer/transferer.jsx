import { useState } from "react";
import "./transferer.css";

function Transferer({ getWeigh, getHeight, bmi }) {
  const [weigh, setWeigh] = useState("");
  const [height, setHeight] = useState("");
  function inpWeigh(e) {
    setWeigh(e.target.value);
  }
  function inpHeight(e) {
    setHeight(e.target.value);
  }
  function submitInfo(e) {
    e.preventDefault();
    getWeigh(weigh);
    getHeight(height);
    setHeight("");
    setWeigh("");
  }
  return (
    <div className="getInfo">
      <form action="" onSubmit={submitInfo}>
        <div className="kg">
          <input
            type="number"
            placeholder="Write your weight in kg"
            onChange={inpWeigh}
            value={weigh}
          />
          <h1>KG</h1>
        </div>
        <div className="sm">
          <input
            type="number"
            value={height}
            placeholder="Write your weight in kg"
            onChange={inpHeight}
          />
          <h1>SM</h1>
        </div>
        <button>Safe</button>
      </form>
      <h1>Your BMI = {bmi}</h1>
    </div>
  );
}

export default Transferer;
