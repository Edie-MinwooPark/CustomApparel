import styled from "styled-components";

export const Navdiv = styled.div`
  & .navContainer {
    margin: 0 auto;
    /* width: 1240px; */
    height: 100px;
    border: 1px solid;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  & .logo {
  }
  & .logo span {
    font-weight: 600;
    font-size: 32px;
  }
  & .menutabs {
  }

  & .menutabs ul {
    display: flex;
    padding: 0;
  }
  & .menutabs ul li {
    list-style-type: none;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: 1s;
  }
  & .menutabs ul li:hover {
    font-size: 16px;
    font-weight: 700;
  }
`;
