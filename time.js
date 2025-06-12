let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let pomodoroBtn = document.getElementById('pomodoro');
let shortBreakBtn = document.getElementById('short-break');

let interval;
let isRunning = false;
let timeLeft = 25 * 60; // default to 25 minutes

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(interval);
      isRunning = false;
      alert("Time's up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  timeLeft = 25 * 60;
  updateDisplay();
}

function setPomodoro() {
  pauseTimer();
  timeLeft = 25 * 60;
  updateDisplay();
}

function setShortBreak() {
  pauseTimer();
  timeLeft = 5 * 60;
  updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
pomodoroBtn.addEventListener('click', setPomodoro);
shortBreakBtn.addEventListener('click', setShortBreak);

updateDisplay();