//  Variable that will hold our setInterval
var intervalId;
var count = 0;
var score = 0;

// Variable qTimer will hold the setInterval when we start the game
var qTimer;

const triviaQuestions = [
    {
        question: "Who is the best offensive catcher in NY Mets history?",

        answers: {
            a: "Keith Hernandez",
            b: "Mike Piazza",
            c: "Travis d'Arnaud",
            d: "Gary Sanchez"
        },

        correctAnswer: "b"
    },
    {
        question: "In the 1985 film 'The Last Dragon', who's the baddest?",

        answers: {
            a: "Sho'nuff",
            b: "Michael Jackson",
            c: "Superfly",
            d: "Rick James"
        },

        correctAnswer: "a"
    },
    {
        question: "How can she slap?",

        answers: {
            a: "Can she?",
            b: "She can't",
            c: "But she did",
            d: "Wow"
        },

        correctAnswer: "d"
    }

]


function displayQuestion() {
 

    // clear the contents of the triviaContent div
    $(".triviaContent").empty();
    $(".timer").empty();
    // create a div to store each Question and answer slide
    var questionDiv = $("<div>").addClass("question");
    // create an h3 tag to store the individual question
    var question = $("<h3>").text(triviaQuestions[count].question)
    // create a div to store the answer choices
    var answers = $("<div>")
    // create p tags to store individual answers
    var a = $("<h4>").text(triviaQuestions[count].answers.a);
    var b = $("<h4>").text(triviaQuestions[count].answers.b);
    var c = $("<h4>").text(triviaQuestions[count].answers.c);
    var d = $("<h4>").text(triviaQuestions[count].answers.d);
    a.attr("data-choice","a");
    b.attr("data-choice","b");
    c.attr("data-choice","c");
    d.attr("data-choice","d");
    a.addClass("answers");
    b.addClass("answers");
    c.addClass("answers");
    d.addClass("answers");

    //  append everything to questionDiv
    questionDiv.append(question);
    questionDiv.append("<hr>");
    questionDiv.append(a, b, c, d);
    $(".triviaContent").append(questionDiv);

    //question timer
    $(".timer").append("Time Remaining: ");
}

function stopGame(){
    clearInterval(nextQuestion);

}

function nextQuestion(){
      // Use nextQuestion to hold the setInterval to run nextImage.

        //display the 1st question
        displayQuestion();

        // TODO: Register click on ".answers" class-
        // Adding click event listeners to all elements with a class of "answers"
          

           $(document).on("click", ".answers",function(){
            var guess = $(this).attr("data-choice");
            // if (guess == triviaQuestions[count].correctAnswer) {
                // $(".timer").text(guess)
                console.log("Guess: " + guess);
                console.log("Correct answer: "+triviaQuestions[count].correctAnswer)
            // } else {
                // $(".timer").text(guess)
                // console.log(triviaQuestions[count].correctAnswer)

            // }
        })

          // Increment the count by 1.
          count++;


        //If the count is the same as the length of the questions array, stop the game
      if (count == triviaQuestions.length){
        stopGame();

    }

}


$(document).ready(function(){

    var start = function gamestart(){
        $(this).hide();
        console.log(triviaQuestions);
        // displayQuestion();
        qTimer = setInterval(nextQuestion,5000);
    }

    
    $(".startbtn").on("click", start);


})

