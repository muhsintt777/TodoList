import { useSelector } from "react-redux";
import Todo from "./Todo";
import styles from "./todo-list.module.css";
import { selectAllTodos, selectTodoApiStatus } from "../todoSlice";
import { API_STATUS } from "utils/constants";

export const TodoList = () => {
  const todos = useSelector(selectAllTodos);
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
                <Todo
                  key={item._id}
                  text={item.text}
                  isDone={item.isDone}
                  id={item._id}
                />
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
