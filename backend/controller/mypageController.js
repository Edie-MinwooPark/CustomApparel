const multer = require("multer");
const path = require("path");
const { USER } = require("../models");

exports.postImg = multer({
  storage: multer.diskStorage({
    destination: (req, file, fin) => {
      fin(null, "img/");
    },

    filename: (req, file, fin) => {
      const ext = path.extname(file.originalname);

      const filename =
        path.basename(file.originalname, ext) + "_" + Date.now() + ext;

      fin(null, filename);
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 },
});

exports.imgUpdate = async (req, res) => {
  const { file, decode } = req;
  const { nickName, upload } = req.body;
  // console.log(req);
  console.log("업로듕", upload);
  try {
    if (file) {
      console.log("파일 있졍", file);
      await USER.update(
        {
          username: nickName,
          profile_img: "http://127.0.0.1:4000/img/" + file.filename,
        },
        { where: { user_id: decode.user_id } }
      );
    } else {
      console.log("뭔디", decode.profile_img);
      await USER.update(
        { username: nickName, profile_img: upload },
        { where: { user_id: decode.user_id } }
      );
    }
    await USER.findOne({ raw: true, where: { user_id: decode.user_id } }).then(
      (e) => {
        res.send({ login: e });
      }
    );
  } catch (error) {
    console.log("업로드 에러", error);
  }
};

exports.mypage = async (req, res) => {
  try {
    // console.log(req);
    const { acc_decoded } = req;
    console.log("123123123", acc_decoded);
    if (acc_decoded) {
      await USER.findOne({
        raw: true,
        where: { user_id: acc_decoded.user_id },
      }).then((e) => {
        res.send(e);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
