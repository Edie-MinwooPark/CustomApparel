import React from "react";
import { Navdiv, NavLink } from "./Nav.styled";
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
              <NavLink to={"/custom"}> CUSTOM</NavLink>
            </li>
            <li>
              <NavLink to={"/photo"}> PHOTO</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}> LOGIN</NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}> SIGNUP</NavLink>
            </li>
            <li>
              <NavLink to={"/mypage"}> MYPAGE</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
