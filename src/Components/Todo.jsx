import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo-container">
      <div className="todo-container-content">
        <p style={{ textDecoration: props.item.isDone ? "line-through" : "" }}>
          {props.item.task}
        </p>
      </div>
      <div className="todo-container-buttons">
        {!props.item.isDone && (
          <button
            onClick={function () {
              props.doneHandler(props.item.id);
            }}
          >
            Done
          </button>
        )}
        <button
          className="delete-button"
          onClick={() => props.deleteHandler(props.item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
