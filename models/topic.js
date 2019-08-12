module.exports = function (sequelize, DataTypes) {
  // var Example = sequelize.define("Example", {
  //   text: DataTypes.STRING,
  //   description: DataTypes.TEXT
  // });
  // return Example;
  var Topic = sequelize.define("Topic", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING

  },{
    timestamps: false,
    freezeTableName: true,
});

  Topic.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Topic.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  Topic.create({
    name: "HTML"
  });

  return Topic;

};
