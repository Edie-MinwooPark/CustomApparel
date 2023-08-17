import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mypage } from "../../components/layout/mypagebox";
import Nav from "../NavPage/Nav";

const MYpage = () => {
  return (
    <div>
      <Nav />
      <Mypage />
    </div>
  );
};

export default MYpage;
