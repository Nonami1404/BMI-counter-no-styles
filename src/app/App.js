import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Transferer from "./components/transferer/transferer";
import Counter from "./components/counter/counter";

function App() {
  const [weigh, setWeigh] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiNumber, setBmiNumber] = useState(0);
  const getWeigh = (weigh) => {
    //console.log(weigh +"it is weigh")
    setWeigh(weigh);
  };
  const getHeight = (height) => {
    // console.log(heigh +"it is height")
    setHeight(height);
  };
  useEffect(() => {
    if (weigh > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiNum = weigh / (heightInMeters * heightInMeters);
      setBmiNumber(bmiNum.toFixed(1));
    }
  }, [weigh, height]);
  return (
    <div className="app-wrapper">
      <h1>BMI counter</h1>
      <Transferer getWeigh={getWeigh} getHeight={getHeight} bmi={bmiNumber} />
      <Counter />
    </div>
  );
}

export default App;
