const Sequelize = require("sequelize");

class USER extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                  }                  
                ,
                user_id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                user_pw: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                profile_img: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                Nick: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                Accept: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: "USER",
                tableName: "user",
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db){
        db.USER.hasMany(db.POST, {foreignKey : "id", sourceKey : "id"});
        db.USER.hasMany(db.CLOSET, {foreignKey : "id", sourceKey : "closet_id"});

    }
}

module.exports = USER;