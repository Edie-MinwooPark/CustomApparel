import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";
import { useDispatch } from "react-redux";
import { decalName, decalNum } from "../../features/decalslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PROXY = process.env.REACT_APP_PROXY;

const CustomDecalsPopup = ({ handlerDecal }) => {

  const dispatch = useDispatch();


  const ta = (e)=>{
    const decal = e.target.src.split('/')[3];
    dispatch(decalName(decal));
    dispatch(decalNum());
    handlerDecal();
  }

  return (
    <DecalsPopupWrap>
      <div className="decalsPopupContainer">
        <div className="popupClose">
          <DecalsClosebtn onClick={handlerDecal} />
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
          <div className="popupCard" onClick={ta}>
            <img src="instagram.png" />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src='jordan_thumb.png' />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
          <div className="popupCard" onClick={ta}>
            <img src={`${PROXY}/img/angry-emoji.png`} />
          </div>
        </div>
      </div>
    </DecalsPopupWrap>
  );
};

export default CustomDecalsPopup;
