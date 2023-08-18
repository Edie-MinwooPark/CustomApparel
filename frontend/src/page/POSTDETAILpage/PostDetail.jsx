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

const PROXY = process.env.REACT_APP_PROXY;

const PostDetail = (post) => {
  // 게시글 가져오기
  const fetchPost = async (postId) => {
    const { data } = await axios.get(`${PROXY}/post/detail/${postId}`, {
      params: { id: postId },
      withCredential: true,
    });
    console.log(data, "detaildata");
    return data;
  };

  // 댓글가져오기
  const [commentsList, setCommentsList] = useState();
  const fetchComments = async (postId) => {
    const { data } = await axios.get(`${PROXY}/comment/comments/${postId}`);
    return data.comments;
  };

  const [likes, setLikes] = useState(post.likes || 0);
  const [addComments, setAddComments] = useState(post.comments); // 댓글

  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state
  const [expanded, setExpanded] = useState(false);
  const user_info = useSelector((state) => state.mypage.data);
  const { postId } = useParams(); // URL로부터 postId 가져오기
  const {
    data: postdata,
    isLoading,
    refetch,
  } = useQuery(["postDetail", postId], () => fetchPost(postId), {
    onSuccess: (e) => setCommentsList(e?.COMMENTs ? e.COMMENTs : ""),
  });

  useEffect(() => {
    if (!user_info || !postdata || postdata.likes.length == 0) return;
    let likesData = JSON.parse(postdata.likes);

    console.log("user_info :", user_info);
    const likeUser = likesData.find((value) => value == user_info.id);

    if (likeUser) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [postdata, user_info]);

  const handleLike = async () => {
    try {
      if (isLoading) {
        return;
      }

      let likesData = JSON.parse(postdata.likes);
      const likeUser = likesData.find((value) => value == user_info.id);

      let url = `${PROXY}/post/postLikes/`;
      let action = likeUser ? "unlike" : "like"; // like 또는 unlike를 결정

      const response = await axios.post(url, {
        action: action, // 서버에서 이 action을 확인하여 좋아요 추가 또는 취소 처리
        user_id: user_info.id,
        post_id: postId,
        post_title: postdata.post_title,
        post_content: postdata.post_content,
      });

      if (response.data.success) {
        console.log("여기까진 오니?");
        setIsLiked((prevState) => !prevState);
        setLikes((prevLikes, prevState) =>
          prevState ? prevLikes - 1 : prevLikes + 1
        );
        refetch();
      }
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };

  // 댓글 추가 기능
  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(`${PROXY}/comment/comments/`, {
        user_id: user_info.user_id,
        profile_img: user_info.profile_img,
        addComments,
        postId,
      });
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
  // 댓글 목록을 저장하는 상태
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <ContentWrapper>
        {isLoading ? <UserState user_info={user_info} /> : null}
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
              좋아요 <strong>{postdata.likes.length}</strong>개
            </div>
            <Viewdiv className="comment_count">
              댓글 <strong>{commentsList?.length}</strong>개
            </Viewdiv>
          </CountContainer>
          <Text
            expanded={expanded}
            onClick={() =>
              postdata.post_content.length > 10 &&
              !expanded &&
              setExpanded(true)
            }
          >
            <Text_Span expanded={expanded}>
              {postdata.post_content.slice(
                0,
                expanded ? postdata.post_content.length : 10
              )}
            </Text_Span>
            {postdata.post_content.length > 10 && !expanded && (
              <More>더보기</More>
            )}
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
