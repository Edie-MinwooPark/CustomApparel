import React from "react";
import Nav from "../NavPage/Nav";
import { MainWrap } from "../MainPage/Main.styled";

const Main = () => {
  return (
    <div>
      <Nav />
      <MainWrap>
        <div className="mainContainer"></div>
      </MainWrap>
    </div>
  );
};

export default Main;
