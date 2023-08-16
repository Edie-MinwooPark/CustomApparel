

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TwoDCanvas = () => {
  const clothType = useSelector(state => state.cloth.clothType);
  const clothColor = useSelector(state=>state.cloth.clothColor);
  const [canvas, setCanvas] = useState(null);

  // 색상 필터 적용 함수
  const applyColorFilter = (data, redAdjustment, greenMultiplier, blueMultiplier) => {
    for (var i = 0; i < data.length; i += 4) {
      // 현재 픽셀의 RGB 값
      var red = data[i];

      // RGB 값을 적용된 필터 값으로 변경
      data[i] = Math.min(red + redAdjustment, 255); // 빨간색 조정
      data[i + 1] *= greenMultiplier;               // 녹색 강화/약화
      data[i + 2] *= blueMultiplier;                // 파란색 강화/약화
    }
  };

  useEffect(() => {
    
    const canvasElement = document.getElementById('canvas');
    setCanvas(canvasElement);

    const ctx = canvasElement.getContext('2d');
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    const backgroundImage = new Image();
    backgroundImage.src = `${clothType}.png`;
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 200, 0, 780, 750);

      // 이미지 데이터 가져오기
      const imageData = ctx.getImageData(200, 0, 780, 750);
      const data = imageData.data;

      // 변경된 픽셀 데이터로 이미지 업데이트
      ctx.putImageData(imageData, 200, 0);
    };
  }, [clothType]);

  
  useEffect(()=>{
    const canvasElement = document.getElementById('canvas');
    setCanvas(canvasElement);

    const ctx = canvasElement.getContext('2d');

    const imageData = ctx.getImageData(200, 0, 780, 750);
    const data = imageData.data;

    switch (clothColor) {
      case "red":
        applyColorFilter(data, 150, 0.8, 0.8); // 빨간색 필터 적용
        break;
      
      case "yellow":
        applyColorFilter(data, 100, 0.8, 0.2); // 노란색 필터 적용
        break;
      
      case "green":
        applyColorFilter(data, 0, 0.8, 0.2);   // 초록색 필터 적용
        break;
      
      case "blue":
        applyColorFilter(data, 0, 0.2, 0.8);   // 파란색 필터 적용
        break;
      
      case "orange":
        applyColorFilter(data, 100, 0.5, 0.2); // 오렌지색 필터 적용
        break;
      
      case "navy":
        applyColorFilter(data, 0, 0.2, 0.5);   // 남색 필터 적용
        break;

      default:
        break;
    }
    ctx.putImageData(imageData, 200, 0);
  },[clothColor])


  return (
    <canvas id='canvas' width='1000' height='800'></canvas>
  );
}

export default TwoDCanvas;
