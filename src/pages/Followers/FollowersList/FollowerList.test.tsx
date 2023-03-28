import React from "react";
import FollowersList from "./FollowersList";
import { render, screen } from "../../../test.utils";

describe("Follower list test", () => {
  it("should render 1 items", async () => {
    render(<FollowersList />);
    const followerCradElement = await screen.findAllByRole("contentinfo");
    expect(followerCradElement.length).toBe(1);
  });
});
