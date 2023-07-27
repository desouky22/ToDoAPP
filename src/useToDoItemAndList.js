import { useState } from "react";
import log from "./logging";

export default function useToDOItemAndList(initialItem, initialList) {
  const [todoItem, setTodoItem] = useState(initialItem);
  const [todoList, setTodoList] = useState(initialList);

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
    console.log(process.env.REACT_APP_DESOUKY);
    log(id);
    const filteredList = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, done: !todoItem.done };
      }
      return todoItem;
    });
    setTodoList([...filteredList]);
  }

  return [
    todoItem,
    todoList,
    {
      handleSubmit,
      handleAdd,
      handleDelete,
      handleCheck,
      setTodoItem,
    },
  ];
}
