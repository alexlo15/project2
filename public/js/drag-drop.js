// import { randomBytes } from "crypto";


$(document).ready(function () {

    let questionCount = 0;
    var right = [];
    var correct = 0;
    var wrong = 0;
    var level = localStorage.getItem('skillLvl');
    var flashcards = [];

    // Hide name area after user inputs their name & shows questions
    $(".nameSubmit").on("click", function () {
        userName = $("#nameInput").val().trim();
        console.log(userName);
        $("#nameDiv").hide();
        $("#question-top").show();
        $(".final-topics-row").show();
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


        console.log(flashcards);
        console.log(right);
        $('#questionH2').text(flashcards[questionCount].question);
        $('#choice1Text').text(flashcards[questionCount].choices[0]);
        $('#choice2Text').text(flashcards[questionCount].choices[1]);
        $('#choice3Text').text(flashcards[questionCount].choices[2]);
        DragChoices();

        questionCount++;
    });



    // function for creating an array of only right answers
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
        getRight();

    }


    // ===============================================
    // Function for drag and drop
    // ==========================================
    // This variable holds the value of dropped choice.
    let draggableChoice;

    function DragChoices() {
        var pastDraggable = "";
        $("#draggable1").draggable({
            cursor: "move",
            revert: "invalid",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable2").draggable({
            cursor: "move",
            revert: "invalid",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $("#draggable3").draggable({
            cursor: "move",
            revert: "invalid",
            start: function () {
                Positioning.initialize($(this));
            },
        });
        $(".droppable").droppable({
            //Event to accept a draggable when dropped on the droppable
            drop: function (event, ui) {

                //Get the current draggable object
                var currentDraggable = $(ui.draggable).attr('id');

                //If there is an object prior to the current one
                if (pastDraggable != "") {
                    //Place past object into its original coordinate
                    $("#" + pastDraggable).animate($("#" + pastDraggable).data().originalLocation, "slow");
                    $(ui.draggable).position({
                        my: "center",
                        at: "center",
                        of: ".droppable"
                    });
                }

                //Store the current draggable object
                pastDraggable = currentDraggable;

                ;

                //Store the value of dropped item in the variable.
                draggableChoice = $(ui.draggable).text();
                // console.log("Dragged item : " + draggableChoice);
                localStorage.setItem("theirChoice", draggableChoice);
                console.log(localStorage.getItem("theirChoice"));


            },
            stop: function (event, ui) {
                alert("this stop thing works");
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



    }




    // ===========================================

    $('#submitBtn').on('click', function () {

        if (localStorage.getItem("theirChoice").trim() == right[questionCount - 1]) {

            correct += 1;
            console.log("correct: " + correct);
            $("#correct").text(correct);

        } else {
            wrong += 1;
            console.log("wrong: " + wrong);
            $("#wrong").text(wrong);
        }

        // tallyHo();


        DragChoices();
        // handleRevert($(this));
        // Positioning();
        $("#draggable1").css({
            'left': '0',
            'top': '0'
        });
        $("#draggable2").css({
            'left': '0',
            'top': '0'
        });
        $("#draggable3").css({
            'left': '0',
            'top': '0'
        });
        $('#final-topics').html('');


        if (questionCount < flashcards.length) {

            if (questionCount === flashcards.length - 1) {
                $("#submitBtn").text("Check Your Results!");
            }
            $('#questionH2').text(flashcards[questionCount].question);
            $('#choice1Text').text(flashcards[questionCount].choices[0]);
            $('#choice2Text').text(flashcards[questionCount].choices[1]);
            $('#choice3Text').text(flashcards[questionCount].choices[2]);

            questionCount++;

            // window.location.reload(questionCount--)

        } else {

            postScore();

            $("#resultDiv").show();
            $("#question-top").hide();
            $("#choices").hide();
            $(".final-topics-row").hide();

        }

    })

    function postScore() {

        let newScore = {
            name: userName,
            score: correct //this will change with a variable later
        }

        // let leftScoreDiv = $('<div>');
        // leftScoreDiv.attr('id', 'leftScoreDiv');
        let scoreRow = $("<div>");
        let scoreSpan = $("<span>")
        scoreRow.text(`User Name: ${newScore.name}`)
        scoreSpan.text(`Your Score: ${newScore.score}`);
        // leftScoreDiv.append(scoreRow, scoreSpan)
        $("#leftScore").prepend(scoreRow, scoreSpan);


        $.post("api/scores", newScore, function (data) {
            console.log(data);

            getAllScores(newScore);
        })
    }

    function getAllScores(newScore) {
        $.get("api/scores", function (data) {
            console.log(data);

            for (let i = 0; i < data.length; i++) {

                let scoreRow = $("<tr>");
                let scorePlace = $("<th>");
                let scoreName = $("<td>");
                let scoreNum = $("<td>");

                scorePlace.attr("scope", "row");

                console.log(data[i].userName === newScore.name && data[i].score === newScore.score)
                if(data[i].userName === newScore.name && data[i].score === newScore.score){
                    scoreRow.addClass("bg-info");
                }

                scorePlace.text(i + 1);
                scoreName.text(data[i].userName);
                scoreNum.text(data[i].score);

                scoreRow.append(scorePlace, scoreName, scoreNum);
                $(".tableBody").append(scoreRow);

            }
        })
    }

    var $el = $(".table-responsive");

    function anim() {
        var st = $el.scrollTop();
        var sb = $el.prop("scrollHeight") - $el.innerHeight();
        $el.animate({
            scrollTop: st < sb / 2 ? sb : 0
        }, 8000, anim);
    }

    function stop() {
        $el.stop();
    }
    anim();
    // $el.hover(stop, anim);

});