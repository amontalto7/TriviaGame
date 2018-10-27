//TODO:
// implement seperate functions for attempted and not attempted
// function attempted: 
// clear timer(s)
// ansAttempted = true
// log choice selected
// increment attempted count
// if choice === correct answer
//     display "correct"
//     increment correct counter
// else
//     display "sorry"
//     increment missed counter

//     display correct answer; (seperate function)
// -------------
// function notattempted
// executes after 25 seconds have passed
// if 
// ansattempted not true
// clear timers when called
// increment missed count
// display stats

// look up melanie west trivia 

// ---------display answer function
// 5 seconds before a new question is displayed
// if quiz not done
// newQuestion = setTimeout (displaynewquestion,5000)
// else
// gameover
// increment question counter

// set interval for countdown
//set timer for questions

//  Variable that will hold our setInterval
var intervalId;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var answerClicked = false;
var showAnswer;

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
        question: "The Pyrenees mountain range separates which two European countries?",

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
            c: "Cortana",
            d: "OK Google"
        },

        correctAnswer: "a",
        pic: "https://media.giphy.com/media/13RFJzIvmLA4Wk/giphy.gif"
    },
    {
        question: "In 1990, which American dance group had an international hit with the song 'Groove Is in the Heart'?",

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
        question: "On July 27, 2003 the existence of which mythical creature was officially disbanded thanks to the use of sonar beams and satellite navigation?",

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
]

var countdownTimer = {
    time : 30,
    reset: function() {
        this.time = 30;
        $('.timer').html('<p>' + this.time + ' seconds remaining</p>');
    },
    start: function() {
        counter = setInterval(countdownTimer.count, 1000);	
    },
    stop: function() {
        clearInterval(counter);
    },
    count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
        if (countdownTimer.time >= 0) {
            $('.timer').html('<p>' + countdownTimer.time + ' seconds remaining</p>');
        }
        else {
            questionIndex++;
            answerWrong();
            countdownTimer.reset();
            if (questionIndex < questionArray.length) {
                nextQuestion();
            } else {
                $(".answer").hide();
                showScore();
            }
        }
    }
};

function displayQuestion() {
    countdownTimer.reset();
    countdownTimer.start();
    // clear the contents of the triviaContent div
    $(".triviaContent").empty();
    $(".timer").empty();
    // create a div to store each Question and answer slide
    var questionDiv = $("<div>").addClass("question");
    // create an h3 tag to store the individual question
    var question = $("<h3>").text(triviaQuestions[questionIndex].question)
    // create a div to store the answer choices
    var answers = $("<div>")
    // create p tags to store individual answers
    var a = $("<h4>").text(triviaQuestions[questionIndex].answers.a);
    var b = $("<h4>").text(triviaQuestions[questionIndex].answers.b);
    var c = $("<h4>").text(triviaQuestions[questionIndex].answers.c);
    var d = $("<h4>").text(triviaQuestions[questionIndex].answers.d);
    a.attr("data-choice","a");
    b.attr("data-choice","b");
    c.attr("data-choice","c");
    d.attr("data-choice","d");
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

function answerWrong(){
    incorrect++;
}

function answerRight(){
    correct++;
}

function showScore(){
    countdownTimer.stop();
    $(".timer").empty();
    $(".triviaContent").empty();
    var displayCorrect = $("<p>").text("Correct: " + correct);
    var displayIncorrect = $("<p>").text("Wrong: " + incorrect);
    $(".triviaContent").append($("<h2>").text("Game Over"));
    $(".triviaContent").append(displayCorrect,displayIncorrect);
    // $(".startbtn").show();
}

function nextQuestion(){
        // If time ran out before an answer was selected during the previous question, increment 'incorrect' count
        // if (!answerClicked){
        //     incorrect++;
        // }
        //display the 1st question
        // Increment the count by 1.
        questionIndex++;


        // TODO: Register click on ".answer" class-
        // Adding click event listeners to all elements with a class of "answer"



        //If the count is the same as the length of the questions array, stop the game
      if (questionIndex == triviaQuestions.length){
        showScore();
    } else {
        displayQuestion();
    }
}


$(document).ready(function(){

    var start = function gamestart() {
        $(this).hide();
        console.log(triviaQuestions);
        countdownTimer.reset();
        displayQuestion(); 
        // questionTimeout = setInterval(nextQuestion,10000); // 
       
        // register click events on generated questions
        $(document).on("click", ".answer",function(){
            countdownTimer.stop();
            var guess = $(this).attr("data-choice");
         if (guess == triviaQuestions[questionIndex].correctAnswer) {
            console.log("CORRECT!: " + guess);
            console.log("Correct answer: "+triviaQuestions[questionIndex].correctAnswer);        
            answerRight();
         } else {
            console.log("WRONG!!: " + guess);
            console.log("Correct answer: "+triviaQuestions[questionIndex].correctAnswer)        
            answerWrong();
            //  incorrect++;
         }
        nextQuestion();

     })

    }
    
    $(".startbtn").on("click", start);

})