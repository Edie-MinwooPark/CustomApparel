import React from "react";
import Nav from "../NavPage/Nav";
import { MainWrap } from "../MainPage/Main.styled";
import TestBackgroundImg from "./testimg.png";

const Main = () => {
  return (
    <div>
      <Nav />
      <MainWrap>
        <div className="mainContainer">
          <img src={TestBackgroundImg} alt="" />
        </div>
      </MainWrap>
    </div>
  );
};

export default Main;
