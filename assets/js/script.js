var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var start = document.getElementById("start");
var quiz = document



var timer;
var timerCount;

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