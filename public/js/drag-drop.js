
// import { randomBytes } from "crypto";


$(document).ready(function () {



    // let topics;
    // let topicArray = [];
    // topics = localStorage.getItem('vTopicSelected');
    // topicArray = topics.split(",");
    let questionCount = 0;
    var right = [];
    var correct = 0;
    var wrong = 0;
    var level = localStorage.getItem('skillLvl');
    var flashcards = [];
    // alert("file attached drag and drop");

    // Hide name area after user inputs their name & shows questions
    $(".nameSubmit").on("click", function(){
        userName = $("#nameInput").val().trim();
        console.log(userName);
        $("#nameDiv").hide();
        $("#question-top").show();
        $("#choices").show();
    })

    console.log(level)

    $.get("/api/quiz/" + level, function (data) {

        console.log(data);
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
        getRight();

        console.log(flashcards);
        console.log(right);
        // $('#questionH2').text(flashcards[questionCount].question);
        // $('#choice1Text').text(flashcards[questionCount].choices[0]);
        // $('#choice2Text').text(flashcards[questionCount].choices[1]);
        // $('#choice3Text').text(flashcards[questionCount].choices[2]);
        DragChoices();

        questionCount++;
    });

    // function tallyHo() {
    //     for (var i = 0; i < right.length; i++) {

    //         if (draggableChoice[i] === right[i]) {

    //             correct++;
    //             console.log("correct: " + correct);

    //         } else {
    //             wrong++;
    //             console.log("wrong: " + wrong);

    //         }
    //     }
    // };

    function getRight() {

        for (var i = 0; i < flashcards.length; i++) {

            right.push(flashcards[i].ans1);

        }
    };

    function randomize() {
        for (let i = flashcards.length - 1; i > 0; i--) {


            for (let k = 2; k > 0; k--) {
                let l = Math.floor(Math.random() * (k + 1));
                let temp2 = flashcards[i].choices[k];
                flashcards[i].choices[k] = flashcards[i].choices[l];
                flashcards[i].choices[l] = temp2;
            }

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

    function DragChoices() {
        var pastDraggable = "";
        $("#draggable1").draggable({
            cursor: "move",
            appendTo: "body",
            // revert: handleRevert,
            // revert:true,
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable2").draggable({
            cursor: "move",
            appendTo: "body",
            // revert:true,
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable3").draggable({
            cursor: "move",
            appendTo: "body",
            // revert:true,
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
                draggableChoice = $(ui.draggable).text();
                console.log("Dragged item : " + draggableChoice);

            },
            //Event to accept a draggable when dragged outside the droppable
            out: function (event, ui) {
                var currentDraggable = $(ui.draggable).attr('id');
                $(ui.draggable).animate($(ui.draggable).data().originalLocation, "slow");
            }
        });


        var Positioning = (function () {
            return {
                //Initializes the starting coordinates of the object
                initialize: function (object) {
                    object.data("originalLocation", $(this).originalPosition = {
                        top: 0,
                        left: 0
                    });
                },
                //Resets the object to its starting coordinates
                reset: function (object) {
                    object.data("originalLocation").originalPosition = {
                        top: 0,
                        left: 0
                    };
                },
            };
        })();

        // function handleRevert(object){
        //     alert('Revert called');
        //     object.data("originalLocation").originalPosition = {
        //         top: 0,
        //         left: 0
        //     };
        // }
        // handleRevert();

    }




    // ===========================================

    $('#submitBtn').on('click', function () {

        DragChoices();
        // handleRevert($(this));
        // Positioning();
        $("#draggable1").css({ 'left': '0', 'top': '0' });
        $("#draggable2").css({ 'left': '0', 'top': '0' });
        $("#draggable3").css({ 'left': '0', 'top': '0' });
        $('#final-topics').html('');

        // tallyHo();


        if (questionCount < flashcards.length) {

            if (questionCount === flashcards.length - 1) {
                $("#submitBtn").text("Check Your Results!");
            }
            $('#questionH2').text(flashcards[questionCount].question);
            $('#choice1Text').text(flashcards[questionCount].choices[0]);
            $('#choice2Text').text(flashcards[questionCount].choices[1]);
            $('#choice3Text').text(flashcards[questionCount].choices[2]);

            questionCount++;

                window.location.reload(questionCount--)

        } else {

            postScore();

            $("#resultDiv").show();
            $("#question-top").hide();
            $("#choices").hide();

        }

    })

    function postScore(){

        let newScore = {
            name: userName,
            score: 100 //this will change with a variable later
        }

        $.post("api/scores", newScore, function(data){
            console.log(data);

            getAllScores();
        })
    }

    function getAllScores(){
        $.get("api/scores", function(data){
            console.log(data);

            for (let i = 0; i < data.length; i++){
                let scoreRow = $("<div>");
                scoreRow.text(`${data[i].userName} : ${data[i].score}`);
                $("#scoreList").append(scoreRow);
            }
        })
    }

});