const myname = document.querySelector(".my-name");
const weight = document.querySelector(".weight");
const infoForm = document.querySelector("#info-form");
const resultInfo = document.querySelector("#result-info");

const handleInfo = (e) => {
  e.preventDefault();
  const myName = myname.value;
  const myWeight = weight.value;
  const data = {
    myName,
    myWeight,
  };
  infoForm.classList.add("hidden");
  localStorage.setItem("myInfo", JSON.stringify(data));
  paintInfo({ myName, myWeight });
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
