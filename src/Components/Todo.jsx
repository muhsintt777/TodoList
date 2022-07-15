import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo-container">
      <div className="todo-container-content">
        <p>{props.item}</p>
      </div>
      <div className="todo-container-buttons">
        <button>Done</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
