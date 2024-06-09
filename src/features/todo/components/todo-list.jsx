import { useSelector } from "react-redux";
import Todo from "./Todo";
import styles from "./todo-list.module.css";
import { selectAllTodos, selectTodoApiStatus } from "../todoSlice";
import { API_STATUS } from "utils/constants";

export const TodoList = () => {
  const todos = useSelector(selectAllTodos);
  console.log(todos);
  const todoApiStatus = useSelector(selectTodoApiStatus);

  return (
    <div className={styles.container}>
      {todoApiStatus === API_STATUS.LOADING && <p>Loading...</p>}
      {todoApiStatus === API_STATUS.FAILED && (
        <p>Something went wrong, please try again later.</p>
      )}
      {todoApiStatus === API_STATUS.SUCCESS && (
        <>
          {todos?.length ? (
            <>
              {todos.map((item) => (
                <Todo />
              ))}
            </>
          ) : (
            <p>Please add some todos</p>
          )}
        </>
      )}
    </div>
  );
};
