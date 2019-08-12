$(document).ready(function(){
    // alert('flash-card attached');
    var topics = localStorage.getItem('vTopicSelected');  
    // alert("local Storage value: "+ topics);

    function getQuestions(topics) {
        let topicId = [];
        // alert(topics);
        switch(topics){
            case 'HTML':
                topicId.push('1');
                break;
        }
        $.get("/api/questions/"+topicId, function(data) {
          var questions=[];
          var answers=[];
          for (var i = 0; i < data.length; i++) {
           questions.push((data[i].question));
           answers.push(data[i].choice1);
          }

          $('#question').html(questions);
          $('#answers').html(answers);
         
        // console.log(data);
        // console.log(questions);
        // console.log(answers);
        });
      }
getQuestions(topics);

});


document.getElementById('timer').innerHTML =
  60 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
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