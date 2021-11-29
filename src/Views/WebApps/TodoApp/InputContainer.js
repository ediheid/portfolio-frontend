import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const InputContainer = (props) => {
  return (
    <div className="input-container">
      <InputField
        onChangePropTwo={props.onChangeProp}
        valuePropTwo={props.valueProp}
      />
      <Button updateToDosPropTwo={props.updateToDosProp} />
    </div>
  );
};

export default InputContainer;
