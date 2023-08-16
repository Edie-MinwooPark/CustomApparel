import React, { useEffect, useState } from "react";
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

const PostDetail = (post) => {
  // 게시글 가져오기
  const fetchPost = async (postId) => {
    const { data } = await axios.get(
      `http://localhost:4000/post/detail/${postId}`,
      { params: { id: postId }, withCredential: true }
    );
    console.log(data, "detaildata");
    return data;
  };

  // 댓글가져오기
  const [commentsList, setCommentsList] = useState();
  const fetchComments = async (postId) => {
    const { data } = await axios.get(
      `http://localhost:4000/comment/comments/${postId}`
    );
    return data.comments;
  };

  const [comments, setComments] = useState(post.comments || 0); // 댓글 갯수
  const [likes, setLikes] = useState(post.likes || 0);
  const [addComments, setAddComments] = useState(post.comments); // 댓글

  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state
  const [expanded, setExpanded] = useState(false);
  const user_info = useSelector((state) => state.mypage.data);
  console.log("user_info", user_info);

  const { postId } = useParams(); // URL로부터 postId 가져오기
  const { data: postdata, isLoading } = useQuery(
    ["postDetail", postId],
    () => fetchPost(postId),
    {
      onSuccess: (e) => setCommentsList(e.COMMENTs),
    }
  );
  useEffect(() => {
    let likesData = JSON.parse(postdata.likes);
    const likeUser = likesData.find((value) => value == user_info.id);

    if (likeUser) {
      setIsLiked(!isLiked);
      setLikes(isLiked ? likes - 1 : likes + 1);
    }
  }, []);

  // 댓글 목록을 저장하는 상태
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // const { data: commentsData, isLoading: commentsLoading } = useQuery(
  //   ["postComments", postId],
  //   () => fetchComments(postId)
  // );

  // if (commentsLoading) {
  //   return <div>Loading...</div>;
  // }
  // console.log("data?", data);

  const handleLike = async () => {
    try {
      let likesData = JSON.parse(postdata.likes);
      const likeUser = likesData.find((value) => value == user_info.id);

      //   const response = await axios.post(
      //     "http://localhost:4000/post/postLikes/",
      //     {
      //       likes: user_info.id,
      //       post_id : postId
      //       // post_title: postdata.post_title,
      //       // post_content: postdata.post_content,
      //     }
      //   );
      if (likeUser) {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
      }
    } catch (error) {
      console.error("Failed to toggle like", error);
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
      console.log("succccesssss?", response);
      if (response.data.success) {
        console.log("여기까지옴?");
        const updatedComments = await fetchComments(postId);
        setCommentsList(updatedComments);
      }
    } catch (error) {
      console.log("댓글 추가 실패", error);
    }
  };
  // const test = () => {
  //   setAddComments(addComments);
  //   console.log(addComments);
  // };

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
              댓글 <strong>{commentsList?.length}</strong>개
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
            {commentsList &&
              commentsList.map(
                (value) => (
                  <li className="comment_content">{value.comments_content}</li>
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
