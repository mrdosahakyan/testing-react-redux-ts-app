import React from "react";
import Header from "../../components/Header/Header";
import { useGetFollowersQuery } from "../../redux/apiSlices/followers.slice";

const Followers = () => {
  const { data } = useGetFollowersQuery();
  console.log({ data });

  return <Header title="Followers" />;
};

export default Followers;
