const db = require("../models");
const User = db.USER;

// 모든 유저의 정보를 어드민 페이지로 보냄
exports.AllUserInfo = async (req, res) => {
  try {
    const data = await User.findAll({
      attributes: ["user_id", "profile_img", "Nick", "createdAt", "Accept"],
      raw: true,
    });

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
