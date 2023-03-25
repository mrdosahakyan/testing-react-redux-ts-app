import React from "react";
import FollowersList from "./FollowersList";
import { render, screen } from "../../../test.utils";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => null,
      removeListener: () => null,
    };
  },
});

describe("Follower list test", () => {
  it("should render title prop correct", async () => {
    render(<FollowersList />);
    const followerCradElement = await screen.findAllByRole("contentinfo");
    expect(followerCradElement.length).toBe(5);
  });
});
