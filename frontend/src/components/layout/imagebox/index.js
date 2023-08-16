import React from "react";
import { ImageContainer, ImagePreview } from "./styled";
import img from "./1.jpeg";

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
