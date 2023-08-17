const router = require("express").Router();
const { AllUserInfo } = require("../controller/adminController");

router.get("/", AllUserInfo);

module.exports = router;
