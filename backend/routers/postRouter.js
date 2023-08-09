const router = require("exporess").Router();
const {
  getAllPosts,
  getPostsByHashtag,
  getPostDetail,
  postComment,
  postRecoment,
  createPost,
} = require("../controller/postController");

router.get("/", getAllPosts);
