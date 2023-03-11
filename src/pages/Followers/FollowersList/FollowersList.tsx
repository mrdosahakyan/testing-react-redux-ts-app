import React from "react";
import { Col, Image, Row, Typography } from "antd";
import { useGetFollowersQuery } from "../../../redux/apiSlices/followers.slice";
import Container from "../../../components/Container/Container";

const FollowersList = () => {
  const { data } = useGetFollowersQuery();

  return (
    <Container>
      {(data?.results || []).map((follower: any) => {
        return (
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <Image width={60} height={60} src={follower.picture.large} />
            </Col>
            <Col>
              <Typography.Title level={5}>
                {follower.name.first} {follower.name.last}
              </Typography.Title>

              <Typography.Paragraph strong italic>
                {follower.login.username}
              </Typography.Paragraph>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default FollowersList;
