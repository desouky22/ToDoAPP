import './ToDoList.css';

export default function ToDoList({
  todoList,
  handleCheck,
  handleAdd,
  handleDelete,
}) {
  return (
    <ul className="todo-list">
      {todoList.map((item) => {
        return (
          <li key={item.id} className="todo-item">
            {item.done ? (
              <>
                <input
                  type="checkbox"
                  id={item.id}
                  checked
                  onChange={() => handleCheck(item.id)}
                  className="todo-checkbox"
                />
                <label htmlFor={item.id} className="todo-label">
                  <del>{item.text}</del>
                </label>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => handleCheck(item.id)}
                  className="todo-checkbox"
                />
                <label htmlFor={item.id} className="todo-label">{item.text}</label>
              </>
            )}

            <button onClick={() => handleDelete(item.id)} className="todo-delete-button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
}