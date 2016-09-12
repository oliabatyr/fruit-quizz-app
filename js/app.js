$(function() {
  var questions = [{
    qNum: 0,
    image: "images/noni.jpg",
    answers: ["Durain", "Mangosteen", "Noni"],
    correctAnswer: "Noni",
    fact: "Part of the coffee family, the noni goes by many names including Indian mulberry, custard apple and mengkudu. Its fruit is traditionally used by the Polynesians for healing liver diseases."
  }, {
    qNum: 1,
    image: "images/pulasan.jpg",
    answers: ["Longsat", "Pulasan", "Jackfruit"],
    correctAnswer: "Pulasan",
    fact: "Closely linked and sometimes mistaken for the rambutan, pulasan is part of the Sapindaceae family. Its white fruit is extremely sweet with a big woody seed in the middle."

  }, {
    qNum: 2,
    image: "images/rambutan.jpg",
    answers: ["Rambutan", "Wood apple", "Dragon fruit"],
    correctAnswer: "Rambutan",
    fact: "Once the rambutan’s hairy exterior is peeled away, its deliciously sweet and sticky flesh is revealed inside, with a large woody seed in the middle."
  }, {
    qNum: 3,
    image: "images/snake-fruit.jpg",
    answers: ["Longan", "Snake fruit", "Dragon fruit"],
    correctAnswer: "Snake fruit",
    fact: "Also known as salak, this fruit has a sweet and tangy taste like the pineapple. A species of the palm tree, it got its name from its brownish-red scaly skin."
  }, {
    qNum: 4,
    image: "images/water-apple.jpg",
    answers: ["Water apple", "Bread fruit", "Santol"],
    correctAnswer: "Water apple",
    fact: "Also known as the ‘jambu air’ in Malay, this fruit is small, round and pinkish red. It is shaped like a bell, roughly 3cm wide and is very crunchy and juicy."
  }];

//define variables
var counter = 0;
var correct = 0;

  //buildQuestion(questions);
buildQuiz();


function buildQuiz()
{

if( counter < questions.length)
{
  $('#quiz-image').attr('src',questions[counter].image);

  $(questions[counter].answers).each(function(){
    $('.pic1').append('<li class = "answerLI"><input type="radio" name="option" class="option" value="'+ this +'"> <span class="answer">'+ this +'</span></li>');

  });
}
else {
  if (correct > 1 || correct ===0) {
  $('.facts').append('<h1 id = "correctMessage">You got '+ correct +' answers correct out of 5</h1>');
} else {
  $('.facts').append('<h1 id = "correctMessage">You got '+ correct +' answer correct out of 5</h1>');
}
$('#nextquestion').hide();

//Show reset button
$('#correctMessage').append('<br><input id = "reset" type = "button" value = "Reset">');

$('#reset').click(function(){
  counter = 0;
  correct = 0;
  $('#correctMessage').remove();
  $(this).remove();
  $('#nextquestion').show();
  $('.fact1').hide();
  buildQuiz();

  $('#nextquestion').click(function(){
    $('.fact1').show();
  });



});

}
}
  function buildQuestion(question) {
    for (var i = 0; i < questions.length; i++) {
      console.log(question[i].question);
      // Append question page.
      $('.visual').append('<img src='  + question[i].image + '>');
      $('.visual').append('<input type="radio" name="option" class="option" value="0"> <span class="answer">'+ question[i].answers[0] +'</span>');

      var guess = $('a').attr('title', question[i].qNum);

      checkAnswer(guess, question[i].correctAnswer);
    }
  }
  function checkAnswer(guess, correctAnswer) {
    if (guess === correctAnswer) {
      counter++;
    }
  }

  function cleanQuiz()
  {
  }

  $('document').ready(function(){

    $('#nextquestion').click(function(){
        var checkedValue = $('input[name=option]:checked').val();

        //Show fact whether answer is right or wrong
        $('.facts').show();
        $('.fact1').html(questions[counter].fact);



        if(counter < questions.length)
        {
          var selectedAnswer = $('input[name=option]:checked').val();
          var correctSelection = questions[counter].correctAnswer;
          counter++;
          if(selectedAnswer == correctSelection)
          {
            correct++;
          }
          $('.answerLI, .answer').remove();

          buildQuiz();
      }
    });
  });
});
