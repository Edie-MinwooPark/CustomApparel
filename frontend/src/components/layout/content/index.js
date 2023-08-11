import React from "react";

function Content({ post }) {
  console.log("connnn,post", post);
  // const hashTag = post.hash_tag;
  const extractHashTags = (post) => {
    const regex = /#([a-zA-Z0-9_]+)/g;
    const matches = [...post.matchAll(regex)];
    return matches.map((match) => match[1]); // # 를 제외한 해시태그만 추출
  };

  const hashtags = extractHashTags(post.content);

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>{post.post_content}</div>
      <div>
        {/* {hashtags.map((hashtag, index) => (
          <span key={index} style={{ marginRight: "5px" }}>
            #{hashtag}
          </span>
        ))} */}
      </div>
    </div>
  );
}

export default Content;
