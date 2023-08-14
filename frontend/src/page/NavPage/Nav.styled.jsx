import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navdiv = styled.div`
  width: 100%;
  height: auto;
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 10000; */
  & .navContainer {
    margin: 0 auto;
    width: 1280px;
    height: 100px;
    border: 1px solid;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 1;
    background-color: white;
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
