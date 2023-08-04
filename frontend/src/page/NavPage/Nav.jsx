import React from "react";
import { Navdiv } from "./Nav.styled";

const Nav = () => {
  return (
    <Navdiv>
      <div className="navContainer">
        <div className="logo">
          <span>CUSTOMAPPAREL</span>
        </div>
        <div className="menutabs">
          <ul>
            <li>CUSTOM</li>
            <li>PHOTO</li>
            <li>LOGIN</li>
          </ul>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
