import React from "react";
import { render, screen } from "@testing-library/react";
import TodoFooter, { TTodoFooterProps } from "./TodoFooter";
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

const MockTodoFooter = ({ numberOfIncompleteTasks }: TTodoFooterProps) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("todo footer", () => {
  it("should render the correct incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
  it("should render 'task' when the number of incomplete tasks is singular", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
