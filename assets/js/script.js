var timerEl = document.querySelector(".timer-count");
var quiz = document.querySelector(".quiz-container");
var startButton = document.getElementById("start-btn");
var start = document.getElementById("start");
var questions = document.getElementById("question-container");
var question = document.getElementById("question");
//var choice = document.getElementById("choice-buttons");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);
choiceD.addEventListener("click", checkAnswer);
var currentQuestion = 0;
var timer;
var timerCount;
var score = 0;
var verify = document.getElementById("verify");
var scoreEl = document.getElementById("score");
questions.style.display = "none";
// Array that contains the questions and posisble answers for each question
let quizQuestions = [
  {
    question:
      "Which is of the follwing is NOT a logical operator used in Javascript?",
    choices: [
      { text: "&&", correct: false },
      { text: "%", correct: true },
      { text: "||", correct: false },
      { text: "!", correct: false },
    ],
  },
  {
    question: "What is an Array?",
    choices: [
      { text: "An object that can store multiple values at once", correct: true },
      { text: "A set of statements that performs a task or calculates a value", correct: false },
      { text: "A procedure in JavaScript that waits for an event to occur", correct: false },
      { text: "A basic control statement that allows you to loop through the properties of an object", correct: false },
    ],
  },
  {
    question: "What is a valid event that you can use with an event listener?",
    choices: [
        { text: "keypush", correct: false },
        { text: "mouseup", correct: true },
        { text: "null", correct: false },
        { text: "chick", correct: false },
    ],
  },
  {
    question: "If const cars = ['Ford', 'Audi', 'Subaru', 'Toyota']: then what is cars[3]?",
    choices: [
        { text: "Subaru", correct: false },
        { text: "Ford", correct: false },
        { text: "Audi", correct: false },
        { text: "Toyota", correct: true },
    ],
  },
];
// Function that starts the game
function startGame() {
  startButton.style.display = "none";
  timerCount = 60;
  startTimer();
  initiateQuestion();
}
//Function that starts the timer
function startTimer() {
  // Sets interval in variable
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount < 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
      timerEl.textContent = "You're out of time!";

      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
//Function that starts the questions after the user has clicked start quiz
function initiateQuestion() {
    questions.style.display = "block";
    nextQuestion(quizQuestions[currentQuestion]);
    //currentQuestion++;
}
// Function that sends the user to the next question
function nextQuestion(q) {
    question.innerText = q.question;
    
        choiceA.innerText = q.choices[0].text;
        choiceA.setAttribute("data-correct", q.choices[0].correct);

        choiceB.innerText = q.choices[1].text;
        choiceB.setAttribute("data-correct", q.choices[1].correct);

        choiceC.innerText = q.choices[2].text;
        choiceC.setAttribute("data-correct", q.choices[2].correct);
        
        choiceD.innerText = q.choices[3].text;
        choiceD.setAttribute("data-correct", q.choices[3].correct);
        
}

function checkAnswer() {
    var right = this.getAttribute("data-correct");
    if (right == "true")   {
        score += 10;
        verify.textContent = "You got it right!";
    } else {
        timerCount -= 5
        verify.textContent = "You got it wrong!";
    }
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        nextQuestion(quizQuestions[currentQuestion]);
    }
    else {
        clearInterval(timer);
        timerEl.textContent = "You've finished the quiz!";

      // Calls function to create and append image
      sendMessage();
    }
}

//Send a message for when the timer runs out - also populate the word
function sendMessage() {
    questions.style.display = "none";
    console.log("Score", score + timerCount);
    
}

// Event listener that starts the game when the start game button is clicked.
startButton.addEventListener("click", startGame);
