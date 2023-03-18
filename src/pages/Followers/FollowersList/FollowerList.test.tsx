import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FollowersList from "./FollowersList";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => null,
      removeListener: () => null,
    };
  },
});

const MockFollowerList = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    </Provider>
  );
};

describe("Follower list test", () => {
  it("should render title prop correct", async () => {
    render(<MockFollowerList />);
    const followerCradElement = await screen.findAllByRole("contentinfo");
    expect(followerCradElement.length).toBe(5);
  });
});
