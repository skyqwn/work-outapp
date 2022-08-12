const pullUpForm = document.querySelector("#pullup-form");
const pullupInput = document.querySelector(".pullup-count");
const pullUpResult = document.querySelector(".pullup-result");
const pushUpForm = document.querySelector("#pushup-form");
const pushUpInput = document.querySelector(".pushup-count");
const pushUpResult = document.querySelector(".pushup-result");
const squatForm = document.querySelector("#squat-form");
const squatInput = document.querySelector(".squat-count");
const squatResult = document.querySelector(".squat-result");
const finishWorkOut = document.querySelector(".finish-workout");
const todayWorkout = document.querySelector(".today-workout");
const todayPullUp = document.querySelector(".today-pullup");
const todayPushUp = document.querySelector(".today-pushup");
const todaySquat = document.querySelector(".today-squat");
const todayTime = document.querySelector(".today-time");
const closeBtn = document.querySelector("#close-btn");
const logOut = document.querySelector(".log-out");
const chartBtn = document.querySelector("#chart-btn");
const workoutWrapper = document.querySelector(".workout-wrapper");
const toggleBtn = document.querySelector(".nav-toggleBtn");

///운동시간////
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
//
let pullupArr = JSON.parse(localStorage.getItem("pullup")) || [];
let pullUpCount = 0;
let pushUpCount = 0;
let squatCount = 0;

let totalCount = {};

// ----pull-up------------------//

const savePullUp = (data) => {
  pullupArr.push(data);
  localStorage.setItem("pullup", JSON.stringify(pullupArr));
};

const pullUpDelete = (e) => {
  1;
  e.preventDefault();
  const div = e.target.parentElement;
  div.remove();

  const removePullup = pullupArr.filter((pullup) => {
    return div.id !== pullup.id;
  });
  pullupArr = removePullup;
  localStorage.setItem("pullup", JSON.stringify(pullupArr));
};

const paintPullUp = (data) => {
  const div = document.createElement("div");
  div.id = data.id;
  div.classList.add("pullup-div");
  const set = document.createElement("h3");
  set.innerText = `${data.set}세트:   `;
  const span = document.createElement("span");
  span.innerText = `  ${data.pullUp}회`;
  const xBtn = document.createElement("button");
  xBtn.innerText = "❌";
  xBtn.addEventListener("click", pullUpDelete);
  div.append(set);
  div.append(span);
  div.append(xBtn);
  pullUpResult.append(div);
};

const handleCount = (e) => {
  pullUpCount++;
  e.preventDefault();
  const pullUp = pullupInput.value;
  if (!pullUp) {
    return alert("값을 입력해주세요");
  }
  pullupInput.value = "";

  const dataObj = {
    pullUp,
    id: Date.now().toString(),
    set: pullUpCount,
  };
  savePullUp(dataObj);
  paintPullUp(dataObj);
};

if (localStorage.getItem("pullup") !== null) {
  pullupArr = JSON.parse(localStorage.getItem("pullup"));
  pullupArr.forEach(paintPullUp);
}

// --------pushup---------------------//

let pushupArr = JSON.parse(localStorage.getItem("pushup")) || [];

const savePushUp = (data) => {
  pushupArr.push(data);
  localStorage.setItem("pushup", JSON.stringify(pushupArr));
};

const pushUpDelete = (e) => {
  e.preventDefault();
  const div = e.target.parentElement;
  div.remove();

  const removePushup = pushupArr.filter((pushup) => {
    return pushup.id !== div.id;
  });

  pushupArr = removePushup;
  localStorage.setItem("pushup", JSON.stringify(pushupArr));
};

const paintPushUp = (data) => {
  const div = document.createElement("div");
  div.id = data.id;
  div.classList.add("pushup-div");
  const set = document.createElement("h3");
  set.innerText = `${data.set}세트:   `;
  const span = document.createElement("span");
  span.innerText = `  ${data.pushUp}회`;
  const xBtn = document.createElement("button");
  xBtn.innerText = "❌";
  xBtn.addEventListener("click", pushUpDelete);
  div.append(set);
  div.append(span);
  div.append(xBtn);
  pushUpResult.append(div);
};

const handlePushUpCount = (e) => {
  pushUpCount++;
  e.preventDefault();
  const pushUp = pushUpInput.value;
  if (!pushUp) {
    return alert("값을 입력해주세요");
  }
  pushUpInput.value = "";

  const dataObj = {
    pushUp,
    id: Date.now().toString(),
    set: pushUpCount,
  };
  savePushUp(dataObj);
  paintPushUp(dataObj);
};

if (localStorage.getItem("pushup") !== null) {
  pushupArr = JSON.parse(localStorage.getItem("pushup"));
  pushupArr.forEach(paintPushUp);
}

