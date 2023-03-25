import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddInput from "./AddInput";

const mockedSetTodos = jest.fn();

describe("add input", () => {
  it("should render input element", () => {
    render(<AddInput setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type in input", async () => {
    render(<AddInput setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    await user.type(inputElement, 'Go home')
    // fireEvent.change(inputElement, { target: { value: "Go home" } });
    expect(inputElement).toHaveValue("Go home");
  });
  it("should have empty input when add button clicked", () => {
    render(<AddInput setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../);
    const addButtonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Go home" } });
    fireEvent.click(addButtonElement);
    expect(inputElement).toHaveValue("");
  });
});
