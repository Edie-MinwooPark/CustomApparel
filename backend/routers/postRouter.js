const router = require("express").Router();
const {
  getAllPosts,
  getPostsByHashtag,
  getPostDetail,
  postComment,
  postRecoment,
  createPost,
} = require("../controller/postController");
// 전체 post 목록 반환
router.get("/posts", getAllPosts);

// 특정 카테고리 post 목록 반환 라우트
router.get("/hashtag/:hash_tag", getPostsByHashtag);

// 상세 Post 내용 반환 라우트
router.get("/detail/:id", getPostDetail);

// post 등록 라우트
router.post("/post", createPost);

module.exports = router;
