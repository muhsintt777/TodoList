import "./App.css";
import Todo from "./Components/Todo";

function App() {
  const todoArr = [
    "breakfast",
    "dinner",
    "grocery",
    "deriving",
    "blablab",
    "arkhgr",
  ];
  const newTodoArr = todoArr.map(function (item) {
    return <Todo item={item} />;
  });
  return (
    <div className="App">
      <div className="todo-list-container">
        <header>
          <input type="text" />
          <button>Add</button>
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
