module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define("Question", {
        userName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return Question;
};
