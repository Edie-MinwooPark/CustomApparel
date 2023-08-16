import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  padding-left: 40px;
  padding-right: 40px;
  /* width: 640px; */
  /* margin: 0 auto; */
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ContentBox = styled.div`
  /* border: 1px solid; */
  padding: 12px 16px 0;
`;

export const StyledLikeIconWrapper = styled.div``;

export const CountContainer = styled.div`
  align-items: center;
  display: flex;
  padding-top: 12px;
`;

export const Viewdiv = styled.div`
  margin-left: auto;
`;

export const Text = styled.div`
  padding-top: 12px;
  overflow: hidden;
  max-height: ${(props) => (props.expanded ? "none" : "60px")};
  position: relative;
`;

export const Text_Span = styled.span`
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 20px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: ${(props) => (props.expanded ? "none" : "calc(10ch + 5px)")};
  vertical-align: middle;
`;

export const More = styled.span`
  display: ${(props) => (props.expanded ? "none" : "inline-block")};
  color: rgba(34, 34, 34, 0.5);
  cursor: pointer;
  line-height: 24px;
  font-size: 14px;
  vertical-align: middle;
`;

export const Comment_Box = styled.div`
  border: 1px solid;
`;
