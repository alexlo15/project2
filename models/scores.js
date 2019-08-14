module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        userName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },{
        timestamps: false,
        freezeTableName: true,
    });

    return Score;
};
