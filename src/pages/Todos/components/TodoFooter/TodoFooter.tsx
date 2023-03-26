import React, { FC } from "react";
import { Col, Row } from "antd";
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
      <Row gutter={[16, 16]}>
        <Col>
          <Link to={"/followers"}>Followers</Link>
        </Col>
        <Col>
          <Link to={"/counter"}>Counter</Link>
        </Col>
      </Row>
    </Row>
  );
};

export default TodoFooter;
