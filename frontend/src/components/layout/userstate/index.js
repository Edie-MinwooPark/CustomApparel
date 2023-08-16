import React from "react";
import {
  UserStateBox,
  ProfileImageBox,
  StyledProfileImage,
  ProfileInfo,
  StyledUserName,
  StyledUploadTime,
  FollowButton,
} from "./styled";
import proImg from "./5.jpeg";

const UserState = ({ userProfileImage, userName, uploadTime }) => {
  const userImg = proImg;
  return (
    <UserStateBox>
      <ProfileImageBox href={`/social/users/@${userName}`}>
        <StyledProfileImage src={userImg} alt="프로필 이미지" />
        <ProfileInfo href={`/social/users/@${userName}`}>
          <StyledUserName>{(userName = "닉네임")}</StyledUserName>
          <StyledUploadTime>{(uploadTime = "1시간전")}</StyledUploadTime>
        </ProfileInfo>
      </ProfileImageBox>
      <FollowButton>팔로우</FollowButton>
    </UserStateBox>
  );
};

export default UserState;
