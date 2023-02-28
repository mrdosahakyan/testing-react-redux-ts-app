import React, { FC, useState } from "react";
import { TTodoUi } from "../../../../data/types/Todo.type";
import { SInputWrapper } from "./AddInput.style";
import { Input, Button } from "antd";

type TAddInputProps = {
  setTodos: React.Dispatch<React.SetStateAction<TTodoUi[]>>;
};

const AddInput: FC<TAddInputProps> = ({ setTodos }) => {
  const [todo, setTodo] = useState<string>("");

  const addTodo = () => {
    if (!todo) return;
    const newTodo: TTodoUi = {
      id: Date.now().toString(),
      task: todo,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  return (
    <SInputWrapper>
      <Input.Group style={{ display: "flex" }}>
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task here..."
        />
        <Button onClick={addTodo} type="primary">
          Add
        </Button>
      </Input.Group>
    </SInputWrapper>
  );
};

export default AddInput;