// --------squat---------------------//

let squatArr = JSON.parse(localStorage.getItem("squat")) || [];

const saveSquat = (data) => {
  squatArr.push(data);
  localStorage.setItem("squat", JSON.stringify(squatArr));
};

const squatDelete = (e) => {
  e.preventDefault();
  const div = e.target.parentElement;
  div.remove();

  const removeSquat = squatArr.filter((squat) => {
    return squat.id !== div.id;
  });

  squatArr = removeSquat;
  localStorage.setItem("squat", JSON.stringify(squatArr));
};

const paintSquat = (data) => {
  const div = document.createElement("div");
  div.id = data.id;
  div.classList.add("squat-div");
  const set = document.createElement("h3");
  set.innerText = `${data.set}세트:   `;
  const span = document.createElement("span");
  span.innerText = `  ${data.squat}회`;
  const xBtn = document.createElement("button");
  xBtn.innerText = "❌";
  xBtn.addEventListener("click", squatDelete);
  div.append(set);
  div.append(span);
  div.append(xBtn);
  squatResult.append(div);
};

const handleSquatCount = (e) => {
  squatCount++;
  e.preventDefault();
  const squat = squatInput.value;
  if (!squat) {
    return alert("값을 입력해주세요");
  }
  squatInput.value = "";

  const dataObj = {
    squat,
    id: Date.now().toString(),
    set: squatCount,
  };
  saveSquat(dataObj);
  paintSquat(dataObj);
};

if (localStorage.getItem("squat") !== null) {
  squatArr = JSON.parse(localStorage.getItem("squat"));
  squatArr.forEach(paintSquat);
}

const handleFinish = (e) => {
  e.preventDefault();

  const savedSquat = JSON.parse(localStorage.getItem("squat"));
  const savedPullUp = JSON.parse(localStorage.getItem("pullup"));
  const savedPushUp = JSON.parse(localStorage.getItem("pushup"));

  let totalSquat = 0;

  if (savedSquat === null || savedPullUp === null || savedPushUp === null) {
    return alert("모든종목 한세트라도 하고 끝내라");
  }

  for (let i = 0; i < savedSquat.length; i++) {
    totalSquat += parseInt(savedSquat[i].squat);
  }

  let totalPushUp = 0;
  for (let i = 0; i < savedPushUp.length; i++) {
    totalPushUp += parseInt(savedPushUp[i].pushUp);
  }

  let totalPullUp = 0;
  for (let i = 0; i < savedPullUp.length; i++) {
    totalPullUp += parseInt(savedPullUp[i].pullUp);
  }

  clockStop();

  todayWorkout.classList.remove("hidden");
  const timeh1 = document.createElement("h1");
  timeh1.innerText = `오늘 운동시간은 ${appendMinutes.innerText}분 ${appendSeconds.innerText}초 입니다. `;
  const pullUph1 = document.createElement("h1");
  pullUph1.innerText = `오늘 총 턱걸이 횟수는 ${totalPullUp}회입니다.`;
  const pushUph1 = document.createElement("h1");
  pushUph1.innerText = `오늘 총 팔굽혀펴기 횟숫는 ${totalPushUp}회입니다.`;
  const squath1 = document.createElement("h1");
  squath1.innerText = `오늘 총 스쿼트 횟수는 ${totalSquat}회입니다.`;

  todayTime.innerHTML = "";
  todayPullUp.innerHTML = "";
  todayPushUp.innerHTML = "";
  todaySquat.innerHTML = "";

  todayTime.appendChild(timeh1);
  todayPullUp.appendChild(pullUph1);
  todayPushUp.appendChild(pushUph1);
  todaySquat.appendChild(squath1);
};

toggleBtn.addEventListener("click", () => {});

const init = () => {
  getDay();
  pullUpForm.addEventListener("submit", handleCount);
  pushUpForm.addEventListener("submit", handlePushUpCount);
  squatForm.addEventListener("submit", handleSquatCount);
  finishWorkOut.addEventListener("click", handleFinish);
  closeBtn.addEventListener("click", () => {
    todayWorkout.classList.add("hidden");
  });
  logOut.addEventListener("click", () => {
    localStorage.removeItem("myInfo");
    localStorage.removeItem("squat");
    localStorage.removeItem("pushup");
    localStorage.removeItem("pullup");
    location.reload();
    window.location.href = "index.html";
  });
  chartBtn.addEventListener("click", () => {
    window.location.href = "chart.html";
  });
};
init();

// ------------시계-----------------//

const clockStart = () => {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
  workoutWrapper.classList.remove("hidden");
};

startBtn.addEventListener("click", clockStart);

const clockStop = () => {
  clearInterval(intervalId);
};

stopBtn.addEventListener("click", clockStop);

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
