import React, { FC } from "react";
import { Row } from "antd";
import { Link } from "react-router-dom";

export type TTodoFooterProps = {
  numberOfIncompleteTasks: number;
};

const TodoFooter: FC<TTodoFooterProps> = ({ numberOfIncompleteTasks }) => {
  return (
    <Row justify="space-between">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to={'/followers'} >Followers</Link >
    </Row>
  );
};

export default TodoFooter;
