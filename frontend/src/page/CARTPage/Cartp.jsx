import React from "react";
import Cart from "../../components/layout/paymentbox/cart";
import MainNav from "../NavPage/MainNav";
import { MainWrap } from "../MainPage/Main.styled";

const Cartp = () => {
  return (
    <div>
      <MainNav />
      <MainWrap>
        <Cart />
      </MainWrap>
    </div>
  );
};

export default Cartp;
