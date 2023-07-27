let timerInterval;
let timerTime = 0;
let timerRunning = false;

let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

function startTimer() {
  if (!timerRunning) {
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    timerTime = hours * 3600 + minutes * 60 + seconds;
    displayTime("timerDisplay", timerTime);

    timerRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (timerTime <= 0) {
    pauseTimer();
    alert("Timer completed!");
  } else {
    timerTime--;
    displayTime("timerDisplay", timerTime);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  pauseTimer();
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;

  timerTime = 0;
  displayTime("timerDisplay", timerTime);
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function updateStopwatch() {
  stopwatchTime++;
  displayTime("stopwatchDisplay", stopwatchTime);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  pauseStopwatch();
  stopwatchTime = 0;
  displayTime("stopwatchDisplay", stopwatchTime);
}

function displayTime(displayElementId, time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;

  document.getElementById(displayElementId).textContent = formattedTime;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
