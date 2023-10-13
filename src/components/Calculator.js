import { useState } from "react";
import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */

  // State variables:

  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [operation, setOperation] = useState("");
  let [result, setResult] = useState("");

  // A string to hold the total calculation:
  let calculation = num1 + operation + num2;

  // Creating an array for generating the Number components with less code: 
  let numbers = Array.from(Array(10).keys());

  // When a number is clicked, it either sets the num1 state variable or the num2 state variable, depending on whether an operation was selected:
  const handleNumberClick = (val) => {
    operation === "" ? setNum1(num1+val) : setNum2(num2+val);
  };

  // When an operation is clicked, it either makes the calculation, clears all the state variables, or sets the operation:
  const handleOperationClick = (val) => {
    if (val === "=") {
      setResult(eval(calculation));
    } else if (val === "clear") {
      setNum1("");
      setNum2("");
      setOperation("");
      setResult("");
    } else {
      switch (val) {
        case "+":
          {
            setOperation("+");
          }
          break;
        case "-":
          {
            setOperation("-");
          }
          break;
        case "x":
          {
            setOperation("*");
          }
          break;
        case "/":
          {
            setOperation("/");
          }
          break;
        default:
          return;
      }
    }
  };

  return (
    <div>
      <Screen value={calculation} result={num2 ? result : ""} />
      <div style={{ display: "flex" }}>
        <div>
          {numbers.map((num, i) => {
            return <Number key={i} value={num} onClick={handleNumberClick} />;
          })}
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationClick} />
          <Operation value="clear" onClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
