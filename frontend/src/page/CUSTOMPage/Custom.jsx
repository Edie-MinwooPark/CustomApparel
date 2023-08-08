import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "../NavPage/MainNav";
import {
  CustomWrap,
  CustomSideWrap,
  ColorPallet,
  SideSizeLi,
} from "./Custom.styled";
import CustomPopup from "./CustomPopup";

// custom 테이블 정보 가져오기
async function getCustom() {
  const { data } = await axios.get(`http://localhost:4000/custom`, {
    withCredentials: true,
  });
  console.log(data);
}
getCustom();

const Custom = () => {
  const [product, setProduct] = useState(false);
  const [design, setDesign] = useState(false);
  const [color, setColor] = useState("white");
  const [size, setSize] = useState("M");
  const [selectSize, setSelectSize] = useState("M");

  // 팝업창 크고 켜기
  function handleProduct() {
    setProduct(!product);
    console.log(product);
  }
  // 선택된 색 활성화
  function handleColor(e) {
    setColor(e.target.getAttribute("bgcolor"));
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
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"white"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"red"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"orange"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"yellow"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"green"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"blue"}
                  color={color}
                />
                <ColorPallet
                  onClick={handleColor}
                  bgColor={"navy"}
                  color={color}
                />
              </ul>
            </div>
            <div className="sideSize">
              <span>사이즈</span>
              <ul>
                {/* 사이즈별 맵 돌릴 예정? */}
                <SideSizeLi size={size} selectSize={selectSize} />
                <SideSizeLi>M</SideSizeLi>
                <SideSizeLi>L</SideSizeLi>
                <SideSizeLi>XL</SideSizeLi>
                <SideSizeLi>2XL</SideSizeLi>
                <SideSizeLi>3XL</SideSizeLi>
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
