import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainNavdiv = styled.div`
  & .navContainer {
    margin: 0 auto;
    width: 100%;
    height: 100px;
    border: 1px solid;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 100;
    background-color: white;
    /* position: fixed; */
    left: 0;
    top: 0;
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
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: black;
  }
  &:active {
    color: black;
  }
`;
