import React from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import Nav from "../NavPage/Nav";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchPost = async () => {
  const { data } = await axios.get("http://localhost:4000/post/posts");
  // const { userdata } = await axios.get("http://localhost:4000/user/viewUser");
  // console.log("받은데이터", userdata);
  return data;
};

function PostList() {
  const { data: posts, isError, isLoading } = useQuery("posts", fetchPost);

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
            <Link to={`/posts/${post.id}`} key={post.user_id}>
              <CardComponent post={post}></CardComponent>
            </Link>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export default PostList;
