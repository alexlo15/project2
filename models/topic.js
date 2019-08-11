module.exports = function (sequelize, DataTypes) {

  var Topic = sequelize.define("Topic", {
    // Giving the Topic model a name of type STRING
    name: DataTypes.STRING

  },{
    timestamps: false,
    freezeTableName: true,
});

  Topic.associate = function (models) {
    // Associating Topics with Questions
    Topic.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  // Topic.create({
  //   name: "HTML"
  // });

  return Topic;

};
