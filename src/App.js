import "./App.css";
import Todo from "./Components/Todo";
import { useState } from "react";

function App() {
  const [todoArr, setTodoArr] = useState(["breakfast"]);
  const [task, setTask] = useState("");
  // const todoArr = [
  //   "breakfast",
  //   "dinner",
  //   "grocery",
  //   "deriving",
  //   "blablab",
  //   "arkhgr",
  // ];

  function changeHandler(event) {
    setTask(event.target.value);
  }
  function clickHandler() {
    setTodoArr([task, ...todoArr]);
  }

  const newTodoArr = todoArr.map(function (item) {
    return <Todo item={item} />;
  });
  return (
    <div className="App">
      <div className="todo-list-container">
        <header>
          <input value={task} onChange={changeHandler} type="text" />
          <button onClick={clickHandler}>Add</button>
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
