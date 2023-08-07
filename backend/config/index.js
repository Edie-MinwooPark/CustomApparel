require("dotenv").config();

const config = {
  // dev:{
  //     username:process.env.DATABASE_USERNAME,
  //     password:process.env.DATABASE_PASSWORD,
  //     database:process.env.DATABASE_NAME,
  //     host:process.env.DATABASE_HOST,
  //     dialect: "mysql"
  // }
  dev: {
    username: "root",
    password: "root",
    database: "ike",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

console.log(process.env.DATABASE_USERNAME);
module.exports = config;
