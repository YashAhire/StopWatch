// Global variables
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to display the time in the format "HH:MM:SS"
function displayTime() {
  const displayElement = document.getElementById("display");
  displayElement.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Function to start or stop the stopwatch
function startStop() {
  if (isRunning) {
    clearInterval(timer);
  } else {
    timer = setInterval(updateTime, 1000);
  }
  isRunning = !isRunning;
  document.getElementById("startStopButton").innerText = isRunning ? "Stop" : "Start";
}

// Function to update the time every second
function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  displayTime();
}

// Function to reset the stopwatch
function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
  document.getElementById("startStopButton").innerText = "Start";
}

// Event listeners
document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);
