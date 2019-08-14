module.exports = function (sequelize, DataTypes) {

  // Defines the table of topics for the database
  var Topic = sequelize.define("Topic", {
    // Giving the Topic model a name of type STRING and skill level of type STRING
    name: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });


  Topic.associate = function (models) {
    // Associating Topics with Questions
    Topic.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  return Topic;

};