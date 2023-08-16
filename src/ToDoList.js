import './ToDoList.css';

export default function ToDoList({ todoList, handleCheck, handleDelete }) {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.checked ? 'todo-item-checked' : ''}`}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheck(index)}
            className="todo-checkbox"
          />
          <label className="todo-label">{todo.text}</label>
          <button onClick={() => handleDelete(index)} className="todo-delete-button">Delete</button>
        </li>
      ))}
    </ul>
  );
}