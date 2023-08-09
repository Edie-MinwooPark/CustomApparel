import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";

const PROXY = process.env.REACT_APP_PROXY;

const CustomDecalsPopup = ({ data }) => {
  return (
    <DecalsPopupWrap>
      <div className="decalsPopupContainer">
        <div className="popupClose">
          <DecalsClosebtn onClick={data} />
        </div>
        {/* DecalsPopup Title */}
        <div className="popupTitle">
          <div className="title">
            <span>Decals</span>
          </div>
        </div>
        {/* DecalsPopup Body */}
        <div className="popupBody">
          {/* push the image and map here */}
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard">
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
        </div>
      </div>
    </DecalsPopupWrap>
  );
};

export default CustomDecalsPopup;
