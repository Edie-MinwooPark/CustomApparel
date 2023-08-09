import React from "react";
import { PopupWrap, Closebtn } from "./CustomProductPopup.styled";
import { useSelector } from "react-redux";

const CustomProductPopup = ({ data }) => {
  // customSlice의 초기값을 가져옴
  const shirtInfo = useSelector((state) => state.custom.basic);

  function handleChangeProduct(e) {
    console.log(e.target);
  }
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
            <div className="popupCard" onClick={handleChangeProduct}>
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div>

            {/* <div className="popupCard">
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div>
            <div className="popupCard">
              <div className="cardImg"></div>
              <div className="cardText">
                <span>민우의 개쩌는 티셔츠 2</span>
                <span>100,000,000KRW</span>
              </div>
            </div> */}
          </div>
        </div>
      </PopupWrap>
    </>
  );
};

export default CustomProductPopup;
