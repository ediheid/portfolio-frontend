import React from "react";

const InputField = (props) => {
  return (
    <input
      placeholder="Type your task here..."
      className="input-field"
      onChange={props.onChangePropTwo}
      value={props.valuePropTwo}
    ></input>
  );
};

export default InputField;
