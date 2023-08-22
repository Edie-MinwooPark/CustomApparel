import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";
import { useDispatch } from "react-redux";
import { decalName, decalNum } from "../../features/decalslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PROXY = process.env.REACT_APP_PROXY;

const CustomMyPicPopup = ({ handlerMyPic }) => {

  const dispatch = useDispatch();




  return (
    <DecalsPopupWrap>
        <div className="decalsPopupContainer">
            <div className="popupClose">
            <DecalsClosebtn onClick={handlerMyPic} />
            </div>
            <div className="popupTitle">
            <div className="title">
                <span>MyPicture</span>
            </div>
            </div>
            <div className="popupBody">
                
            </div>
        </div>
    
    </DecalsPopupWrap>
  );
};

export default CustomMyPicPopup;
