import React from "react";
import { render, screen } from "../../test.utils";
import Counter from "./Counter";
import "../../test/mocks/jestGlobalMocks";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("should render initial state", () => {
    render(<Counter />);
    const titleElement = screen.getByTestId("counter-text");
    expect(titleElement).toHaveTextContent("0");
  });
  it("should increment count", async () => {
    render(<Counter />);
    const titleElement = screen.getByTestId("counter-text");
    const incrementButton = screen.getByRole("button", { name: "+" });
    await userEvent.dblClick(incrementButton);
    expect(titleElement).toHaveTextContent("2");
  });
  it("should decrement count", async () => {
    render(<Counter />);
    const titleElement = screen.getByTestId("counter-text");
    const incrementButton = screen.getByRole("button", { name: "-" });
    await userEvent.click(incrementButton);
    expect(titleElement).toHaveTextContent("-1");
  });
});
