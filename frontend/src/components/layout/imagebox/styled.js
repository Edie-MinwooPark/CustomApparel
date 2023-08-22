import styled from "styled-components";

export const ImageContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border: 1px solid #ccc;
  margin-top: 20px;
`;

export const ImagePreview = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }
`;

export const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
