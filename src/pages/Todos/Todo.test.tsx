import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todos from "./Todos";
import { BrowserRouter } from "react-router-dom";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => null,
      removeListener: () => null,
    };
  },
});

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todos />
    </BrowserRouter>
  );
};
const addTodo = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const addButtonElement = screen.getByRole("button", { name: "Add" });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(addButtonElement);
  });
};
describe("Todo integration test", () => {
  describe("todo list should render correct", () => {
    it("should render same text passed into title prop", () => {
      render(<MockTodo />);
      addTodo(["Go home"]);
      const todosWrapperElements = screen.getByRole("list");
      expect(todosWrapperElements).toHaveTextContent("Go home");
    });
    it("should render all tasks", () => {
      render(<MockTodo />);
      addTodo(["Go home", "Go school"]);
      const todoItemElements = screen.getAllByRole("listitem");
      expect(todoItemElements.length).toBe(2);
    });
  });
  describe("todo list should have correct style", () => {
    it("should not have line-through style when just added", () => {
      render(<MockTodo />);
      addTodo(["Go home"]);
      const todoItemElement = screen.getByRole("listitem");
      expect(todoItemElement).not.toHaveStyle("text-decoration: line-through");
      fireEvent.click(todoItemElement);
      expect(todoItemElement).toHaveStyle("text-decoration: line-through");
    });
  });
});
