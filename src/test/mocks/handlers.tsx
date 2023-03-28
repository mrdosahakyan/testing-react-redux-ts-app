import { rest } from "msw";
import { FOLLOWERS_URL } from "../../redux/apiSlices/followers.slice";
import { followersMockData } from "./Followers.data";

export const handlers = [
  // Handles a GET /user request
  rest.get(FOLLOWERS_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(followersMockData));
  }),
];
