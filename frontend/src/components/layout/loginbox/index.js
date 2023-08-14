import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trylogininfo } from "../../../features/mainslice";

const Loginform = () => {
  const dispatch = useDispatch();

  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const userdata = useSelector((state) => state.user.data);

  const handleIdInput = (e) => {
    console.log(e.target.value);

    setUser_id(e.target.value);
  };
  const handlePwInput = (e) => {
    console.log(e.target.value);
    setUser_pw(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("로그인버튼");
    dispatch(trylogininfo({ user_id, user_pw }));
  };
  useEffect(() => {
    console.log("userdata", userdata);
  }, [handleSubmit]);
  return (
    <div>
      <label htmlFor="user_id">아이디</label>
      <input onChange={handleIdInput} />
      <br />
      <label htmlFor="user_pw">비밀번호</label>
      <input onChange={handlePwInput} />
      <button onClick={() => handleSubmit()} id="uploadBtn">
        {" "}
        로그인{" "}
      </button>
    </div>
  );
};

export default Loginform;
