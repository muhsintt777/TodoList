import "./App.css";
import { useState } from "react";
import Todo from "./Components/Todo";
import { addTodo } from "./axios/todoServices";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState("");

  function changeHandler(e) {
    setTask(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await addTodo(task);
      if (response) {
        setTodoArr([{ id: Date.now(), task: task, isDone: false }, ...todoArr]);
        setTask("");
      }
    } catch (err) {
      alert(err);
    }
  }

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

  return (
    <div className="App">
      <div className="todo-list-container">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              required
              className="header-input"
              value={task}
              onChange={changeHandler}
              type="text"
            />
            <button className="header-button">Add</button>
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
