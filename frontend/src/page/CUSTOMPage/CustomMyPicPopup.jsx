import React from "react";
import { DecalsPopupWrap, DecalsClosebtn } from "./CustomDecalsPopup.styled";
import { useDispatch } from "react-redux";
import { decalName, decalNum } from "../../features/decalslice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {useState} from "react"
import axios from "axios"
import { decalMyPic } from "../../features/decalslice";
const PROXY = process.env.REACT_APP_PROXY;

const CustomMyPicPopup = ({ handlerMyPic }) => {

    const dispatch = useDispatch();

    const [file,setFile] = useState(null);

    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',file)

        const response = await axios.post(`${PROXY}/custom/postdecal`,formData, {
            headers : {
                'Content-Type' : 'multipart/form-data',
            }
        })

        dispatch(decalMyPic(response.data.filename));

        handlerMyPic();
    }



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
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} />
                    <button type="submit">Upload</button>
                </form>
            </div>
        </div>
    
    </DecalsPopupWrap>
  );
};

export default CustomMyPicPopup;
