import React from "react";
import { ImageContainer, ImagePreview } from "./styled";
import img from "/Users/yoodonghee/Desktop/nike/frontend/src/components/layout/imagebox/1.jpeg";

const ImageBox = ({ imageUrl }) => {
  return (
    <ImageContainer>
      <ImagePreview>
        <img src={img} alt="Uploaded Image" />
      </ImagePreview>
    </ImageContainer>
  );
};

export default ImageBox;
