const db = require("../models");
const COMMENTS = db.COMMENTS;
const RECOMMENTS = db.RECOMMENTS;

// 상세 - 댓글 추가해주는 함수
exports.comment = async (req, res) => {
  // const { id } = req.body;
  // const user_id = 123;
  console.log(req.body);
  const { user_id, profile_img, addComments, postId } = req.body;
  try {
    const comment = await COMMENTS.create({
      user_id,
      // comment_id,
      comments_content: addComments,
      profile_img,
      post_primaryKey: postId,
    });
    res.json({ success: true, comment });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

// 대댓글
exports.recoment = async (req, res) => {
  const user_id = 1; // 임시 user_id
  const { comment_id, comment_content } = req.body;
  try {
    const recomment = await RECOMMENTS.create({
      user_id,
      comment_id,
      comment_content,
      profile_img,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

exports.getComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await COMMENTS.findAll({
      where: { post_primaryKey: postId },
      order: [["createdAt"]],
    });
    res.json({ success: true, comments });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};
