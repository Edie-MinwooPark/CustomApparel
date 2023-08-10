import React from "react";
import { PopupWrap, Closebtn } from "./CustomProductPopup.styled";
import { useSelector } from "react-redux";

const CustomProductPopup = ({ handleProduct, num }) => {
  // customSlice의 초기값을 가져옴
  const shirtInfo = useSelector((state) => state.custom.basic);
  const { selectNum, setSelectNum } = num;
  console.log(handleProduct);

  function handleChangeProduct(e) {
    setSelectNum(e.currentTarget.id - 1);
    handleProduct();
  }

  return (
    <>
      <PopupWrap>
        <div className="popupContainer">
          <div className="popupClose">
            <Closebtn onClick={handleProduct} />
          </div>
          <div className="popupTitle">
            <div className="title">
              <span>티셔츠/셔츠를 커스텀 해보세요.</span>
            </div>
          </div>
          <div className="popupBody">
            {/*  */}
            {shirtInfo.map((e) => {
              if (e.id != selectNum + 1) {
                return (
                  <div
                    className="popupCard"
                    key={e.id}
                    id={e.id}
                    onClick={handleChangeProduct}
                  >
                    <div className="cardImg"></div>
                    <div className="cardText">
                      <span>{e.name}</span>
                      <span>{e.price} KRW</span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </PopupWrap>
    </>
  );
};

export default CustomProductPopup;
