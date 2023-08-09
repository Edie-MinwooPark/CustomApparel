const db = require("../models");
const POST = db.POST;
const COMMENTS = db.COMMENTS;
const RECOMMENTS = db.RECOMMENTS;

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
  try {
    const post = await POST.findOne({
      where: { id },
      include: [post_content],
    });
    res.json(post);
  } catch (error) {
    console.error(error);
    return res.json({ error });
  }
};

// 상세 - 댓글 추가해주는 함수
exports.postComment = async (req, res) => {
  // const { id } = req.params;
  const user_id = 1;
  const { comment_id, comment_content } = req.body;
  try {
    const comment = await COMMENTS.create({
      user_id,
      comment_id,
      comment_content,
    });
    res.json(comment);
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 대댓글
exports.postRecoment = async (rea, res) => {
  const user_id = 1; // 임시 user_id
  const { comment_id, comment_content } = req.body;
  try {
    const recomment = await RECOMMENTS.creatae({
      user_id,
      comment_id,
      comment_content,
    });
  } catch (error) {
    console.log(error);
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
