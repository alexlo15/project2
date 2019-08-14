module.exports = function (sequelize, DataTypes) {

    // Defines the table of Question for the database
    var Question = sequelize.define("Question", {
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        choice1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        choice2: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        choice3: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    Question.associate = function (models) {
        // Creates the foreign key from topics in questions
        Question.belongsTo(models.Topic, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Question;
};
