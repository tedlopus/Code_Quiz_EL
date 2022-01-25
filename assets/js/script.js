var timerEl = document.querySelector(".timer-count");
var quiz = document.querySelector(".quiz-container");
var startButton = document.getElementById("start-btn");
var start = document.getElementById("start");
var questions = document.getElementById("question-container");
var question = document.getElementById("question");
var choice = document.getElementById("choice-buttons");
var currentQuestion;
var timer;
var timerCount;

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

function startGame() {
  startButton.classList.add('hide');
  timerCount = 60;
  startTimer();
  initiateQuestion();
}

function startTimer() {
  // Sets interval in variable
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
//Function that starts the questions after the user has clicked start quiz
function initiateQuestion() {
    nextQuestion(quizQuestions[currentQuestion]);
    currentQuestion++;
}
// Function that sends the user to the next question
function nextQuestion(q) {
    questions.innerText = q.question;
    for (let i = 0; i < q.choices.length; i++) {
        choice.innerText = q.choices[i].text;

        if (q.choices[i].correct) {
            choice.dataset.correct = q.choices[i].correct;
            console.log(choice.dataset.correct)
        }
    }
}

//Send a message for when the timer runs out - also populate the word
function sendMessage() {
  timerEl.textContent = "You're out of time!";
}

// Event listener that starts the game when the start game button is clicked.
startButton.addEventListener("click", startGame);
