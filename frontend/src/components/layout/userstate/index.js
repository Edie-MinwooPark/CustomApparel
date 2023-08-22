import React from "react";
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
  // const userImg = proImg;
  console.log("userProfileImage :", user_info);
  const userInfo = user_info.USER;
  const postInfo = user_info;
  console.log("postInfo", postInfo);
  console.log("img", userInfo.profile_img);

  return (
    <UserStateBox>
      <ProfileImageBox href={`/social/users/@${userInfo.user_id}`}>
        <StyledProfileImage
          src={`${PROXY}` + userInfo.profile_img}
          alt="프로필 이미지"
        />
        <ProfileInfo href={`/social/users/@${userInfo.user_id}`}>
          <StyledUserName>{userInfo.user_id}</StyledUserName>
          <StyledUploadTime>{postInfo.createdAt}</StyledUploadTime>
        </ProfileInfo>
      </ProfileImageBox>
      {postInfo.id == user_info.id ? (
        <div>
          <StyleButton>수정</StyleButton>
          <StyleButton>삭제</StyleButton>
        </div>
      ) : null}
    </UserStateBox>
  );
};

export default UserState;
