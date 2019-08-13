$(document).ready(function () {

  $("#one").on("click", function () {
    localStorage.setItem("skillLvl", "1")
  });
  $("#two").on("click", function () {
    localStorage.setItem("skillLvl", "2")
  });
  $("#three").on("click", function () {
    localStorage.setItem("skillLvl", "3")

  });

  $("#triviaOne").on("click", function () {
    localStorage.setItem("skillLvl", "1")
  });
  $("#triviaTwo").on("click", function () {
    localStorage.setItem("skillLvl", "2")
  });
  $("#triviaThree").on("click", function () {
    localStorage.setItem("skillLvl", "3")

  });
 });