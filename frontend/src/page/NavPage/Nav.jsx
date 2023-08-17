import React, { useState, useEffect } from "react";
import { Navdiv, NavLink } from "./Nav.styled";
import { useDispatch } from "react-redux";
import { getmypageinfo } from "../..//features/mypageslice";

const Nav = () => {
  const dispatch = useDispatch();
  dispatch(getmypageinfo());
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
              {/* <NavLink to={"/login"}> {userloginstate}</NavLink> */}
              <NavLink to={"/login"}> login</NavLink>
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
