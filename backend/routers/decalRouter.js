const router = require("express").Router();

const { islogin } = require("../middleware/islogin");
const {
    postDecal,
  } = require("../controller/decalController");


router.post("/postdecal", islogin, postDecal.single("image"),(req,res)=>{
    res.json({
        success : true,
        filename : req.file.filename
    });
});

module.exports = router;

