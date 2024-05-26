import styles from './todo.module.css';

function Todo({ item, doneHandler, deleteHandler }) {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.todoContainerButtons}>
        {/* {!item.isDone && ( */}
          <button
            onClick={function () {
              doneHandler({ id: item.id, text: item.text, isDone: true });
            }}
          >
            Done
          </button>
        {/* )} */}
        <button>Update</button>
        <button
          className={styles.deleteButton}
          onClick={() => deleteHandler()}
        >
          Delete
        </button>
      </div>
      <div className={styles.todoContainerContent}>
        <p style={{ textDecoration: item?.isDone ? "line-through" : "" }}>
          {/* {item.text} */}
        </p>
      </div>
    </div>
  );
}

export default Todo;
