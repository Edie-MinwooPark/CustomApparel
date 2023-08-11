import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  & .mainContainer {
    width: 1280px;
    height: auto;
    border: 1px solid;
    background-color: black;
  }
  & .mainContainer img {
    width: 100%;
    height: 100%;
  }
`;
