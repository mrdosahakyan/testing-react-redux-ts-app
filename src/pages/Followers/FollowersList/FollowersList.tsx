import React from "react";
import { Col, Image, Row, Typography } from "antd";
import { useGetFollowersQuery } from "../../../redux/apiSlices/followers.slice";
import Container from "../../../components/Container/Container";
import { Link } from "react-router-dom";

const FollowersList = () => {
  const { data } = useGetFollowersQuery();

  return (
    <Container>
      {(data || []).map((follower, index) => {
        return (
          <Row key={index} role="contentinfo" gutter={[16, 16]} align="middle">
            <Col>
              <Image width={60} height={60} src={follower.picture} />
            </Col>
            <Col>
              <Typography.Title level={5}>{follower.fullName}</Typography.Title>

              <Typography.Paragraph strong italic>
                {follower.userName}
              </Typography.Paragraph>
            </Col>
          </Row>
        );
      })}
      <Row>
        <Link to={"/"}>Back</Link>
      </Row>
    </Container>
  );
};

export default FollowersList;
