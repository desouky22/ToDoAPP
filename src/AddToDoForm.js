import './AddToDoForm.css';

export default function AddToDoForm({
  handleSubmit,
  todoItem,
  handleAdd,
  setTodoItem,
}) {
  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Add Todo"
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
        className="add-todo-input"
      />
      <button onClick={handleAdd} className="add-todo-button">Add</button>
    </form>
  );
}