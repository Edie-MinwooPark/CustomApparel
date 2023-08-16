const router = require("express").Router();
const { comment, recoment } = require("../controller/commnetsController");

// // 대댓글
router.post("/recomments", recoment);
// // 댓글 추가 라우트
// :id 이거 있으면 무조건 아래에 두기(중간에 가로채서 밑에거 실행안됨)
router.post("/comments", comment);

module.exports = router;
