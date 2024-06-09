import { useEffect, useRef } from "react";
import { TodosPage } from "features/todo/todos-page";
import { fetchTodos } from "features/todo/todoSlice";

function App() {
  const isApiCalled = useRef(false);

  useEffect(() => {
    (async () => {
      if (isApiCalled) return;
      isApiCalled.current = true;

      fetchTodos();
    })();
  }, []);

  return <TodosPage />;
}

export default App;
