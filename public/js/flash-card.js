$(document).ready(function () {

    let topics;
    let topicArray = [];
    topics = localStorage.getItem('vTopicSelected');
    topicArray = topics.split(",");

    var level = localStorage.getItem('skillLvl');
    console.log('Topics : ' + topics);


    var questions = [];
    var answers = [];



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

                questions.push((data[i].question));
                answers.push(data[i].choice1);

            }
            console.log(questions.length)

            generateHtml();
        });

    }
    //calling the function by passing the parameter stored in localstorage
    getQuestions();

    function generateHtml() {

        console.log(questions);
        console.log(answers);
        console.log(questions.length);
        for (var i = 0; i < questions.length; i++) {
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
            pQuestion.text(questions[i]);
            divFlipBoxBack.addClass("flip-box-back");
            h2Answer.text("Answer");
            pAnswers.text(answers[i]);

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


});


document.getElementById('timer').innerHTML =

    60 + ":" + 00;

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
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59"
    };
    return sec;
}