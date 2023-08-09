import React from "react";
import { Card } from "react-bootstrap";
import UserBox from "../userbox";
import Content from "../content";

function CardDetail({ post }) {
  return (
    <Card.Body>
      <UserBox post={post} />
      <Content post={post} />
    </Card.Body>
  );
}

export default CardDetail;
