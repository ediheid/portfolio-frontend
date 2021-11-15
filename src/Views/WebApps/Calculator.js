import React, { useState } from "react";

// Imported Components
import ResultComponent from "./calculator-ResultComponent";
import KeypadComponent from "./calculator-KeypadComponent";

//  Main Calculator component. Exported to 'WebAppPageLayout.js'
const Calculator = () => {
  // Hooks
  let [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Array of operators
  const ops = ["/", ".", "+", "*", "-"];

  // ! Update function - trying with function
  const updateCalc = (value) => {
    if (calc.length > 0) {
      const last = calc[calc.length - 1];
      console.log(last);
      const ops = ["/", ".", "+", "*", "-"];
      if (ops.includes(last) && ops.includes(value)) {
        return;
      }
    }
    // check if calc empty ( '' ) or fill ('2-1')
    const isEmptyCalc = !calc;
    // check if value is zero
    const isNotZero = value == 0;
    // Testing..
    // console.log(
    //   "========value======isEmptyCalc==========isNotZero============"
    // );
    // console.log(value, isEmptyCalc, isNotZero);
    // console.log("====================================");
    if (isNotZero && isEmptyCalc) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      // setResult(eval(calc + value).toString());

      let userInput = calc + value;

      let newResult = Function("return " + userInput)();
      console.log(newResult);

      setResult(newResult);
    }
  };

  const calculate = () => {
    if (calc === "") {
      setCalc("");
    } else {
      const last = calc[calc.length - 1];
      console.log(last);
      const ops = ["/", ".", "+", "*", "-"];
      if (ops.includes(last)) {
        return;
      }

      console.log(calc);
      // setCalc(eval(calc).toString());

      let newResult = Function("return " + calc)();

      setCalc(newResult);
    }
  };

  // Delete button function to clear the last entered digit or operator
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  // Clear button function - clears display
  const clearFunction = () => {
    setCalc("");
  };

  // JSX to be rendered with components
  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Result Component - display output */}
        <ResultComponent result={result} calc={calc} />

        {/* Keypad Component - buttons */}
        <KeypadComponent
          clearFunction={clearFunction}
          deleteLast={deleteLast}
          calculate={calculate}
          updateCalc={updateCalc}
        />
      </div>
    </div>
  );
};

export default Calculator;
