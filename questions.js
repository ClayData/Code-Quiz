var questions = [
    {
        title: "Which is sign is equal to strict equality?",
        choices: ["=", "==", "===", "!=="],
        answer: "==="
    },
    {
        title: "A _____ is the type for true/false",
        choices: ["boolean", "string", "float", "var"],
        answer: "boolean"
    },
    {
        title: "Array indexing starts at ___",
        choices: ["a", "0", "1", "first"],
        answer: "0"
    },
    {
        title: "Javascript is commonly used with ____ & ____ languages",
        choices: ["HTML/CSS", "CSS/Python", "HTML/Python", "VBA/C++"],
        answer: "HTML/CSS"
    },
    {
        title: "If/____ statements are commonly used in JS",
        choices: ["than", "switch", "now", "else"],
        answer: "else"
    },
]

var currentQuestionIndex; 

var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var startParagraph = document.getElementById("start-paragraph")


startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started")
    startButton.classList.add('hide');
    startParagraph.classList.add('hide')
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    showQuestion();
    quizTimer();
}

function nextQuestion() {
    showQuestion(currentQuestionIndex)
}

function showQuestion () {
    questionElement.textContent = questions[currentQuestionIndex].title
}

function scoreTracker() {

}

function quizTimer() {

}
