import React, { useState } from "react";
import Nav from "../NavPage/Nav";
import UserState from "../../components/layout/userstate";
import ImageBox from "../../components/layout/imagebox";
import {
  ContentWrapper,
  StyledLikeIconWrapper,
  ContentBox,
  CountContainer,
  Viewdiv,
  Text,
  Text_Span,
  More,
  Comment_Box,
} from "./PostDetail.styled";
import axios from "axios";
import { LikeIcon } from "../../components/layout/userbox";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchPost = async (postId) => {
  const { data } = await axios.get(
    `http://localhost:4000/post/posts/${postId}`
  );
  console.log(data, "detaildata");
  return data;
};
// 이제 상세게시글 데이터만 뿌려주면 됨

const PostDetail = (post) => {
  const { postId } = useParams(); // URL로부터 postId 가져오기

  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || 0); // 댓글
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state

  const [expanded, setExpanded] = useState(false);

  const { data: postdata, isLoading } = useQuery(["postDetail", postId], () =>
    fetchPost(postId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleLike = () => {
    setIsLiked(!isLiked); // 좋아요 상태 토글
    if (isLiked) {
      setLikes(likes - 1); // 좋아요 취소 시, 숫자 감소
    } else {
      setLikes(likes + 1); // 좋아요 시, 숫자 증가
    }
  };

  const content = "여기에 본문 내용을 넣어주세요오오";

  return (
    <>
      <Nav />
      <ContentWrapper>
        <UserState />
        <ImageBox />
        <ContentBox>
          <StyledLikeIconWrapper
            aria-label="좋아요"
            role="button"
            onClick={handleLike}
          >
            <LikeIcon liked={isLiked} width="30px" />
          </StyledLikeIconWrapper>
          <CountContainer>
            <div className="like_count">
              좋아요 <strong>{likes}</strong>개
            </div>
            {/* 이 부분은 코멘트 수를 나타낼 때 사용하실 수 있습니다. */}
            <Viewdiv className="comment_count">
              댓글 <strong>{comments}</strong>개
            </Viewdiv>
          </CountContainer>
          <Text
            expanded={expanded}
            onClick={() =>
              content.length > 10 && !expanded && setExpanded(true)
            }
          >
            <Text_Span expanded={expanded}>
              {content.slice(0, expanded ? content.length : 10)}
            </Text_Span>
            {content.length > 10 && !expanded && <More>더보기</More>}
          </Text>
          <Comment_Box>
            <div className="comment_content">댓글</div>
          </Comment_Box>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostDetail;
