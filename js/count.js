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
const closeBtn = document.querySelector("#close-btn");
let pullupArr = JSON.parse(localStorage.getItem("pullup")) || [];
let pullUpCount = 0;
let pushUpCount = 0;
let squatCount = 0;

// ----pull-up------------------//

const savePullUp = (data) => {
  pullupArr.push(data);
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
  div.append(set);
  div.append(span);
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

const paintPushUp = (data) => {
  const div = document.createElement("div");
  div.id = data.id;
  div.classList.add("pushup-div");
  const set = document.createElement("h3");
  set.innerText = `${data.set}세트:   `;
  const span = document.createElement("span");
  span.innerText = `  ${data.pushUp}회`;
  div.append(set);
  div.append(span);
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

const paintSquat = (data) => {
  const div = document.createElement("div");
  div.id = data.id;
  div.classList.add("squat-div");
  const set = document.createElement("h3");
  set.innerText = `${data.set}세트:   `;
  const span = document.createElement("span");
  span.innerText = `  ${data.squat}회`;
  div.append(set);
  div.append(span);
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

  todayWorkout.classList.remove("hidden");

  const pullUph1 = document.createElement("h1");
  pullUph1.innerText = `총 턱걸이 횟수는 ${totalPullUp}회입니다.`;
  const pushUph1 = document.createElement("h1");
  pushUph1.innerText = `총 팔굽혀펴기 횟숫는 ${totalPushUp}회입니다.`;
  const squath1 = document.createElement("h1");
  squath1.innerText = `총 스쿼트 횟수는 ${totalSquat}회입니다.`;

  todayPullUp.innerHTML = "";
  todayPushUp.innerHTML = "";
  todaySquat.innerHTML = "";

  todayPullUp.appendChild(pullUph1);
  todayPushUp.appendChild(pushUph1);
  todaySquat.appendChild(squath1);
};

const init = () => {
  pullUpForm.addEventListener("submit", handleCount);
  pushUpForm.addEventListener("submit", handlePushUpCount);
  squatForm.addEventListener("submit", handleSquatCount);
  finishWorkOut.addEventListener("click", handleFinish);
  closeBtn.addEventListener("click", () => {
    todayWorkout.classList.add("hidden");
  });
};
init();
