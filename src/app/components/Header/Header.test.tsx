import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header test", () => {
  it("heder should render title prop correct", () => {
    render(<Header title="Todos" />);
    const headerElement = screen.getByText("Todos");
    expect(headerElement).toBeVisible();
  });
});
