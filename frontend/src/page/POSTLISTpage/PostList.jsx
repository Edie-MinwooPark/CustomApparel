import React from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import Nav from "../NavPage/Nav";
import axios from "axios";
import { useQuery } from "react-query";

const PROXY = process.env.REACT_APP_PROXY;

const fetchPost = async () => {
  const { data } = await axios.get(`${PROXY}/post/posts`);
  // const { userdata } = await axios.get("http://localhost:4000/user/viewUser");
  // console.log("받은데이터", userdata);
  console.log("data :", data);
  return data;
};

function PostList() {
  const {
    data: posts,
    isError,
    isLoading,
    error,
  } = useQuery("posts", fetchPost);
  console.log("posts :", posts);
  console.log("err", error);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <Container>
        <Nav />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post) => (
            <CardComponent post={post}></CardComponent>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export default PostList;
