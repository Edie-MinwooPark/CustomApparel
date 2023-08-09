const Sequelize = require("sequelize");

class COMMENTS extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        comments_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        comments_content: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "COMMENTS",
        tableName: "comments",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.COMMENTS.belongsTo(db.POST, {
      foreignKey: "post_primaryKey",
      targetKey: "id",
    });
    db.COMMENTS.hasMany(db.RECOMMENTS, {
      foreignKey: "RECOMMENTS_primaryKey",
      sourceKey: "id",
    });
  }
}

module.exports = COMMENTS;
