import React, { useState } from "react";
import { PostUpdateWrap, ProfileImage, Text } from "./PostUpdate.styled";
import Nav from "../NavPage/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import UserState from "../../components/layout/userstate";
import ImageBox from "../../components/layout/imagebox";
import { useSelector } from "react-redux";

const PROXY = process.env.REACT_APP_PROXY;

const PostUpdate = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.mypage);
  const { user_info } = useLocation().state;
  const userInfo = user_info.USER;
  const postInfo = user_info;
  const [PhotoformData, setPhotoFormData] = useState(new FormData());
  const [Image, setImage] = useState(postInfo.post_img);
  const [imageName, setImageName] = useState();
  const [content, setContent] = useState();
  const [formData, setFormData] = useState(new FormData());
  const [imageFile, setImageFile] = useState();

  // if (data === "다시 로그인해주세요") {
  //   alert("로그인 해주세요.");
  //   return navigate("/");
  // }

  // 이미지 미리보기
  const handlePreview = (e) => {
    console.log("e.target.files[0] : ", e.target.files[0].name);
    setImageName(e.target.files[0].name);
    setImageFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 수정완료 버튼
  const handleUpdate = () => {
    console.log("imageName : ", imageName);
    console.log("content : ", content);

    formData.append("image", imageFile);

    setFormData(formData);

    // formdata는 console.log를 찍으면 비어있는것 처럼 보이기 떄문에
    // for문을 돌려 확인해야함
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <div>
      <Nav />
      <PostUpdateWrap>
        {/*  */}
        <UserState user_info={postInfo} />
        {/*  */}
        <ImageBox img={Image} />
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg"
          onChange={handlePreview}
        />
        {/*  */}
        <Text>
          <input
            type="text"
            placeholder={postInfo.post_content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>수정</button>
        </Text>
      </PostUpdateWrap>
    </div>
  );
};

export default PostUpdate;
