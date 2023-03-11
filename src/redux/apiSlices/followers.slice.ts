import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TFollower, TFollowerUi } from "../../data/types/Followers.type";

const FOLLOWERS_URL = "https://randomuser.me/api/?results=5";

export const followersApi = createApi({
  reducerPath: "followersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["Followers"],
  endpoints: (build) => ({
    getFollowers: build.query<TFollowerUi[], void>({
      query() {
        return {
          url: `${FOLLOWERS_URL}`,
          method: "GET",
        };
      },
      transformResponse: (data: { results: TFollower[] }) => {
        return (data.results || []).map((el) => ({
          picture: el.picture.large,
          userName: el.login.username,
          fullName: `${el.name.first} ${el.name.last}`,
        }));
      },
      providesTags: ["Followers"],
    }),
  }),
});

export const { useGetFollowersQuery } = followersApi;
