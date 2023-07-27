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
                  id={item.id}
                  checked
                  onChange={() => handleCheck(item.id)}
                />
                <label htmlFor={item.id}>
                  <del>{item.text}</del>
                </label>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  id={item.id}
                  onChange={() => handleCheck(item.id)}
                />
                <label htmlFor={item.id}>{item.text}</label>
              </>
            )}

            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
