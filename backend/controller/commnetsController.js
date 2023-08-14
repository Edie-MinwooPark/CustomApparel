const db = require("../models");
const COMMENTS = db.COMMENTS;

// 상세 - 댓글 추가해주는 함수
exports.comment = async (req, res) => {
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
exports.recoment = async (req, res) => {
  const user_id = 1; // 임시 user_id
  const { comment_id, comment_content } = req.body;
  try {
    const recomment = await RECOMMENTS.create({
      user_id,
      comment_id,
      comment_content,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};
