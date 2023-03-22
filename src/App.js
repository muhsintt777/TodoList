import "./App.css";
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import {
  addTodo,
  getAllTodo,
  removeTodo,
  updateTodo,
} from "./axios/todoServices";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState("");

  //add todo
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await addTodo(task);
      setTodoArr([
        { id: response.id, text: response.text, isDone: response.isDone },
        ...todoArr,
      ]);
      setTask("");
    } catch (err) {
      alert(err);
    }
  }

  //delete todo
  async function deleteTodo(id) {
    try {
      const response = await removeTodo(id);
      const reminder = todoArr.filter((item) => item.id !== response.id);
      setTodoArr(reminder);
    } catch (err) {
      alert(err);
    }
  }

  async function doneHandler(newData) {
    try {
      const response = await updateTodo(newData);
      const newArr = todoArr.map((todo) => {
        if (todo.id === response.id) {
          todo.isDone = true;
        }

        return todo;
      });
      setTodoArr(newArr);
    } catch (err) {
      alert(err.message);
    }
  }

  // rendering
  const newTodoArr = todoArr.map((item) => (
    <Todo
      key={item.id}
      item={item}
      doneHandler={doneHandler}
      deleteHandler={deleteTodo}
    />
  ));

  useEffect(() => {
    async function getInitialTodos() {
      try {
        const response = await getAllTodo();
        console.log(response.todos);
        setTodoArr(response.todos);
      } catch (err) {
        alert(err);
      }
    }
    getInitialTodos();
  }, []);

  return (
    <div className="App">
      <div className="todo-list-container">
        <header>
          <form onSubmit={handleSubmit}>
            <input
              required
              className="header-input"
              value={task}
              onChange={(e) => setTask(e.target.value)}
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
