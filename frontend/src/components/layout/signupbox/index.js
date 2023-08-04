import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserinfo } from "../../../features/mainslice";
const PROXY = process.env.REACT_APP_PROXY;

const Sign = () => {
  const dispatch = useDispatch();

  const [Nick, setNick] = useState("");
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState(0);

  const handleIdInput = (e) => {
    console.log(e.target.value);
    setNick(e.target.value);
  };
  const handlePwInput = (e) => {
    console.log(e.target.value);
    setUser_id(e.target.value);
  };
  const handleNickInput = (e) => {
    console.log(e.target.value);
    setUser_pw(e.target.value);
  };
  const handleSubmit = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const userIDRegex = /^[a-zA-Z0-9]{5,}$/;

    if (!passwordRegex.test(user_pw)) {
      alert(
        "비밀번호는 소문자 하나, 대문자 하나, 숫자 하나 이상을 포함하여 8자 이상이어야 합니다."
      );
      return;
    }

    if (!userIDRegex.test(user_id)) {
      alert("아이디는 영문과 숫자로만 구성된 5자 이상이어야 합니다. ");
      return;
    }

    // Create the form data object
    const form = {
      Nick,
      user_id,
      user_pw,
    };

    // Call the setUserinfo thunk with the form data
    console.log("handleSubmit 작동함");
    dispatch(setUserinfo(form));
  };

  return (
    <div>
      <label htmlFor="Nick">이름</label>
      <input onChange={handleNickInput} />
      <br />
      <label htmlFor="user_id">아이디</label>
      <input onChange={handleIdInput} />
      <br />
      <label htmlFor="user_pw">비밀번호</label>
      <input onChange={handlePwInput} />
      <br />
      <button onClick={handleSubmit} id="uploadBtn">
        {" "}
        회원가입{" "}
      </button>
    </div>
  );
};

export default Sign;
