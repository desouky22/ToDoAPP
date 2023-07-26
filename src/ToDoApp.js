import { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDoForm from "./AddToDoForm";
import log from "./logging";

export default function ToDoApp() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleAdd() {
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
    log(id);
    const filteredList = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, done: !todoItem.done };
      }
      return todoItem;
    });
    setTodoList([...filteredList]);
  }

  return (
    <>
      <AddToDoForm
        handleSubmit={handleSubmit}
        todoItem={todoItem}
        handleAdd={handleAdd}
        setTodoItem={setTodoItem}
      />
      <ToDoList
        todoList={todoList}
        handleCheck={handleCheck}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
    </>
  );
}
