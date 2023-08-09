// require('dotenv').config();

// const tmp=process.env.PROXY;

// console.log(tmp);
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

const PORT = process.env.PORT;
// 1. axios 전역 설정
axios.default.withCredentials = true; // withCredentials 전역 설정

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

app.use("/img", express.static(path.join(__dirname, "img")));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use("/mypage", mypageRouter);
app.use("/user", userRouter);

const server = app.listen(PORT, () => {
  console.log("서버온");
});
