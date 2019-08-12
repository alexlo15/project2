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