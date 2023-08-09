const Sequelize = require("sequelize");

class CLOSET extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        custom_img: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        closet_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "CLOSET",
        tableName: "closet",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static assoiciate(db) {
    db.CLOSET.belongsTo(db.POST, { foreignKey: "closet_id", targetKey: "id" });
  }
}

module.exports = CLOSET;
