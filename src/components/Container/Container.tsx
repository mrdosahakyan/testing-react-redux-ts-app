import React, { FC, ReactNode } from "react";
import { SContainer } from "./Container.style";

type TContainerProps = {
  children: ReactNode;
};

const Container: FC<TContainerProps> = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
