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
        console.log(flashcards.length)
        console.log(flashcards);
        $('#questionH2').text(flashcards[questionCount].question);
        $('#choice1Text').text(flashcards[questionCount].choices[0]);
        $('#choice2Text').text(flashcards[questionCount].choices[1]);
        $('#choice3Text').text(flashcards[questionCount].choices[2]);

        questionCount++;
    });


    // ===============================================
    // Function for drag and drop
    // ==========================================
    function dragAndDrop() {
        $(".logoCard").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid",
            //    revert:true
        });

        $("#launchPad").droppable({
            tolerance: "intersect",
            accept: ".logoCard",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                $("#launchPad").append($(ui.draggable));
                $(".logoCard").height(20);
            }
        });

        $(".holder").droppable({
            tolerance: "intersect",
            accept: ".logoCard",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                $('.holder h2').text('');
                draggableId = ui.draggable.attr("data-name");
                topicSelected.push(draggableId);
                $(this).append($(ui.draggable));

                // console.log(draggableId);
            }
        });
    }

    // calling the dragAndDrop function
    // ============================================
    dragAndDrop();

    // ===========================================

    $('#submitBtn').on('click', function () {

        if(questionCount < flashcards.length){
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