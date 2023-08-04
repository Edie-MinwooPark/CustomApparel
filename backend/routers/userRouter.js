const router = require("express").Router();
const { viewUser, signUp } = require("../controller/userController");
const { islogin } = require("../middleware/islogin");
// const {} = require("../middleware/");

router.get("/viewUser", islogin, viewUser);
router.post("/signup", signUp);

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
