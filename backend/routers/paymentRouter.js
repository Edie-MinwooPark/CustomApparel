const router = require("express").Router();
const {
  paymentdetail,
  paymentsucceeded,
  Paymenthistorydetails,
} = require("../controller/paymentController");
const { islogin } = require("../middleware/islogin");

router.get("/paymentdetail", islogin, paymentdetail);
router.post("/paymentsucceeded", islogin, paymentsucceeded);
router.post("/Paymenthistorydetails", islogin, Paymenthistorydetails);

module.exports = router;
