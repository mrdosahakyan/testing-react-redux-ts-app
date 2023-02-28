import { Col } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import { TTodoUi } from "../../data/types/Todo.type";
import AddInput from "./components/AddInput/AddInput";
import TodoList from "./components/TodoList/TodoList";

const Todos = () => {
  const [todos, setTodos] = useState<TTodoUi[]>([]);

  return (
    <Col style={{ padding: "64px 256px" }}>
      <Typography.Title>Todos</Typography.Title>
      <AddInput setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </Col>
  );
};

export default Todos;
