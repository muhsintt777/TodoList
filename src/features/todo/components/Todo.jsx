import { removeTodo, updateTodo } from "services/todoService";
import styles from "./todo.module.css";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../todoSlice";

function Todo({ text, id, isDone }) {
  const dispatch = useDispatch();

  async function handleDone(todoDetails) {
    const newTodo = { ...todoDetails, isDone: true, id };
    await updateTodo(newTodo);
    dispatch(fetchTodos());
  }

  async function handleDelete() {
    await removeTodo(id);
    dispatch(fetchTodos());
  }

  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoContainerButtons}>
        {isDone && <button onClick={handleDone}>Done</button>}
        <button>Update</button>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className={styles.todoContainerContent}>
        <p style={{ textDecoration: isDone ? "line-through" : "" }}>{text}</p>
      </div>
    </div>
  );
}

export default Todo;
