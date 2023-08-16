const { where } = require("sequelize");
const db = require("../models");
const POST = db.POST;
const COMMENTS = db.COMMENTS;

// 전체 post 목록 반환하는 함수
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await POST.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// 특정 카테고리 post 목록 반환하는 함수
exports.getPostsByHashtag = async (req, res) => {
  const { hash_tag } = req.params;
  try {
    const posts = await POST.findAll({ where: { hash_tag } });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};
// 상세 post 내용 반환하는 함수
exports.getPostDetail = async (req, res) => {
  const { id } = req.params;
  // console.log(req);
  try {
    const post = await POST.findOne({
      where: { id },
      include: [{ model: COMMENTS }],
    });
    // console.log("post :", post);
    res.json(post);
    // res.json();
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// post 등록하는 함수
exports.createPost = async (req, res) => {
  const { title, content, hash_tag } = req.body;
  try {
    const recomment = await POST.create({ title, content, hash_tag });
    res.json(recomment);
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 좋아요 업데이트
exports.postLikes = async (req, res) => {
  // const { id } = req.body;
  // const user_id = 123;
  console.log(req.body);
  const { likes: likeValue, post_title, post_content } = req.body;
  try {
    // const existingLikes = await POST.findAll(where:{

    // })
    const updatedLikes = await POST.update({
      likes: likeValue,
      post_title,
      post_content,
    });
    res.json({ data: updatedLikes, success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};
