$(document).ready(function () {

    let topics;
    let topicArray = [];
    topics = localStorage.getItem('vTopicSelected');
    console.log("Topics : on load : " + topics);
    topicArray = topics.split(",");

    var level = localStorage.getItem('skillLvl');
    console.log('Topics : ' + topics);


    // var questions = [];
    // var answers = [];

    var flashcards = [];
    // alert("local Storage value: "+ topics);





    //This function will make ajax call to get data depends on which topic and level selected.
    //storing the value of question and answer of data returned in array.
    function getQuestions() {
        let topicId = [];

        topicArray.forEach(function (item, index) {
            if (item === 'HTML') {
                switch (level) {
                    case '1':
                        topicId.push('1');
                        break;
                    case '2':
                        topicId.push('2');
                        break;
                    case '3':
                        topicId.push('3');
                        break;
                }
                console.log("After HTML Topic Id : " + topicId);
            }
            if (item === 'CSS') {
                switch (level) {
                    case '1':
                        topicId.push('4');
                        break;
                    case '2':
                        topicId.push('5');
                        break;
                    case '3':
                        topicId.push('6');
                        break;
                }
                console.log("After CSS Topic Id : " + topicId);
            }
            if (item === 'JS') {
                switch (level) {
                    case '1':
                        topicId.push('7');
                        break;
                    case '2':
                        topicId.push('8');
                        break;
                    case '3':
                        topicId.push('9');
                        break;
                }
                console.log("After JS Topic Id : " + topicId);
            }
           
        })
       
        console.log("Topic id : " + topicId);
        $.get("/api/questions/"+topicId , function (data) {

            for (var i = 0; i < data.length; i++) {

                let flashcard = {
                    question: data[i].question,
                    answer: data[i].choice1
                }

                flashcards.push(flashcard);
                // questions.push((data[i].question));
                // answers.push(data[i].choice1);

            }
            console.log(flashcards.length)

            generateHtml();
        });

    }
    //calling the function by passing the parameter stored in localstorage
    getQuestions();

    function generateHtml() {
        $(".carousel-inner").empty();
        // console.log(questions);
        // console.log(answers);
        console.log(flashcards);
        console.log(flashcards.length);
        // console.log(questions.length);
        for (var i = 0; i < flashcards.length; i++) {
            // console.log(questions[i]);
            let divOuter = $('<div>');
            let divColM8 = $('<div>');
            let divFlipBoxInner = $('<div>');
            let divFlipBoxFront = $('<div>');
            let h2Question = $('<h2>');
            let pQuestion = $('<p>');
            let divFlipBoxBack = $('<div>');
            let h2Answer = $('<h2>');
            let pAnswers = $('<p>');


            if (i === 0) {
                divOuter.addClass("item active");
            } else {
                divOuter.addClass("item");
            }
            divColM8.addClass("flip-box");
            divFlipBoxInner.addClass("flip-box-inner");
            divFlipBoxFront.addClass("flip-box-front");
            h2Question.text("Question");
            // pQuestion.text(questions[i]);
            pQuestion.text(flashcards[i].question);
            divFlipBoxBack.addClass("flip-box-back");
            h2Answer.text("Answer");
            // pAnswers.text(answers[i]);
            pAnswers.text(flashcards[i].answer);

            divFlipBoxFront.append(h2Question, pQuestion);
            divFlipBoxBack.append(h2Answer, pAnswers);
            divFlipBoxInner.append(divFlipBoxFront, divFlipBoxBack);
            divColM8.append(divFlipBoxInner);
            divOuter.append(divColM8);
            $(".carousel-inner").append(divOuter);
        }
    }

    $('.nextBtn').on('click', function () {
        //   alert('next clicked');
        console.log(questions);
        console.log(answers);
        for (var i = 1; i < questions.length; i++) {
            $('#question').html(questions[i]);
            $('#answers').text(answers[i]);
        }
    });

    $('.previous').on('click', function () {
        alert('Previous clicked');
    });


    // shuffle functions!
    $(".shuffle").on('click', function () {
        for (let i = flashcards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = flashcards[i];
            flashcards[i] = flashcards[j];
            flashcards[j] = temp;
        }
        console.log(flashcards);
        generateHtml();
    });

});


document.getElementById('timer').innerHTML =
  10 + ":" + 01;

startTimer();

function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) {
        m = m - 1
    }
    //if(m<0){alert('timer completed')}

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

//  Variable that will hold the button alert's timeout when it is clicked.
var delayButtonAlert;

//  Timeouts in JavaScript
//  Set our window alert to run one second after the function's called.
var windowTimeout = setTimeout(function() {
  alert("You will be given 10 minutes to study the topics you selected.");
}, 00);

//  Start on click.
$(".right").on("click", function() {
  //  Set the button alert's timeout to run three seconds after the function's called.
  delayButtonAlert = setTimeout(function() {
    alert("Your 10 minute study session has been completed let's head over to the Quiz section.");
    // 600000 = 10mins
  }, 3000);
});





