const express = require("express");
const app = express();
const cors = require("cors");
const dot = require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./models");
const path = require("path");
const axios = require("axios");
const userRouter = require("./routers/userRouter");
const mypageRouter = require("./routers/mypageRouter");
const paymentRouter = require("./routers/paymentRouter");
const postRouter = require("./routers/postRouter");
const commentRouter = require("./routers/commentRouter");
const adminRouter = require("./routers/adminRouter");
const decalRouter = require("./routers/decalRouter");
const PORT = process.env.PORT;
const { payment, payments } = require("./controller/paymentController");
// 1. axios 전역 설정
axios.default.withCredentials = true; // withCredentials 전역 설정
app.use(payment);

app.use(
  session({
    name: "token",
    secret: process.env.REFRESH_TOKEN_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

sequelize
  .sync({ force: false })
  .then(() => [console.log("sequelize연결성공")])
  .catch((err) => {
    console.log(err);
  });

app.use("/api/img", express.static(path.join(__dirname, "img")));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/mypage", mypageRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/custom", decalRouter);

const server = app.listen(PORT, () => {
  console.log("서버온");
});
