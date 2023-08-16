import React, { useState, useEffect } from "react";
import { Navdiv, NavLink } from "./Nav.styled";
import { useDispatch } from "react-redux";
import { getmypageinfo } from "../../features/mypageslice";

const Nav = () => {
  const dispatch = useDispatch();
  const [userloginstate, setuserloginstate] = useState(false);
  useEffect(() => {
    // getmypageinfo 액션을 디스패치하고, 반환 함수를 사용하여 data 변수를 업데이트
    const fetchData = async () => {
      const data = await dispatch(getmypageinfo());
      // console.log(data);
      // console.log(
      //   data.payload.id ? `LOGIN:${data.payload.Nick}` : "로그인하기"
      // );
      setuserloginstate(
        data.payload.id ? `LOGIN:${data.payload.Nick}` : "로그인하기"
      );
    };
    fetchData();
  }, [dispatch]);
  return (
    <Navdiv>
      <div className="navContainer">
        <div className="logo">
          <span>
            <NavLink to={"/"}>CUSTOMAPPAREL</NavLink>
          </span>
        </div>
        <div className="menutabs">
          <ul>
            <li>
              <NavLink to={"/custom"}> CUSTOM</NavLink>
            </li>
            <li>
              <NavLink to={"/photo"}> PHOTO</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}> {userloginstate}</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}> SIGNUP</NavLink>
            </li>
            <li>
              <NavLink to={"/mypage"}> MYPAGE</NavLink>
            </li>

            <li>
              <NavLink to={"/cartp"}> CART</NavLink>
            </li>
            <li>
              <NavLink to={"/paymentdetail"}> PAYMENTDETAIL</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
