import React, { useEffect, useState } from "react";
import Nav from "../NavPage/Nav";
import {
  ContentWrapper,
  ContentBox,
} from "../POSTDETAILpage/PostDetail.styled";
import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
const PostInsert = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  // X버튼 눌렀을때 태그 삭제
  const deleteTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };
  // 자동완성 값이 있는 버튼을 눌렀을 때 이를 태그에 등록
  // 기존에 있던 태그 찾아서 등록
  const handleAutoCompletes = (autoComplete) => {
    const selectedTag = tags.find((tag) => tag === autoComplete);

    if (formData.tags.includes(selectedTag)) return;

    setFormData({
      ...formData,
      tags: [...formData.tags, selectedTag],
    });
    setTagInputValue("");
    setAutoCompletes([]);
  };

  // 추가 버튼 혹은 엔터 누르면 태그 생성
  // 포스트에 추가할 tag 리스트
  const addTag = (e) => {
    e.preventDefault();

    // 입력한 내용이 이미 등록된 태그면 그냥 등록 안됨
    if (formData.tags.find((tag) => tag === tagInputValue)) return;

    setFormData({
      ...formData,
      tags: [...formData.tags, tagInputValue],
    });

    setTagInputValue("");
    setAutoCompletes([]);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImg = (e) => {
    console.log("hi", e);
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
  const onSubmit = async (e) => {
    // api 연결
    e.preventDefault(); // 기본동작 중단
    console.log(formData);

    // const createdPost = {
    //   ...formData,
    //   like_users: [],
    //   tags: formData.tags.map((tag, idx) => {
    //     return { id: idx + 1, content: tag };
    //   }),
    // };
    const createdPost = new FormData();
    createdPost.append("content", formData.content);
    createdPost.append("id", formData.id);

    console.log("createdPost :", createdPost);
    formData.tags.forEach((tag, idx) => {
      createdPost.append("tags", JSON.stringify({ id: idx + 1, content: tag }));
    });
    if (imageFile) {
      // 이미지 파일이 있다면 추가
      createdPost.append("image", formData.imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/post/post",
        createdPost
      );

      // if (response.data.succe) {

      // }
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
    setFormData(createdPost);
    setIsSubmitted(true);
  };

  // 태그
  // 기존 태그 불러오기 (get all tags from api)
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const posts = [
      {
        title: "Post 1",
        content: "This is the content of post 1",
        tags: [
          { id: 1, content: "tag1" },
          { id: 2, content: "tag2" },
        ],
      },
      {
        title: "Post 2",
        content: "This is the content of post 2",
        tags: [
          { id: 3, content: "tag3" },
          { id: 4, content: "tag4" },
        ],
      },
    ];

    const duplicatedTagList = posts.reduce((acc, post) => {
      for (let tag of post.tags) {
        acc.add(tag.content);
      }

      return acc;
    }, new Set());
    // Set : 중복을 허용하지 않는 리스트나 배열을 만드는데 유용

    const tagList = [...duplicatedTagList];

    setTags([...tagList]);
  }, []);

  // 태그 input 안에 값
  const [tagInputValue, setTagInputValue] = useState("");

  // 자동완성 태그들
  const [autoCompletes, setAutoCompletes] = useState([]);

  //태그 인풋 값 바뀌면 그에 따라서 자동 완성값들도 변경
  const handleTag = (e) => {
    setTagInputValue(e.target.value);
    if (e.target.value) {
      const autoCompleteData = tags.filter((tag) =>
        tag.includes(e.target.value)
      );
      setAutoCompletes(autoCompleteData);
    }
  };

  return (
    <>
      <Nav />
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
              <label htmlFor="postImg">이미지 업로드</label> <br />
              <input
                type="file"
                id="postImg"
                onChange={handleImg}
                accept="image/*"
              />
              <label htmlFor="tags">tags</label>
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="#태그를 #입력해주세요"
                    id="tags"
                    value={tagInputValue}
                    className="input grow"
                    onChange={handleTag}
                  />
                  <button onClick={addTag} className="small-button w-16">
                    add
                  </button>
                  <div>
                    {autoCompletes &&
                      autoCompletes.map((autoComplete) => (
                        <button
                          key={autoComplete}
                          onClick={handleAutoCompletes(autoComplete)}
                        >
                          #{autoComplete}
                        </button>
                      ))}
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </div>
              {formData.tags && (
                <div>
                  {formData.tags.map((tag) => (
                    <div key={tag}>
                      <span>
                        <p>#{tag}</p>
                      </span>
                      <button onClick={deleteTag(tag)} />
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default PostInsert;
