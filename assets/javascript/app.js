let questionIndex = 0;
let correct = 0;
let incorrect = 0;
let counter;

const triviaQuestions = [
  {
    question: "Who is the best offensive catcher in NY Mets history?",

    answers: {
      a: "Keith Hernandez",
      b: "Mike Piazza",
      c: "Travis d'Arnaud",
      d: "Gary Sanchez"
    },

    correctAnswer: "b",
    pic: "https://media.giphy.com/media/oLS8ZQ7KXwgW4/giphy.gif"
    // TODO: Add image URL for Answer reveal screen
  },
  {
    question: "In the 1985 film 'The Last Dragon', who's the baddest?",

    answers: {
      a: "Sho'nuff",
      b: "Michael Jackson",
      c: "Superfly",
      d: "Rick James"
    },

    correctAnswer: "a",
    pic: "https://media.giphy.com/media/KzntGpm9yM7GU/giphy.gif"
  },
  {
    question: "The beaver is the national emblem of which country?",

    answers: {
      a: "Finland",
      b: "Belarus",
      c: "Canada",
      d: "Germany"
    },

    correctAnswer: "c",
    pic: "https://media.giphy.com/media/yNP0BfeXv45qrAOsA1/giphy.gif"
  },
  {
    question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",

    answers: {
      a: "Cyndi Lauper",
      b: "Taylor Swift",
      c: "Gwen Stefani",
      d: "Lady Gaga"
    },

    correctAnswer: "d",
    pic: "https://media.giphy.com/media/1077brytnteWm4/giphy.gif"
  },
  {
    question:
      "The Pyrenees mountain range separates which two European countries?",

    answers: {
      a: "Germany & Poland",
      b: "France & Spain",
      c: "Italy & Switzerland",
      d: "Austria & Italy"
    },

    correctAnswer: "b",
    pic: "https://media.giphy.com/media/heUpfNZ6HuKY/giphy.gif"
  },
  {
    question: "According to Greek mythology who was the first woman on earth?",

    answers: {
      a: "Pandora",
      b: "Siri",
      c: "Alexa",
      d: "OK Google"
    },

    correctAnswer: "a",
    pic: "https://media.giphy.com/media/13RFJzIvmLA4Wk/giphy.gif"
  },
  {
    question:
      "In 1990, which American dance group had an international hit with the song 'Groove Is in the Heart'?",

    answers: {
      a: "La Bouche",
      b: "C & C Music Factory",
      c: "Deee-Lite",
      d: "Real McCoy"
    },

    correctAnswer: "c",
    pic: "https://media.giphy.com/media/wUIvf6l5yF9qo/giphy.gif"
  },
  {
    question: "Which group has only 4 members?",

    answers: {
      a: "Backstreet Boys",
      b: "98 Degrees",
      c: "N'Sync",
      d: "Spice Girls"
    },

    correctAnswer: "b",
    pic: "https://media.giphy.com/media/3o6fJgSjUSUSCwg7HW/giphy.gif"
  },
  {
    question:
      "On July 27, 2003 the existence of which mythical creature was officially disbanded thanks to the use of sonar beams and satellite navigation?",

    answers: {
      a: "Yeti",
      b: "Big Foot",
      c: "The Loch Ness Monster",
      d: "Chupacabra"
    },

    correctAnswer: "c",
    pic: "https://media.giphy.com/media/gOkkCfEjtscjC/giphy.gif"
  },
  {
    question: "Who won the first season of 'American Idol'?",

    answers: {
      a: "Kelly Clarkson",
      b: "Ruben Studdard",
      c: "Justin Guarini",
      d: "Carrie Underwood"
    },

    correctAnswer: "a",
    pic: "https://media.giphy.com/media/H0bMqAdVLj7BfEcVsc/giphy.gif"
  }
];

let countdownTimer = {
  time: 30,
  reset: function() {
    this.time = 30;
    $(".timer").html("<p>" + this.time + " seconds remaining</p>");
  },
  start: function() {
    counter = setInterval(countdownTimer.count, 1000);
  },
  stop: function() {
    clearInterval(counter);
  },
  count: function() {
    countdownTimer.time--;
    // console.log(countdownTimer.time);
    if (countdownTimer.time >= 0) {
      $(".timer").html("<p>" + countdownTimer.time + " seconds remaining</p>");
    } else {
      countdownTimer.reset();
      countdownTimer.stop();
      answerWrong();
    }
  }
};

