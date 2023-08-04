import React from "react";
import { MainWrap } from "../MainPage/Main.styled";
import Nav from "../NavPage/Nav";

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
