import React from "react";

function Content({ post }) {
  const extractHashTags = (text) => {
    const regex = /#([a-zA-Z0-9_]+)/g;
    const matches = [...text.matchAll(regex)];
    return matches.map((match) => match[1]); // # 를 제외한 해시태그만 추출
  };

  const hashtags = extractHashTags(post.content);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>{post.content}</div>
      <div>
        {hashtags.map((hashtag, index) => (
          <span key={index} style={{ marginRight: "5px" }}>
            #{hashtag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Content;
