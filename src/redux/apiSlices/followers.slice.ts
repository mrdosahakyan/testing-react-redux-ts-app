import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const FOLLOWERS_URL = "https://randomuser.me/api/?results=5";

export const followersApi = createApi({
  reducerPath: "followersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["Followers"],
  endpoints: (build) => ({
    getFollowers: build.query<any, void>({
      query() {
        return {
          url: `${FOLLOWERS_URL}`,
          method: "GET",
        };
      },
      transformResponse: (data: any) => {
        return data;
      },
      providesTags: ["Followers"],
    }),
  }),
});

export const { useGetFollowersQuery } = followersApi;
