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
import { useSelector } from "react-redux";

const fetchPost = async (postId) => {
  const { data } = await axios.get(
    `http://localhost:4000/post/detail/${postId}`,
    { params: { id: postId }, withCredential: true }
  );

  console.log(data, "detaildata");
  return data;
};
// 이제 상세게시글 데이터만 뿌려주면 됨

const PostDetail = (post) => {
  const { postId } = useParams(); // URL로부터 postId 가져오기

  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || 0); // 댓글
  const [addComments, setAddComments] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state

  const [expanded, setExpanded] = useState(false);
  const user_info = useSelector((state) => state.mypage.data);
  console.log("user_info", user_info);
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
  // 댓글 추가 기능
  // input value, user 정보
  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/comment/comments/",
        {
          user_id: user_info.user_id,
          profile_img: user_info.profile_img,
          addComments,
          postId,
        }
      );
    } catch (error) {}
  };
  const test = () => {
    setAddComments(addComments);
    console.log(addComments);
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
              좋아요 <strong>{postdata.likes}</strong>개
            </div>
            <Viewdiv className="comment_count">
              댓글 <strong>{postdata.COMMENTs.length}</strong>개
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
            {postdata.COMMENTs.map(
              (value) => (
                <div className="comment_content">{value.comments_content}</div>
              )
              // console.log(value.comments_content)
            )}
            <input onChange={(e) => setAddComments(e.target.value)}></input>
            <button onClick={handleCommentSubmit}>입력</button>
          </Comment_Box>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostDetail;