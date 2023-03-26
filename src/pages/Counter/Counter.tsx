import { Button, Col, Row, Typography } from "antd";
import React from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrementCount, incrementCount } from "../../redux/slices/count.slice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count);
  const onIncrement = () => {
    dispatch(incrementCount());
  };
  const onDecrement = () => {
    dispatch(decrementCount());
  };
  return (
    <>
      <Header title="Counter" />
      <Container>
        <Col style={{ margin: "auto" }}>
          <Typography.Title>{count.value}</Typography.Title>
          <Button onClick={onIncrement}>+</Button>
          <Button onClick={onDecrement}>-</Button>
        </Col>
        <Row>
          <Link to={"/"}>Back</Link>
        </Row>
      </Container>
    </>
  );
};

export default Counter;
