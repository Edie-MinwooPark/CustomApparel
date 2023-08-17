const router = require("express").Router();
const {
  postImg,
  imgUpdate,
  mypage,
  updateuserpw,
  updateusernick,
} = require("../controller/mypageController");
const { islogin } = require("../middleware/islogin");

router.get("/", islogin, mypage);

router.post("/postimg", islogin, postImg.single("image"));
router.post("/imgUpdate", postImg.single("profile_img"), islogin, imgUpdate);
router.post("/updateuserpw", islogin, updateuserpw);
router.post("/updateusernick", islogin, updateusernick);
module.exports = router;
