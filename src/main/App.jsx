import { useEffect, useRef } from "react";
import { TodosPage } from "features/todo/todos-page";
import { fetchTodos } from "features/todo/todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isApiCalled = useRef(false);

  useEffect(() => {
    if (!isApiCalled.current) {
      isApiCalled.current = true;
      dispatch(fetchTodos());
    }
  }, []);

  return <TodosPage />;
}

export default App;
