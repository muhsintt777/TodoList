import styles from "./todos-page.module.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";

export const TodosPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};
