import { useState } from "react";

export default function ToDoApp() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    if (todoItem !== "") {
      setTodoList([
        ...todoList,
        { id: crypto.randomUUID(), text: todoItem, done: false },
      ]);
    }

    setTodoItem("");
  }

  function handleDelete(id) {
    const filteredList = todoList.filter((item) => {
      return item.id !== id;
    });

    setTodoList(filteredList);
  }

  function handleCheck(id) {
    console.log("Hello World");
    let item = null;
    for (let x = 0; x < todoList.length; x++) {
      if (todoList[x].id === id) {
        item = todoList[x];
      }
    }
    item.done = !item.done;
    const filteredList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList([...filteredList, item]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.target.value);
          }}
        />
        <button onClick={handleClick}>SUBMIT</button>
      </form>
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
    </>
  );
}
