import React, { useRef, useState, useEffect } from "react";

export const Mypage = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [FIle, setFile] = useState();
  const fileInput = useRef(null);
  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div>
      <img
        src={Image}
        style={{ width: "500px", margin: "20px" }}
        size={200}
        onClick={() => {
          fileInput.current.click();
        }}
      ></img>
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg,impge/png,image/jpeg"
        name="profile_img"
        onChange={onChange}
        ref={fileInput}
      />
    </div>
  );
};
