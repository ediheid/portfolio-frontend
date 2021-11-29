import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="input-button" onClick={props.updateToDosPropTwo}>
        Add to List!
      </button>
    </div>
  );
};

export default Button;
