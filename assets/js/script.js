// questions for quiz
var javaQuestions = [
    {
    question: "What does the DOM stand for?",
    answers: {a: "document object model", b: "document object modal", c: "documentation object modelation", d: "document objext modulation"},
    correctAnswer: "a"
    },
    {
    question: "When selecting a class attribute using querySelector, what prefix needs to be added to the class name?",
    answers: {a: "#", b: "$", c: ".", d: "/"},
    correctAnswer: "c"
    },
    {
    question: "Which of the following shows correct use of Camel Case?",
    answers: {a: "CamelCase", b: "cAmelcAse", c: "xXcamelcaseXx", d: "camelCase"},
    correctAnswer: "d"
    },
    {
    question: "What does the browswer event submit do?",
    answers: {a: "Submit a form using the enter key", b: "Submit a form using a button or the enter key", c: "Launch me into the sun"},
    correctAnswer: "c"
    },
    {
    question: "What do you use to save an array of objects to the browser's local storage?",
    answers: {a: "JSON.stringify()", b: "JSON.derulo()", c: "JSON.parse()", d: "parseInt()"},
    correctAnswer: "a"
    }
];

// user starter score
var score = 0;

// create HTML using DOM methods
var body = document.body;


//start quiz, hide certain elements and show others.
function startQuiz(){

}

//call when a question is answered?
function nextQuestion(){
  //show next question.
}

//call when last question has been answered?
function endQuiz(){
  //stop timer, show highscores form...?
}

// need a function that takes the questions and turns them into html
// then pass that function through the timed quiz structure

// need to define startQuiz function
var startQuiz = function(javaQuestions) {
    var quizContainerEl = document.createElement("div");
    quizContainerEl.className = "quiz-container";
    
}


// creates event listener for button click prompting a start quiz function using the javaQuestions variables
button.addEventListener("click", function() {
    startQuiz;
});



// needs to display questions 1 at a time
// needs to move on to next question with correct answer
// needs to subtract 5 seconds and move on to next question with incorrect answer
// at the end, needs to add remaining seconds with correct answers and display
// option to add initials and save score in localStorage
