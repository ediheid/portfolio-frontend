import React from "react";

const ResultComponent = (props) => {
  return (
    <div className="result-display">
      <div className="display-content">
        {props.result ? <span></span> : ""}
        {props.calc || ""}
      </div>
    </div>
  );
};

// Exported to Calculator.js
export default ResultComponent;
