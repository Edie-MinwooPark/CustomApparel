import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
`;

export const ContentBox = styled.div`
  margin-top: 20px;
  border: 1px solid #dbdbdb;
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  padding: 15px;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  display: block;
  ${({ expanded }) => !expanded && "max-height: 80px;"}
  ${({ expanded }) => expanded && "height: auto;"}
`;

export const ImageInput = styled.input`
  display: block;
  margin-top: 10px;
`;

export const TagInput = styled.input`
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 10px;
  margin-top: 10px;
`;

export const TagButton = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: #e6e6e6;
  cursor: pointer;
  margin-left: 5px;
`;

export const SubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #0077cc;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

export const AutoCompleteButton = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`;

export const Tag = styled.div`
  padding: 5px 10px;
  background-color: #e6e6e6;
  cursor: pointer;
`;