function displayQuestion() {
  // console.log(questionIndex);
  countdownTimer.reset();
  countdownTimer.start();
  // clear the contents of the triviaContent div
  $(".triviaContent").empty();
  $(".timer").empty();
  // create a div to store each Question and answer slide
  let questionDiv = $("<div>").addClass("question");
  // create an h3 tag to store the individual question
  let question = $("<h3>").text(triviaQuestions[questionIndex].question);
  // create a div to store the answer choices
  let answers = $("<div>");
  // create p tags to store individual answers
  let a = $("<h4>").text(triviaQuestions[questionIndex].answers.a);
  let b = $("<h4>").text(triviaQuestions[questionIndex].answers.b);
  let c = $("<h4>").text(triviaQuestions[questionIndex].answers.c);
  let d = $("<h4>").text(triviaQuestions[questionIndex].answers.d);
  a.attr("data-choice", "a");
  b.attr("data-choice", "b");
  c.attr("data-choice", "c");
  d.attr("data-choice", "d");
  a.addClass("answer");
  b.addClass("answer");
  c.addClass("answer");
  d.addClass("answer");

  //  append everything to questionDiv
  questionDiv.empty();
  questionDiv.append(question);
  questionDiv.append("<hr>");
  questionDiv.append(a, b, c, d);
  $(".triviaContent").append(questionDiv);
}

function answerWrong() {
  incorrect++;
  showCorrectAnswer(false);
  //show wrong answer loading screen
}
function answerRight() {
  correct++;
  showCorrectAnswer(true);
  // show right answer loading screen
}

function showCorrectAnswer(x) {
  $(".triviaContent").empty();
  $(".timer").hide();
  let rightwrong = $("<h2>");
  let result;
  if (x) {
    result = "Right!";
    $(".triviaContent").append(
      "<h4>You picked: " +
        triviaQuestions[questionIndex].answers[
          triviaQuestions[questionIndex].correctAnswer
        ] +
        "</h4>"
    );
  } else {
    result = "Wrong!";
    $(".triviaContent").append(
      "<h4>Correct answer: " +
        triviaQuestions[questionIndex].answers[
          triviaQuestions[questionIndex].correctAnswer
        ] +
        "</h4>"
    );
  }
  rightwrong.text(result);
  $(".triviaContent").append(rightwrong);

  let gif = $("<img>");
  gif.attr("src", triviaQuestions[questionIndex].pic);
  gif.attr("id", "gif");
  $(".triviaContent").append(gif);

  // show next question after 5 seconds
  let delay = setTimeout(nextQuestion, 4000);
}

function showScore() {
  countdownTimer.stop();
  $(".timer").hide();
  $(".triviaContent").empty();
  let displayCorrect = $("<h4>").text("Correct: " + correct);
  let displayIncorrect = $("<h4>").text("Wrong: " + incorrect);
  $(".triviaContent").append($("<h2>").text("Game Over"));
  $(".triviaContent").append(displayCorrect, displayIncorrect);

  // create button to restart
  let btnRestart = $("<button>");
  btnRestart.text("Restart Game");
  btnRestart.attr("id", "restart");
  btnRestart.addClass("btn btn-outline-primary");
  $(".triviaContent").append("<br><br>");
  $(".triviaContent").append(btnRestart);
  questionIndex = 0;
  correct = 0;
  incorrect = 0;
}

function nextQuestion() {
  // Increment the count by 1.
  questionIndex++;
  $(".timer").show();

  //If the count is the same as the length of the questions array, stop the game
  if (questionIndex == triviaQuestions.length) {
    showScore();
  } else {
    displayQuestion();
  }
}

$(document).ready(function() {
  let start = function gamestart() {
    $(this).hide();
    // console.log(triviaQuestions);
    countdownTimer.reset();
    $(".timer").show();
    displayQuestion();
  };

  // register click events on generated questions
  $(document).on("mouseup", ".answer", function() {
    countdownTimer.stop();
    let guess = $(this).attr("data-choice");
    if (guess == triviaQuestions[questionIndex].correctAnswer) {
      // console.log("CORRECT!: " + guess);
      // console.log("Correct answer: "+triviaQuestions[questionIndex].correctAnswer);
      answerRight();
    } else {
      // console.log("WRONG!!: " + guess);
      // console.log("Correct answer: "+triviaQuestions[questionIndex].correctAnswer)
      answerWrong();
    }
  });

  $(".startbtn").on("click", start);
  $(document).on("click", "#restart", start);
});
