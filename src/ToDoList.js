export default function ToDoList({
  todoList,
  handleCheck,
  handleAdd,
  handleDelete,
}) {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <li key={item.id}>
            {item.done ? (
              <>
                <input
                  type="checkbox"
                  id="todo"
                  checked
                  onChange={() => handleCheck(item.id)}
                />
                <label htmlFor="todo">
                  <del>{item.text}</del>
                </label>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  id="todo"
                  onChange={() => handleCheck(item.id)}
                />
                <label htmlFor="todo">{item.text}</label>
              </>
            )}

            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
