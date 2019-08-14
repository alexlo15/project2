// Dependencies
var db = require("../models");
var path = require("path");

module.exports = function (app) {

  // Sends the user to the index page
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
  }) 

  // Sends the user to the flash-card topic selection page
  app.get("/flash-card-selection", function(req, res){
    res.sendFile(path.join(__dirname, "../public/flash-card-selection.html"));
  }) 

  // Sends the user to the flash-card study page
  app.get("/flash-card", function(req, res){
    res.sendFile(path.join(__dirname, "../public/flash-card.html"));
  }) 

  // Sends the user to the drag and drop quiz page
  app.get("/drag-drop", function(req, res){
    res.sendFile(path.join(__dirname, "../public/drag-drop.html"));
  }) 


  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });


};