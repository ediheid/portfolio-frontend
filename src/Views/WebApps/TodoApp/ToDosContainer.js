import React from "react";
import ToDoItem from "./ToDoItem";

const ToDosContainer = (props) => {
  // Receive the "tasks" array as a prop
  // For every "todo" object inside the array (e.g. "Wake up" or "Walk the dog")...
  // ... create a new <ToDoItem /> to represent that task.
  const toDoItems = props.items.map((todo) => {
    return (
      <ToDoItem
        item={todo.text}
        key={todo.id}
        id={todo.id}
        // deleteItem={props.deleteItemProp}
        moveItem={props.moveItemToDone}
      />
    );
  });

  return (
    <div className="todos-container">
      <div className="todos">
        <h1>TO DO</h1>

        {/* Render the list of <ToDoItem />s */}
        {toDoItems}
      </div>
    </div>
  );
};

export default ToDosContainer;
