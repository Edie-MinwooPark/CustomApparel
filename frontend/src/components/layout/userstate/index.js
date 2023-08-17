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

const UserState = ({ user_info }) => {
  // const userImg = proImg;
  console.log("userProfileImage :", user_info);

  return (
    <UserStateBox>
      <ProfileImageBox href={`/social/users/@${user_info.user_id}`}>
        <StyledProfileImage src={user_info.profile_img} alt="프로필 이미지" />
        <ProfileInfo href={`/social/users/@${user_info.user_id}`}>
          <StyledUserName>{user_info.user_id}</StyledUserName>
          <StyledUploadTime>{user_info.updatedAt}</StyledUploadTime>
        </ProfileInfo>
      </ProfileImageBox>
      <FollowButton>팔로우</FollowButton>
    </UserStateBox>
  );
};

export default UserState;
