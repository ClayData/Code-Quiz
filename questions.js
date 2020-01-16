var questions = [
    {
        title: "Which sign is equal to strict equality?",
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
var highScore = 0;

var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var startParagraph = document.getElementById("start-paragraph")
var answerButtonOne = document.getElementById("answer1");
var answerButtonTwo = document.getElementById("answer2");
var answerButtonThree = document.getElementById("answer3");
var answerButtonFour = document.getElementById("answer4");
var scoreEl = document.getElementById("score-keeper");
var inputEl = document.getElementById("submit-form");
var viewScoreButton = document.getElementById("view-scores");
var goBackButton = document.getElementById("go-back");


startButton.addEventListener("click", startGame);


function startGame() {
    console.log("started")
    startButton.classList.add('hide');
    startParagraph.classList.add('hide');
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
    quizTimer();
}

function nextQuestion() {
    showQuestion()    
    currentQuestionIndex++;        
}

function showQuestion () {  
    if(currentQuestionIndex >= 5){
        endScreen()
    }
    questionElement.textContent = questions[currentQuestionIndex].title;
    answerButtonOne.textContent = questions[currentQuestionIndex].choices[0];
    answerButtonTwo.textContent = questions[currentQuestionIndex].choices[1];
    answerButtonThree.textContent = questions[currentQuestionIndex].choices[2];
    answerButtonFour.textContent = questions[currentQuestionIndex].choices[3];
    answerButtonsElement.addEventListener("click", selectAnswer);
    answerButtonsElement.addEventListener("click", nextQuestion);
    
}

function selectAnswer(e) {
    var selectedButton = e.target.textContent;
    if(selectedButton == questions[currentQuestionIndex - 1].answer){
        highScore++;
        
    }
    else{
        timeLeft = timeLeft - 15;
    }

    console.log(selectedButton)
    console.log(questions[currentQuestionIndex - 1].answer)
    console.log(highScore);
}

var timerEl = document.getElementById("start-timer");

function quizTimer() {
    var timeLeft = 75;
    
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if(timeLeft === 0 || currentQuestionIndex > 5){
            clearInterval(timeInterval);
            endScreen();
        }
    }, 1000);
}

function endScreen (){
    scoreEl.textContent = highScore;
    questionContainerElement.classList.add('hide');
    viewScoreButton.classList.remove('hide');
    inputEl.classList.remove('hide');
    goBackButton.classList.remove('hide');
}

var scoreListEl = document.getElementById("score-list");

inputEl.addEventListener("click", function(event){
    event.preventDefault();

    var initials = document.querySelector("#score-submit").value;

    
    localStorage.setItem("highscore", JSON.stringify(highScore));
    localStorage.setItem("initials", JSON.stringify(initials));  
    
    var storedInitials = JSON.parse(localStorage.getItem("initials"));
    var storedScores = JSON.parse(localStorage.getItem("highscore"));

    var li = document.createElement("li");
    li.textContent = storedInitials + " " + storedScores;

    scoreListEl.append(li);
})

viewScoreButton.addEventListener("click", function(){
    inputEl.classList.add('hide');
    scoreListEl.classList.remove('hide');
    viewScoreButton.classList.add('hide');
})

goBackButton.addEventListener("click", function(){
    document.location.reload(true);
})

