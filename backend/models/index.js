const Sequelize = require("sequelize");
const config = require("../config");
const USER = require("./user");
const POST = require("./post");
const COMMENTS = require("./comments");
const RECOMMENTS = require("./recomments");
const CART = require("./cart");
const CUSTOM = require("./custom");
const CLOSET = require("./closet");
const HASHTAG = require("./hashtag");
// const sequelize = new Sequelize('test', 'root', '비밀번호', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   });

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.USER = USER;
db.POST = POST;
db.COMMENTS = COMMENTS;
db.RECOMMENTS = RECOMMENTS;
db.CART = CART;
db.CUSTOM = CUSTOM;
db.CLOSET = CLOSET;
db.HASHTAG = HASHTAG;
USER.init(sequelize);
POST.init(sequelize);
COMMENTS.init(sequelize);
RECOMMENTS.init(sequelize);
CART.init(sequelize);
CUSTOM.init(sequelize);
CLOSET.init(sequelize);
HASHTAG.init(sequelize);

USER.associate(db);
POST.associate(db);
COMMENTS.associate(db);
RECOMMENTS.associate(db);
HASHTAG.associate(db);
CART.associate(db);

module.exports = db;
