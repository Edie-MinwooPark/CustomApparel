import React, { useState, useEffect } from "react";
import MainNav from "../NavPage/MainNav";
import { CustomWrap, CustomSideWrap, ColorPallet } from "./Custom.styled";
import CustomPopup from "./CustomPopup";

const Custom = () => {
  const [product, setProduct] = useState(false);
  const [design, setDesign] = useState(false);
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");

  // 팝업창 크고 켜기
  function handleProduct() {
    setProduct(!product);
    console.log(product);
  }
  return (
    <div>
      {/* 팝업창이 나오는 부분  */}
      {product ? <CustomPopup data={handleProduct} /> : null}
      <MainNav />
      <CustomWrap>
        <div className="customMainWrap">
          <div className="customMain"></div>
        </div>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
        <CustomSideWrap>
          <div className="customSide">
            <div className="sideTitle">
              <span>개쩌는 민우의 나이키 티셔츠</span>
              <span>9,000KRW</span>
              <div className="changeProductBtn" onClick={handleProduct}>
                changeProduct
              </div>
            </div>
            <div className="sideColor">
              <span>색상 - {color}</span>
              <ul>
                {/* 색깔별로 원을 생성함 나중에 map 돌릴 부분*/}
                <ColorPallet bgColor={"white"} />
                <ColorPallet bgColor={"red"} />
                <ColorPallet bgColor={"orange"} />
                <ColorPallet bgColor={"yellow"} />
                <ColorPallet bgColor={"green"} />
                <ColorPallet bgColor={"blue"} />
                <ColorPallet bgColor={"navy"} />
              </ul>
            </div>
            <div className="sideSize">
              <span>사이즈</span>
              <ul>
                {/* 사이즈별 맵 돌릴 예정? */}
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
                <li>3XL</li>
              </ul>
            </div>
            <div className="delivery">
              <span>배송비</span>
              <span>3,000KRW</span>
            </div>
            <div className="sideCart">
              <div className="cartBtn">장바구니 담기</div>
            </div>
          </div>
        </CustomSideWrap>
        {/* CustomSideWrap 부분 나중에 components로 이동 예정*/}
      </CustomWrap>
    </div>
  );
};

export default Custom;
