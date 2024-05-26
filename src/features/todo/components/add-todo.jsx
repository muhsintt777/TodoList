import styles from "./add-todo.module.css";

export const AddTodo = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.headerInput}
        required
        // onChange={}
        type="text"
      />
      <button className={styles.headerButton}>Add</button>
    </form>
  );
};
