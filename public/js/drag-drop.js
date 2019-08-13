import { randomBytes } from "crypto";

$(document).ready(function () {

    // let topics;
    // let topicArray = [];
    // topics = localStorage.getItem('vTopicSelected');
    // topicArray = topics.split(",");
    let questionCount = 0;

    var level = localStorage.getItem('skillLvl');
    var flashcards = [];
    // alert("file attached drag and drop");

    $.get("/api/quiz/" + level, function (data) {

        for (var i = 0; i < data.length; i++) {

            for (var j = 0; j < 5; j++) {
                let flashcard = {

                    question: data[i].Questions[j].question,
                    ans1: data[i].Questions[j].choice1,
                    choices: [
                        data[i].Questions[j].choice1,
                        data[i].Questions[j].choice2,
                        data[i].Questions[j].choice3
                    ]

                }

                flashcards.push(flashcard);
            }


        }

        randomize();

        console.log(flashcards.length)
        console.log(flashcards);
        $('#questionH2').text(flashcards[questionCount].question);
        $('#choice1Text').text(flashcards[questionCount].choices[0]);
        $('#choice2Text').text(flashcards[questionCount].choices[1]);
        $('#choice3Text').text(flashcards[questionCount].choices[2]);

        questionCount++;
    });

function randomize(){
    for (let i = flashcards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = flashcards[i];
        flashcards[i] = flashcards[j];
        flashcards[j] = temp;
    }

}


    // ===============================================
    // Function for drag and drop
    // ==========================================
    let draggableChoice;
    $(function () {
        var pastDraggable = "";
        $("#draggable1").draggable({
            cursor: "move",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable2").draggable({
            cursor: "move",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable3").draggable({
            cursor: "move",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#droppable").droppable({
            //Event to accept a draggable when dropped on the droppable
            drop: function (event, ui) {
                // $(this).addClass("ui-state-highlight").find("p").html("Dropped!");

                //Get the current draggable object
                var currentDraggable = $(ui.draggable).attr('id');

                //If there is an object prior to the current one
                if (pastDraggable != "") {
                    //Place past object into its original coordinate
                    $("#" + pastDraggable).animate($("#" + pastDraggable).data().originalLocation, "slow");
                }
               
                //Store the current draggable object
                pastDraggable = currentDraggable;
                draggableChoice =  $(ui.draggable).text();
                console.log("Dragged item : " + draggableChoice);
            },
            //Event to accept a draggable when dragged outside the droppable
            out: function (event, ui) {
                var currentDraggable = $(ui.draggable).attr('id');
                $(ui.draggable).animate($(ui.draggable).data().originalLocation, "slow");
            }
        });
    });
    var Positioning = (function () {
        return {
            //Initializes the starting coordinates of the object
            initialize: function (object) {
                object.data("originalLocation", $(this).originalPosition = { top: 0, left: 0 });
            },
            //Resets the object to its starting coordinates
            reset: function (object) {
                object.data("originalLocation").originalPosition = { top: 0, left: 0 };
            },
        };
    })();


    // calling the dragAndDrop function
    // ============================================
    // dragAndDrop();

    // ===========================================

    $('#submitBtn').on('click', function () {

        if(questionCount < flashcards.length){

            if(questionCount === flashcards.length-1){
                $("#submitBtn").text("Check Your Results!");
            }
            $('#questionH2').text(flashcards[questionCount].question);
            $('#choice1Text').text(flashcards[questionCount].choices[0]);
            $('#choice2Text').text(flashcards[questionCount].choices[1]);
            $('#choice3Text').text(flashcards[questionCount].choices[2]);

        questionCount++;
        } else{
            alert("You finished the test!");

        }

    })

});