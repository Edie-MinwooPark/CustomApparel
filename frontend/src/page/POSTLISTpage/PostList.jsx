import React, { useState } from "react";
import { Container } from "./PostList.styled";
import CardComponent from "../../components/layout/card";
// import Button from "react-bootstrap/Button";
import Masonry from "react-masonry-css";
import Nav from "../NavPage/Nav";
import axios from "axios";
import { useQuery, useMutation } from "react-query";

// hashtag start
import { HashTagDiv, InsertButton } from "./PostList.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// hashtag end

const PROXY = process.env.REACT_APP_PROXY;

const fetchPost = async (hashTag) => {
  let url = `${PROXY}/post/posts`;

  if (hashTag) {
    url += `?hash_tag=${hashTag}`;
  }
  const { data } = await axios.get(url);

  return data;
};

function PostList() {
  // hashtag start
  const user_info = useSelector((state) => state.mypage.data);
  const navigator = useNavigate();
  const [hashtag, setHashtag] = useState([]);
  const [selectedHashTag, setSelectedHashTag] = useState(null);
  // hashtag end

  const {
    data: posts,
    isError,
    isLoading,
    error,
    refetch,
  } = useQuery(["posts", selectedHashTag], fetchPost, {
    onSuccess: (post) => {
      const allTags = post.reduce((acc, postValue) => {
        if (postValue.hash_tag !== "[]") {
          const tmp = JSON.parse(postValue.hash_tag);
          return [...acc, ...tmp];
        }
        return acc;
      }, []);

      setHashtag((hashtags) => {
        const changeValue = hashtags.map((tagObj) => Object.keys(tagObj)[0]);
        const mergeTag = [...changeValue, ...allTags];

        const tagCount = mergeTag.reduce((acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        }, {});

        const result = Object.entries(tagCount).map(([key, value]) => ({
          [key]: value,
        }));
        return result;
      });
    },
  });

  // 해시태그를 누르면 해당 해시태그를 포함한 글만 가져옴
  const handleHashtag = useMutation(
    (hash_tag) => {
      return axios.post(`${PROXY}/post/hashtag`, {
        hash_tag,
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleHashtagClick = (hashTag) => {
    setSelectedHashTag(hashTag);
    refetch();
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  // 해시태그가 많은 순서대로 정렬
  const sortHashag = hashtag.sort((a, b) => {
    const aValue = Object.values(a)[0];
    const bValue = Object.values(b)[0];
    return bValue - aValue;
  });

  // 글쓰기
  const handleInsert = () => {
    navigator("/postinsert");
  };

  // console.log("hashtag : ", hashtag);

  return (
    <>
      <Container>
        <Nav />
        {/* hashtag start */}
        <HashTagDiv>
          {sortHashag.map((e) => (
            <div className="hashtagCard">
              <div
                className="hashtagWrap"
                onClick={() => {
                  handleHashtag.mutate(Object.keys(e)[0]);
                  handleHashtagClick(Object.keys(e)[0]);
                }}
              >
                <div className="hashtagImg"></div>
                <div className="hashtagBox">
                  <div className="hashtagTxt">
                    <span>{`#` + Object.keys(e)[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* hashtag end */}
          {/* insertbutton start */}
          {user_info?.id ? (
            <InsertButton>
              <div className="InsertWrap" onClick={handleInsert}>
                <div className="InsertImg">
                  <img src="add.png" alt="" />
                </div>
                <div className="InsertBox">
                  <div className="InsertTxt">
                    <span>글쓰기</span>
                  </div>
                </div>
              </div>
            </InsertButton>
          ) : null}
        </HashTagDiv>
        {/* insertbutton end */}
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
