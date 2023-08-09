import React from "react";
import { Card } from "react-bootstrap";
import CardDetail from "../cardDetail"; // 상세 내용을 표시하는 컴포넌트입니다.

function CardComponent({ post }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={post.imgSrc} />
      <CardDetail post={post} />
    </Card>
  );
}

export default CardComponent;
