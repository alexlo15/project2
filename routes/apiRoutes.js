var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
module.exports = function (app) {

  // See all topics
  app.get("/api/topics", function (req, res) {
    db.Topic.findAll({}).then(function (dbTopics) {
      res.json(dbTopics);
    });
  });

  // See all questions
  app.get("/api/questions", function (req, res) {
    db.Question.findAll({}).then(function (dbQuestions) {
      res.json(dbQuestions);
    });
  });


  // Checks to see if initial data is in the database
  app.get("/test", function (req, res) {
    db.Question.findAll({}).then(function (initialData) {});
  });

  app.get("/api/questions/:TopicId", function (req, res) {
    // console.log( JSON.stringify(req.params.TopicId));
    let TopicIds = (req.params.TopicId).split(",");
    // console.log(TopicIds);
    db.Question.findAll({
      where: {
        TopicId: {
          [Op.in]: TopicIds
        }
      }

    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });

  app.get("/api/quiz/:skillLevel", function (req, res) {
    // console.log( JSON.stringify(req.params.TopicId));
    let skillLevel = req.params.skillLevel
    // console.log(TopicIds);
    db.Topic.findAll({
      where: {
        skillLevel: skillLevel
      },
      include: [db.Question]

    }).then(function (dbQuestion) {
      console.log(dbQuestion);
      res.json(dbQuestion);
    });
  });


  // Create a new score on the list
  app.post("/api/scores", function(req, res) {
    db.Score.create({
      userName: req.body.name,
      score: req.body.score
    }).then(function(dbScores) {
      res.json(dbScores);
    });
  });

  app.get("/api/scores", function(req, res) {
    db.Score.findAll({}).then(function(dbScores) {
      res.json(dbScores);
    });
  });

  // // Create a new example
  // app.get("/api/:topics",[req.params.id] ,function(req, res) {
  //   db.questions.findAll({
  //     where:{
  //       id: req.params.id
  //     }
  //   }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });


  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};