import styled from "styled-components";

export const Mainwrapper = styled.div`
  button {
    padding-left: 11px;
    padding-right: 11px;
    border-color: #bcbfc6;
    color: #777;
    background-color: #fafbf6;
    background-image: linear-gradient(#fff, #f1f1f1);
  }
  & .flexbox {
    display: flex;
    border: 1px solid black;
    box-sizing: border-box;
  }

  & .leftbluebox {
    width: 100px;
    background-color: #eef1f8;
    text-align: left;
    white-space: nowrap;
    padding: 14px 30px;
    border-bottom: 1px solid #ddd;
  }
  & .leftbluebigbox {
    width: 100px;
    background-color: #eef1f8;
    white-space: nowrap;
    padding: 14px 30px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    padding-top: 133px;
  }
  & .rightbox {
    padding: 14px 30px;
    border-bottom: 1px solid #ddd;
  }
`;
