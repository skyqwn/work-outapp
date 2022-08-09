let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const clockContainer = document.querySelector(".clock-container");
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
let intervalId;

// startBtn.onclick = () => {
//   clearInterval(intervalId);
//   intervalId = setInterval(operateTimer, 10);
// };

const clockStart = () => {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
};

startBtn.addEventListener("click", clockStart);

const clockStop = () => {
  clearInterval(intervalId);
};

stopBtn.addEventListener("click", clockStop);

// stopBtn.onclick = () => {
//   clearInterval(intervalId);
// };

const clockReset = () => {
  clearInterval(intervalId);
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  appendTens.textContent = "00";
  appendSeconds.textContent = "00";
  appendMinutes.textContent = "00";
};

resetBtn.addEventListener("click", clockReset);

// resetBtn.onclick = () => {
//   clearInterval(intervalId);
//   tenMillis = 0;
//   seconds = 0;
//   minutes = 0;
//   appendTens.textContent = "00";
//   appendSeconds.textContent = "00";
//   appendMinutes.textContent = "00";
// };

// 10ms 마다 시간에 대한 숫자가 증가한다!
const operateTimer = () => {
  tenMillis++;
  appendTens.innerText = tenMillis > 9 ? tenMillis : "0" + tenMillis;
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.innerText = seconds > 9 ? seconds : "0" + seconds;
    tenMillis = 0;
    appendTens.innerText = "00";
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerText = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    appendSeconds.innerText = "00";
  }
};
