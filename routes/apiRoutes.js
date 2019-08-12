var db = require("../models");

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
    db.Question.findAll({}).then(function (initialData) {
    });
  });

  app.get("/api/questions/:TopicId", function(req,res){
    db.Question.findAll({
      where:{
        TopicId: req.params.TopicId
      }
    }).then(function(dbQuestion){
      res.json(dbQuestion);
    });
  });


  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

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
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};