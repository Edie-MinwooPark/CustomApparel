import React from "react";
import { MainWrap } from "../MainPage/Main.styled";
import MainNav from "../NavPage/MainNav";
import TestBackgroundImg from "./testimg.png";

const Main = () => {
  return (
    <div>
      <MainNav />
      <MainWrap>
        <div className="mainContainer">
          <img src={TestBackgroundImg} alt="" />
        </div>
      </MainWrap>
    </div>
  );
};

export default Main;
