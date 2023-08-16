import React from "react";
import { Card } from "react-bootstrap";
import UserBox from "../userbox";
import Content from "../content";
const PROXY = process.env.REACT_APP_PROXY;

function CardComponent({ post }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={`${PROXY}` + post.post_img} />
      <Card.Body>
        <UserBox post={post} userID={post.user_id} />
        <Content post={post} />
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
