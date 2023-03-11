import { useState } from "react";
import Header from "../../components/Header/Header";
import { TTodoUi } from "../../data/types/Todo.type";
import AddInput from "./components/AddInput/AddInput";
import TodoList from "./components/TodoList/TodoList";

const Todos = () => {
  const [todos, setTodos] = useState<TTodoUi[]>([]);

  return (
    <>
      <Header title="Todos" />
      <AddInput setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
};

export default Todos;
