var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // ~~~~test area ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
  }) 

  app.get("/flash-card-selection", function(req, res){
    res.sendFile(path.join(__dirname, "flash-card-selection.html"));
  }) 

  app.get("/flash-card", function(req, res){
    res.sendFile(path.join(__dirname, "flash-card.html"));
  }) 

  app.get("/drag-drop", function(req, res){
    res.sendFile(path.join(__dirname, "drag-drop.html"));
  }) 



  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};