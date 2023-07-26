import ToDoList from "./ToDoList";
import AddToDoForm from "./AddToDoForm";
import useToDOItemAndList from "./useToDoItemAndList";

export default function ToDoApp() {
  const [
    todoItem,
    todoList,
    { handleSubmit, handleAdd, handleDelete, handleCheck, setTodoItem },
  ] = useToDOItemAndList("", []);

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
