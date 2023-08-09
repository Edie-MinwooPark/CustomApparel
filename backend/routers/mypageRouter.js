const router = require("express").Router();
const {
  postImg,
  imgUpdate,
  mypage,
} = require("../controller/mypageController");
const { islogin } = require("../middleware/islogin");

router.get("/", islogin, mypage);

router.post("/postimg", islogin, postImg.single("image"));
router.post("/imgUpdate", postImg.single("upload"), islogin, imgUpdate);
module.exports = router;
