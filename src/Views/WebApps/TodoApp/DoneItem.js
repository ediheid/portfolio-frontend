import React from "react";
// * Font Awesome for React import
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faTimes } from "@fortawesome/free-solid-svg-icons";

const redoIcon = <FontAwesomeIcon icon={faRedo} />;
const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const DoneItem = (props) => {
  // Redo Function
  const reDoFunction = () => {
    props.reDoItem(props.id);
  };

  // Delete Function
  const deleteFunction = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="done-item">
      {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
      <p>{props.item.text}</p>
      <div>
        {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
        <button className="btn reDoButton" onClick={reDoFunction}>
          {redoIcon}
        </button>

        <button className="btn closeButton" onClick={deleteFunction}>
          {closeIcon}
        </button>
      </div>
    </div>
  );
};

export default DoneItem;
