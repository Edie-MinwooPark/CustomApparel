import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmypageinfo } from "../../../features/mypageslice";
const PROXY = process.env.REACT_APP_PROXY;

export const Mypage = () => {
  const dispatch = useDispatch();
  const image2 = useSelector((state) => state.mypage.data);
  const [Image, setImage] = useState("");
  const [user_id, setuser_id] = useState("");
  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(getmypageinfo());
      console.log(data);

      setImage(`${PROXY}/${data.payload.profile_img}`);
      setuser_id(data.payload.user_id);
    };
    fetchData();
  }, [dispatch]);

  const [File, setFile] = useState();
  const fileInput = useRef(null);
  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      //화면에 프로필 사진 표시
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
    }
  };

  return (
    <div>
      <span>아이디:{user_id}</span>
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
