import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  UserStateBox,
  ProfileImageBox,
  StyledProfileImage,
  ProfileInfo,
  StyledUserName,
  StyledUploadTime,
  StyleButton,
} from "./styled";

const PROXY = process.env.REACT_APP_PROXY;

const UserState = ({ user_info }) => {
  const navigate = useNavigate();
  // const userImg = proImg;
  // console.log("userProfileImage :", user_info);
  const userInfo = user_info.USER;
  const postInfo = user_info;
  // console.log("postInfo", postInfo);
  // console.log("img", userInfo.profile_img);

  const user_id = useSelector((state) => state.mypage.data)?.id;
  // console.log("user_id : ", user_id);

  // 게시글 수정
  const handleUpdate = () => {
    navigate(`/update/${postInfo.id}`, {
      state: {
        user_info,
      },
    });
  };

  // 게시글 삭제
  const handleDelete = () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserStateBox>
      <ProfileImageBox>
        {/* <ProfileImageBox href={`/social/users/@${userInfo.user_id}`}> */}
        <StyledProfileImage
          src={`${PROXY}/` + userInfo.profile_img}
          alt="프로필 이미지"
        />
        <ProfileInfo>
          {/* <ProfileInfo href={`/social/users/@${userInfo.user_id}`}> */}
          <StyledUserName>{userInfo.user_id}</StyledUserName>
          <StyledUploadTime>{postInfo.createdAt}</StyledUploadTime>
        </ProfileInfo>
      </ProfileImageBox>
      {postInfo.callbyuser_id == user_id ? (
        <div>
          <StyleButton onClick={handleUpdate}>수정</StyleButton>
          <StyleButton onClick={handleDelete}>삭제</StyleButton>
        </div>
      ) : null}
    </UserStateBox>
  );
};

export default UserState;
