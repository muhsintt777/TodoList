import Todo from './Todo';
import styles from './todo-list.module.css';

export const TodoList = () => {
    return <div className={styles.container}>
        <Todo />
    </div>
}