import React, { FC } from "react";
import { Typography } from "antd";

type THeaderProps = {
  title: string;
};

const Header: FC<THeaderProps> = ({ title }) => {
  return <Typography.Title>{title}</Typography.Title>;
};

export default Header;
