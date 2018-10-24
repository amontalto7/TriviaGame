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
    }



]


$(document).ready(function(){

    var start = function gamestart(){
        $(this).hide();
        console.log(triviaQuestions);
    }
    
    $(".startbtn").on("click", start);


})

