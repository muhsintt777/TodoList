import { useEffect } from "react";
import { TodosPage } from "features/todo/todos-page";
import { fetchTodos, selectTodoApiStatus } from "features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_STATUS } from "utils/constants";

function App() {
  const dispatch = useDispatch();
  const todoApiStatus = useSelector(selectTodoApiStatus);

  useEffect(() => {
    if (todoApiStatus === API_STATUS.IDLE) {
      dispatch(fetchTodos());
    }
  }, []);

  return <TodosPage />;
}

export default App;
