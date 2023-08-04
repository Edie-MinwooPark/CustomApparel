const db = require("../models");
const User = db.USER;
// 로그인 할때 bcrypt 사용 jsonwebtoken 설치
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  try {
    console.log("이거 reqbody임", req.body);

    const { Nick, user_id, user_pw } = req.body;

    const user = await User.findOne({ where: { user_id } });
    if (user != null) {
      // 유저 조회된거니까 중복 회원 가입막음

      // return res.send("중복회원 가입 막음");
      console.log("중복가입막음");
      return 1;
    }
    const hash = bcrypt.hashSync(user_pw, 10);
    await User.create({
      Nick,
      user_id,
      user_pw: hash,
    });
    // res.redirect("http://localhost:3000/");
    // res.json()
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  console.log(req.body);
  const { user_id, user_pw } = req.body;
  try {
    const user = await User.findOne({ where: { user_id } });
    if (user == null) {
      return res.send("가입 안한 아이디임~");
    }
    const same = bcrypt.compareSync(user_pw, user.user_pw);
    const { name, age } = user;
    if (same) {
      let token = jwt.sign(
        {
          name: user.name,
          age: user.age,
        },
        "asdkljskldlkad",
        {
          expiresIn: "20m",
        }
      );
      req.session.access_token = token;
      req.session.name = user.name;
      console.log("req.session", req.session);
      console.log("token", token);
      // " / : "여기서 경로는 백엔드의 도메인 경로 루트
      // 때문에 프론트의 경로를 작성해주자
      // 이렇게 리다이렉트를 할게아니면 프론트에서 응받 받은 값으로
      // 조건 분기 처리해서 페이지를 전환시켜주면된다,
      // return res.send("로그인 완료");
      // 배포된 프론트의 경로를 써줘야한다.
      return res.send({
        message: "로그인성공",
        token: req.session.access_token,
      });
      // return res.status(200).json({message:"로그인성공"})
    } else {
      return res.status(200).json({ message: "로그인실패" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.viewUser = async (req, res) => {
  const { acc_decoded } = req;
  console.log("asd", acc_decoded);
  const user = await User.findOne({ where: { name: acc_decoded.name } });

  // json 형태로 데이터를 응답
  res.json(user);
};
