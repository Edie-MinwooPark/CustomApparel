import React, { useEffect, useState } from "react";
import Nav from "../NavPage/Nav";
import {
  ContentWrapper,
  ContentBox,
} from "../POSTDETAILpage/PostDetail.styled";
import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { useEffect } from "react";

const PostInsert = () => {
  const [content, setContent] = useState("");

  const user_info = useSelector((state) => state.mypage.data);
  console.log(user_info);
  // 화면 그리기
  const [formData, setFormData] = useState({
    id: "123",
    content: "",
    author: { id: "123" },
    tags: [],
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const onSubmit = (e) => {
    // api 연결
    e.preventDefault(); // 기본동작 중단
    console.log(formData);
  };

  // 태그
  // 기존 태그 불러오기 (get all tags from api)
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const duplicatedTagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }

      return acc;
    }, new Set());

    const tagList = [...duplicatedTagList];

    setTags([...tagList]);
  }, []);

  return (
    <>
      <Nav />;
      <ContentWrapper>
        <ContentBox>
          <div>
            <form onSubmit={onSubmit}>
              <label htmlFor="postContent">내용</label> <br />
              <textarea
                id="content"
                placeholder="내용을 입력하세요"
                cols={"30"}
                rows={10}
                value={formData.content}
                onChange={handleChange}
                required //폼을 비운채로 submit 하면 알림메시지 뜸
              />
              <br />
              <label htmlFor="tags">tags</label>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="#태그를 #입력해주세요"
                    id="tags"
                    // value={}
                    className="input grow"
                    // onChange={}
                  />
                  <button
                    // onClick={}
                    className="small-button w-16"
                  >
                    add
                  </button>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostInsert;
