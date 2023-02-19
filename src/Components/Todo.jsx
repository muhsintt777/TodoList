import React from "react";
import "./Todo.css";

function Todo({item, doneHandler, deleteHandler}) {
  return (
    <div className="todo-container">
      <div className="todo-container-content">
        <p style={{ textDecoration: item.isDone ? "line-through" : "" }}>
          {item.task}
        </p>
      </div>
      <div className="todo-container-buttons">
        {!item.isDone && (
          <button
            onClick={function () {
              doneHandler(item.id);
            }}
          >
            Done
          </button>
        )}
        <button
          className="delete-button"
          onClick={() => deleteHandler(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
