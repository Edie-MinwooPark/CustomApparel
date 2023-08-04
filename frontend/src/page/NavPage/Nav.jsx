import React from "react";
import { Navdiv } from "./Nav.styled";
import { Link } from 'react-router-dom';


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
            <li>PHOTO</li>
            <li>LOGIN</li>
          </ul>
        </div>
      </div>
    </Navdiv>

  );
};

export default Nav;
