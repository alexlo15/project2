$(document).ready(function () {
  // alert('flash-card attached');
  var topics = localStorage.getItem('vTopicSelected');
  var level = localStorage.getItem("SkillLvl");
  // alert("local Storage value: "+ topics);


  function getQuestions(topics) {
    let topicId = [];
    // alert(topics);
    switch (topics) {
      case 'HTML':
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
        break;
      case 'CSS':
        switch (level) {
          case '1':
            topicId.push('4');
            break
          case '2':
            topicId.push('5');
            break
          case '3':
            topicId.push('6');
            break
        }
        break;
      case 'JS':
        switch (level) {
          case '1':
            topicId.push('7');
            break
          case '2':
            topicId.push('8');
            break
          case '3':
            topicId.push('9');
            break
        }
        break;
    }
    $.get("/api/questions/" + topicId, function (data) {
      var questions = [];
      var answers = [];
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