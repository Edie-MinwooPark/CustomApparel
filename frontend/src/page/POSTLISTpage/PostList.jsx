import React from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import Nav from "../NavPage/Nav";

import dog1 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/1.jpeg";
import dog2 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/2.jpeg";
import dog3 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/3.jpeg";
import dog4 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/4.jpeg";
import dog5 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/5.jpeg";
import dog6 from "/Users/yoodonghee/Desktop/nike/frontend/src/page/POSTLISTpage/6.jpeg";

// 임시 데이터
const postData = [
  {
    id: 1,
    title: "제목1",
    imgSrc: dog1,
    content: "내용1",
  },
  {
    id: 2,
    title: "제목2",
    imgSrc: dog2,
    content: "내용2",
  },
  {
    id: 3,
    title: "제목3",
    imgSrc: dog3,
    content: "내용3",
  },
  {
    id: 4,
    title: "제목4",
    imgSrc: dog4,
    content: "내용4",
  },
  {
    id: 5,
    title: "제목5",
    imgSrc: dog5,
    content: "내용5",
  },
  {
    id: 6,
    title: "제목6",
    imgSrc: dog6,
    content: "내용6",
  },
];
function PostList() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Container>
        <Nav />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {postData.map((post) => (
            <CardComponent post={post} key={post.id}></CardComponent>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export default PostList;
