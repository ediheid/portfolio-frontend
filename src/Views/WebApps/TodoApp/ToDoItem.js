import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const checkIcon = <FontAwesomeIcon icon={faCheck} />;

const ToDoItem = (props) => {
  // const deleteFunction = () => {
  //   props.deleteItem(props.id);
  // };

  const moveFunction = () => {
    props.moveItem(props.id);
  };

  return (
    <div className="todo-item">
      {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
      <p>{props.item}</p>
      <div>
        {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
        <button className="btn" onClick={moveFunction}>
          {/* // Prop for delete function -- onClick={deleteFunction} */}
          {checkIcon}
        </button>
      </div>
    </div>
  );
};

// * A class-based version of the ToDoItem component
// class ToDoItem extends React.Component {
//     render() {
//         return (
//             <div className="todo-item">
//                 {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
//                 <p>{this.props.item.text}</p>
//                 <div>
//                     {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
//                     <button className="btn">{checkIcon}</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default ToDoItem;
