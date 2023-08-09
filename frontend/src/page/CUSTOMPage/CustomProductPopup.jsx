import React from "react";
import { PopupWrap, Closebtn } from "./CustomProductPopup.styled";

const CustomProductPopup = ({ data }) => {
  return (
    <>
      <PopupWrap>
        <div className="popupContainer">
          <div className="popupClose">
            <Closebtn onClick={data} />
          </div>
          <div className="popupTitle">
            <div className="title">
              <span>티셔츠/셔츠를 커스텀 해보세요.</span>
            </div>
          </div>
          <div className="popupBody">
            {/*  */}
            <div className="popupCard">
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div>
            {/*  */}
            <div className="popupCard">
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div>
            {/*  */}
            <div className="popupCard">
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div>
          </div>
        </div>
      </PopupWrap>
    </>
  );
};

export default CustomProductPopup;
