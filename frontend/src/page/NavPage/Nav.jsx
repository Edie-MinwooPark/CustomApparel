import React from "react";
import { Navdiv } from "./Nav.styled";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navdiv>
      <div className="navContainer">
        <div className="logo">
          <span>CUSTOMAPPAREL</span>
        </div>
        <div className="menutabs">
          <ul>
            <li>
              <Link to={"/custom"}> CUSTOM</Link>
            </li>
            <li>
              <Link to={"/photo"}> PHOTO</Link>
            </li>
            <li>
              <Link to={"/login"}> LOGIN</Link>
            </li>
            <li>
              <Link to={"/signup"}> SIGNUP</Link>
            </li>
            <li>
              <Link to={"/mypage"}> MYPAGE</Link>
            </li>
          </ul>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
