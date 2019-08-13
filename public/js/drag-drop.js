$(document).ready(function () {

    // let topics;
    // let topicArray = [];
    // topics = localStorage.getItem('vTopicSelected');
    // topicArray = topics.split(",");

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

    });

    $('#submitBtn').on('click', function () {



        $('#questionH2').text(flashcards[0].question)

    })

});