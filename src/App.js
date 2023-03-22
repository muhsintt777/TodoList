import "./App.css";
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { addTodo, getAllTodo, removeTodo } from "./axios/todoServices";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const [task, setTask] = useState("");

  //add todo
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await addTodo(task);
      console.log(response);
      setTodoArr([
        { id: response.id, text: response.text, isDone: false },
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

  function doneHandler(id) {
    const newArr = todoArr.map(function (todo) {
      if (todo.id === id) {
        todo.isDone = true;
      }

      return todo;
    });

    setTodoArr(newArr);
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
