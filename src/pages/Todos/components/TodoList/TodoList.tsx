import React, { FC } from "react"; 
import Container from "../../../../components/Container/Container";
import { TTodoUi } from "../../../../data/types/Todo.type";
import TodoFooter from "../TodoFooter/TodoFooter";
import { TodoListItem } from "./TodoList.style";

type TTodoListProps = {
  todos: TTodoUi[];
  setTodos: React.Dispatch<React.SetStateAction<TTodoUi[]>>;
};

const TodoList: FC<TTodoListProps> = ({ todos, setTodos }) => {
  const updateTask = (id: string) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };
  return (
    <Container>
      <div role="list">
        {todos.map((todo) => (
          <TodoListItem
            completed={todo.completed}
            onClick={() => updateTask(todo.id)}
            key={todo.id}
            role="listitem"
          >
            {todo.task}
          </TodoListItem>
        ))}
      </div>
      <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
    </Container>
  );
};

export default TodoList;
