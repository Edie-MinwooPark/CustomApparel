const router = require("express").Router();
const { viewUser, signUp, login } = require("../controller/userController");
const { postImg } = require("../controller/mypageController");
const { islogin } = require("../middleware/islogin");
const uploadMiddleware = require("../middleware/uploadMiddleware");
// const {} = require("../middleware/");

router.get("/viewUser", islogin, viewUser);
router.post("/signup", postImg.single("profile_img"), signUp);
router.post("/login", login);
// router.get("/", async (req, res) => {
//     try {
//       // await startScrape(req, res);
//       await viewProducts(req, res);
//       res.status(200);
//     } catch (error) {
//       console.log(error);
//       res.status(500).send("Internal Server Error");
//     }
//   });

module.exports = router;
