import React from "react";
import { Card } from "react-bootstrap";
import UserBox from "../userbox";
import Content from "../content";

function CardComponent({ post }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={post.imgSrc} />
      <Card.Body>
        <UserBox post={post} />
        <Content post={post} />
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
