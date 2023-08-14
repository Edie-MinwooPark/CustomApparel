import React from 'react'
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const TwoDCanvas = () => {
  const clothType = useSelector(state=>state.cloth.clothType);
  const [canvas,setCanvas] = useState(null);

  useEffect(()=>{
    const canvasElement = document.getElementById('canvas');
    setCanvas(canvasElement);

    const ctx = canvasElement.getContext('2d');
    const backgroundImage = new Image();
    backgroundImage.src = "https://image.toast.com/aaaaab/ticketlink/TKL_10/BigBanner_mo_%EC%82%BC%EC%B4%9D%EC%82%AC.jpg"

    backgroundImage.onload = ()=>{
      console.log("?")
      ctx.drawImage(backgroundImage,0,0)
    }

  },[])



  return (
    <canvas id='canvas' width='1000' height='500' ></canvas>
  )
}

export default TwoDCanvas;