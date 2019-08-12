module.exports = function (sequelize, DataTypes) {
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
        },
        skillLevel: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
    });

    Question.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Question.belongsTo(models.Topic, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Question;
};
