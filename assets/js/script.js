var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questions");
var choice = document.querySelector(".choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var timer;
var timerCount;

let quizQuestions = [
    {
        questions: "Which is of the follwing is NOT a logical operator used in Javascript?",
        choiceA: "&&",
        choiceB: "%",
        choiceC: "||",
        choiceD: "!",
        answer: "B",
    },
    {
        questions: "What is an Array?",
        choiceA: "An object that can store multiple values at once",
        choiceB: "A set of statements that performs a task or calculates a value",
        choiceC: "A procedure in JavaScript that waits for an event to occur",
        choiceD: "A basic control statement that allows you to loop through the properties of an object",
        answer: "A",
    },
    {
        questions: "What is a valid event that you can use with an event listener?",
        choiceA: "keypush",
        choiceB: "mouseup",
        choiceC: "null",
        choiceD: "chick",
        answer: "B",
    },
    {
        questions: "If const cars = ['Ford', 'Audi', 'Subaru', 'Toyota']: then what is cars[3]?",
        choiceA: "Subaru",
        choiceB: "Ford",
        choiceC: "Audi",
        choiceD: "Toyota",
        answer: "D",
    },
];

function startGame() {
    timerCount = 60;
    startTimer()
}

function startTimer() {
    // Sets interval in variable
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount;
      if(timerCount === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

//Send a message for when the timer runs out - also populate the word
function sendMessage() {
    timerEl.textContent = "You're out of time!";
}

// Event listener that starts the game when the start game button is clicked.
startButton.addEventListener("click", startGame);