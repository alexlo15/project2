var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/", function(req, res) {
  //   db.Question.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });



  

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
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
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
