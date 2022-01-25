var timerEl = document.querySelector(".countDown");
var startButton = document.querySelector(".start-button");

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