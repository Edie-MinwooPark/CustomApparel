import React from "react";
import { MainNavdiv, NavLink } from "./MainNav.styled";

const MainNav = () => {
  return (
    <MainNavdiv>
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
          </ul>
        </div>
      </div>
    </MainNavdiv>
  );
};

export default MainNav;
