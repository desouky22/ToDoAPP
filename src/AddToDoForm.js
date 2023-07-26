export default function AddToDoForm({
  handleSubmit,
  todoItem,
  handleAdd,
  setTodoItem,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={todoItem}
        onChange={(e) => {
          setTodoItem(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
