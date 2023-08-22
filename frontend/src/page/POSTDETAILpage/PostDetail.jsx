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
  Comment_Box,
  More,
} from "./PostDetail.styled";
import axios from "axios";
import { LikeIcon } from "../../components/layout/userbox";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const PROXY = process.env.REACT_APP_PROXY;

const PostDetail = () => {
  const fetchPost = async (postId) => {
    const { data } = await axios.get(`${PROXY}/post/detail/${postId}`, {
      params: { id: postId },
      withCredential: true,
    });
    // console.log("hi");
    // console.log("detaildata??", data);
    return data;
  };

  const fetchComments = async (postId) => {
    const { data } = await axios.get(`${PROXY}/comment/comments/${postId}`);
    return data.comments;
  };
  const fetchReComments = async (commentId) => {
    const { data } = await axios.get(
      `${PROXY}/comment/recomments/${commentId}`
    );
    return data.recomments;
  };

  const [likes, setLikes] = useState(0);
  const [addComments, setAddComments] = useState(""); // 댓글
  const [recommentInput, setRecommentInput] = useState({}); // 대댓글

  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태를 추적하기 위한 state
  const [expanded, setExpanded] = useState(false);
  const user_info = useSelector((state) => state.mypage.data);
  const { postId } = useParams(); // URL로부터 postId 가져오기
  const {
    data: postdata,
    isLoading,
    refetch,
  } = useQuery(["postDetail", postId], () => fetchPost(postId), {
    onSuccess: (e) => {
      setCommentsList(e?.COMMENTs ? e.COMMENTs : "");

      if (e?.likes) setLikes(JSON.parse(e?.likes).length);
    },
  });

  useEffect(() => {
    if (!user_info || !postdata || postdata.likes.length == 0) return;
    let likesData = JSON.parse(postdata.likes);
    // console.log("postdata.likes", likesData);

    // console.log("user_info :", user_info);
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

      let likesData = postdata.likes ? JSON.parse(postdata.likes) : [];
      let updatedLikesData;
      const likeUserIndex = likesData.findIndex(
        (value) => value === user_info.id
      );
      // console.log(likeUserIndex);

      if (likeUserIndex !== -1) {
        // 이미 좋아요한 경우, 좋아요 취소 처리
        updatedLikesData = likesData.filter((value) => value !== user_info.id);
      } else {
        // 좋아요하지 않은 경우, 좋아요 추가 처리
        updatedLikesData = [...likesData, user_info.id];
      }

      // console.log(updatedLikesData);

      let url = `${PROXY}/post/postLikes/`;
      let action = likeUserIndex !== -1 ? "unlike" : "like";

      const response = await axios.post(url, {
        action: action,
        user_id: user_info.id,
        post_id: postId,
        post_title: postdata.post_title,
        post_content: postdata.post_content,
        likes: JSON.stringify(updatedLikesData),
      });

      // console.log(response);

      if (response.data.success) {
        // console.log("여기까진 오니?");
        setIsLiked(!isLiked); // 토글 상태 변경
        setLikes(updatedLikesData.length); // 좋아요 수 업데이트
        refetch();
      }
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };

  // 댓글추가
  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(`${PROXY}/comment/comments/`, {
        user_id: user_info.user_id,
        profile_img: user_info.profile_img,
        addComments,
        postId,
      });
      if (response.data.success) {
        // console.log("succccesssss?", response);
        // console.log("여기까지옴?");
        const updatedComments = await fetchComments(postId);

        // 기존댓글 + 대댓글 + 새댓글 합침
        const commetsWithRecomments = updatedComments.map((comment) => ({
          ...comment,
          RECOMMENTs:
            commentsList.find((c) => c.id === comment.id)?.RECOMMENTs || [],
        }));
        setCommentsList(commetsWithRecomments);
        setAddComments(""); // 댓글 입력 창 비우기
      }
    } catch (error) {
      console.log("댓글 추가 실패", error);
    }
  };
  // 댓글 목록을 저장하는 상태
  const [commentsList, setCommentsList] = useState([]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 대댓글 입력창 토글하는 함수
  const toggleRecommentInput = (commentId) => {
    setRecommentInput((prevInput) => ({
      ...prevInput,
      [commentId]: !prevInput[commentId],
    }));
  };

  // 대댓글 추가 함수
  const handleRecommentSubmit = async (commentId) => {
    try {
      const response = await axios.post(`${PROXY}/comment/recomments/`, {
        user_id: user_info.user_id,
        profile_img: user_info.profile_img,
        recomments: recommentInput[commentId],
        recomment_id: commentId, // 댓글id 넣기
        // postId,
      });

      if (response.data.success) {
        console.log("commentId :", commentId);
        const updatedComments = await fetchReComments(commentId);
        setCommentsList((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId
              ? { ...comment, RECOMMENTs: updatedComments }
              : comment
          )
        );
        setRecommentInput((prevInput) => ({
          ...prevInput,
          [commentId]: "",
        }));
        toggleRecommentInput(commentId); // 대댓글 입력창 닫기
      }
    } catch (error) {
      console.log("대댓글 추가 실패", error);
    }
  };

  // postdata 의 callbyuser_id 가
  return (
    <>
      <Nav />
      <ContentWrapper>
        {/* {isLoading ? <UserState user_info={user_info} /> : null} */}
        {/* 글쓴이 정보 전달해주기 */}
        <UserState user_info={postdata} />
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
            <Viewdiv className="comment_count">
              댓글 <strong>{commentsList.length}</strong>개
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
            {/* {commentsList.map((value, index) => (
              <li key={index} className="comment_content">
                {value.comments_content}
              </li>
            ))} */}

            {commentsList && commentsList.length > 0 ? (
              commentsList.map((comment) => (
                <div key={comment.id}>
                  <div className="comment_content">
                    {comment.comments_content}
                  </div>
                  <button onClick={() => toggleRecommentInput(comment.id)}>
                    대댓글 달기
                  </button>
                  {recommentInput[comment.id] && (
                    <>
                      <input
                        onChange={(e) =>
                          setRecommentInput({
                            ...recommentInput,
                            [comment.id]: e.target.value,
                          })
                        }
                      />
                      <button onClick={() => handleRecommentSubmit(comment.id)}>
                        등록
                      </button>
                    </>
                  )}
                  {/* 대댓글 목록 출력 */}
                  {console.log("대댓글 데이터 comment", comment.RECOMMENTs)}
                  {comment.RECOMMENTs &&
                    comment.RECOMMENTs.length > 0 &&
                    comment.RECOMMENTs.map((recomment) => (
                      <div key={recomment.id} className="recomment_content">
                        {recomment.recomments}
                      </div>
                    ))}
                </div>
              ))
            ) : (
              <div>댓글이 없습니다.</div>
            )}
            <input onChange={(e) => setAddComments(e.target.value)} />
            <button onClick={handleCommentSubmit}>입력</button>
          </Comment_Box>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostDetail;
