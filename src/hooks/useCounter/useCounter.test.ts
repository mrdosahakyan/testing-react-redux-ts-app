import React from "react";
import { renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe("useCounter custom hook test", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("should accept and render correct initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });
  test("should increment count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
  test("should decrement count", () => {
    const { result, rerender } = renderHook(useCounter);
    result.current.decrement();
    rerender();
    expect(result.current.count).toBe(-1);
  });
});
