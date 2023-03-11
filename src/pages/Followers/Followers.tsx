import React from "react";
import Header from "../../components/Header/Header";
import FollowersList from "./FollowersList/FollowersList";

const Followers = () => {
  return (
    <>
      <Header title="Followers" />
      <FollowersList />
    </>
  );
};

export default Followers;
