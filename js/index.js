const myname = document.querySelector(".my-name");
const weight = document.querySelector(".weight");
const infoForm = document.querySelector("#info-form");
const resultInfo = document.querySelector("#result-info");
const slideContainer = document.querySelector(".slide-container");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");

$(".slide-1").on("click", () => {
  $(".slide-container").css("transform", "translateX(0vw)");
});
$(".slide-2").on("click", () => {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", () => {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

const getDay = () => {
  let today = new Date();
  let month = today.getUTCMonth() + 1;
  let day = today.getDate();
  let year = today.getUTCFullYear();
  return { month, day };
};

const handleInfo = (e) => {
  e.preventDefault();
  const myName = myname.value;
  const myWeight = weight.value;
  const { month: createMonth, day: createDay } = getDay();
  const data = {
    myName,
    myWeight,
    createMonth,
    createDay,
    successMonth: null,
    successDay: null,
  };
  infoForm.classList.add("hidden");
  localStorage.setItem("myInfo", JSON.stringify(data));
  paintInfo({ myName, myWeight });
  window.location.href = "workout.html";
};

const paintInfo = ({ myName, myWeight }) => {
  resultInfo.innerHTML = `안녕하세요 ${myName}님 현재 몸무게는 ${myWeight}KG 입니다.`;
  resultInfo.classList.remove("hidden");
};

const savedInfo = JSON.parse(localStorage.getItem("myInfo"));

if (savedInfo === null) {
  infoForm.classList.remove("hidden");
  infoForm.addEventListener("submit", handleInfo);
} else {
  paintInfo(savedInfo);
}
