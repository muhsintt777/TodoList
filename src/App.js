import "./App.css";
import Todo from "./Components/Todo";
import { useState } from "react";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState("");

  function changeHandler(event) {
    setTask(event.target.value);
  }
  function clickHandler(event) {
    event.preventDefault();
    setTodoArr([{ id: Date.now(), task: task, isDone: false }, ...todoArr]);
    setTask("");
  }

  const newTodoArr = todoArr.map(function (item) {
    return (
      <Todo
        key={item.id}
        item={item}
        doneHandler={doneHandler}
        deleteHandler={deleteTodo}
      />
    );
  });

  function doneHandler(id) {
    const newArr = todoArr.map(function (todo) {
      if (todo.id === id) {
        todo.isDone = true;
      }

      return todo;
    });

    setTodoArr(newArr);
  }

  function deleteTodo(id) {
    const reminder = todoArr.filter(function (item) {
      return item.id !== id;
    });
    setTodoArr(reminder);
  }
  return (
    <div className="App">
      <div className="todo-list-container">
        <header>
          <form action="">
            <input
              onSubmit={clickHandler}
              className="header-input"
              value={task}
              onChange={changeHandler}
              type="text"
            />
            <button className="header-button" onClick={clickHandler}>
              Add
            </button>
          </form>
        </header>
        <div className="todo-list-body">
          <h1>ToDos</h1>
          {newTodoArr}
        </div>
      </div>
    </div>
  );
}

export default App;
