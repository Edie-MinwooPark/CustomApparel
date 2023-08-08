import styled from "styled-components";

export const CustomWrap = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  z-index: -1;
  padding: 20px;
  & .customMainWrap {
    box-sizing: border-box;
    width: 1400px;
    height: 100%;
    padding: 100px 0 0;
  }
  & .customMainWrap .customMain {
    width: 100%;
    height: 100%;
    border: 1px solid;
  }
`;

export const CustomSideWrap = styled.div`
  box-sizing: border-box;
  width: 480px;
  height: 100%;
  padding: 100px 0 0;
  & .customSide {
    border: 1px solid;
    padding: 20px 20px 20px 40px;
  }
  & .sideTitle {
    margin-bottom: 30px;
  }
  & .sideTitle span {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }
  & .sideTitle span:nth-child(2) {
    color: #ff6b00;
    margin-bottom: 20px;
  }
  & .sideTitle .changeProductBtn {
    width: 120px;
    height: 40px;
    font-size: 14px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-weight: 400;
    cursor: pointer;
    transition: 1s;
  }
  & .sideTitle .changeProductBtn:hover {
    color: white;
    background-color: black;
  }
  & .sideColor {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideColor ul {
    display: flex;
    padding-inline-start: 0;
  }
  & .sideColor ul li {
    list-style-type: none;
  }
  /* 사이즈 */
  & .sideSize {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideSize ul {
    display: flex;
    padding-inline-start: 0;
  }
  /* & .sideSize ul li {
    width: 60px;
    height: 50px;
    border: 1px solid;
    border-radius: 10px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    transition: 1s;
  }
  & .sideSize ul li:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  } */
  & .delivery {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .delivery span {
    display: block;
    margin-bottom: 10px;
  }
  /* 장바구니 담기 */
  & .sideCart {
    font-size: 14px;
    margin-bottom: 30px;
  }
  & .sideCart .cartBtn {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: 1s;
  }
  & .sideCart .cartBtn:hover {
    background-color: white;
    color: black;
    border: 1px solid;
  }
`;

// 색상 탭 색 추가 부분
export const ColorPallet = styled.li`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  list-style-type: none;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  border: ${(props) => (props.color == props.bgColor ? "2px solid" : "none")};
  &:hover {
    border: 2px solid;
  }
`;

export const SideSizeLi = styled.li`
  width: 60px;
  height: 50px;
  border: 1px solid;
  border-radius: 10px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  transition: 1s;
  color: ${(props) => (props.size == props.selectSize ? "white" : null)};
  background-color: ${(props) =>
    props.size == props.selectSize ? "black" : null};
  border: ${(props) =>
    props.size == props.selectSize ? "1px solid white" : null};
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
  &:after {
    content: "${(props) => props.size}";
  }
`;
