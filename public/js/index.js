
$(document).ready(function () {

  // Stores the user's choice in level for the flashcard area
  $("#one").on("click", function () {
    localStorage.setItem("skillLvl", "1")
  });
  $("#two").on("click", function () {
    localStorage.setItem("skillLvl", "2")
  });
  $("#three").on("click", function () {
    localStorage.setItem("skillLvl", "3")

  });

  // Stores the user's choice in level for the quiz area
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