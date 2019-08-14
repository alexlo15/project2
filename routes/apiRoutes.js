// Dependencies
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

  // Sees all questions depending on the user's topicId for the flashcard selection
  app.get("/api/questions/:TopicId", function (req, res) {

    // sets the topic id from the URL
    let TopicIds = (req.params.TopicId).split(",");

    // sends the query to the database to select all questions where topicID is what the user requested
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

  // Sees all questions depending on the user's choice in skills level for the quiz selection
  app.get("/api/quiz/:skillLevel", function (req, res) {

    // sets the skill level from the URL
    let skillLevel = req.params.skillLevel

    // sends the query to the database to join the tables and select all questions where skill level is what the user requested
    db.Topic.findAll({
      where: {
        skillLevel: skillLevel
      },
      include: [db.Question]

    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });



  // Create a new score on the list
  app.post("/api/scores", function (req, res) {
    db.Score.create({
      userName: req.body.name,
      score: req.body.score
    }).then(function (dbScores) {
      res.json(dbScores);
    });
  });


  // route to get top ten scores
  app.get("/api/scores", function (req, res) {
    db.Score.findAll({
      limit: 10,
      order: [
        ['score', 'DESC']
      ]
    }).then(function (dbScores) {
      res.json(dbScores);
    });
  });

}