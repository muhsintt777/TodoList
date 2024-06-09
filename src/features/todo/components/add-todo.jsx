import { addTodo } from "services/todoService";
import styles from "./add-todo.module.css";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../todoSlice";

export const AddTodo = () => {
  const dispatch = useDispatch();

  async function handleTodoSubmit(e) {
    e.preventDefault();
    await addTodo(e.target.todo.value);
    dispatch(fetchTodos());
  }

  return (
    <form className={styles.form} onSubmit={handleTodoSubmit}>
      <input className={styles.headerInput} required type="text" name="todo" />
      <button className={styles.headerButton}>Add</button>
    </form>
  );
};
