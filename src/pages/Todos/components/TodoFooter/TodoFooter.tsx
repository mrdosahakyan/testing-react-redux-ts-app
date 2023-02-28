import React, { FC } from "react";
import { Row } from "antd";

type TTodoFooterProps = {
  numberOfIncompleteTasks: number;
};

const TodoFooter: FC<TTodoFooterProps> = ({ numberOfIncompleteTasks }) => {
  return (
    <Row justify="space-between">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <span>Followers</span>
    </Row>
  );
};

export default TodoFooter;
