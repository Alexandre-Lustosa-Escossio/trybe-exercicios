function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

//Exercicio 1
function createDaysOfTheMonth(array) {
  let ulMonthDays = document.querySelector("#days");
  for (let day of array) {
    let child = document.createElement("li");
    child.innerHTML = day;
    child.className = "day";
    if (day === 24 || day === 25 || day === 31) {
      child.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      child.classList.add("friday");
    }
    ulMonthDays.appendChild(child);
  }
}

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
createDaysOfTheMonth(dezDaysList);

//Exercicio 2
function addHolidayBtn(str) {
  let btn = document.createElement("btn");
  btn.innerText = str;
  btn.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(btn);
}

addHolidayBtn("Feriados");

//Exercicio 3
let btn = document.querySelector("#btn-holiday");
btn.addEventListener("click", onClickHoliday);
function onClickHoliday() {
  let holidays = document.getElementsByClassName("holiday");
  for (let i = 0; i < holidays.length; i += 1) {
    holidays[i].style.backgroundColor = "grey";
    holidays[i].style.color = "white";
  }
}

//Exercicio 4
function fridayBtn(str) {
  let btn = document.createElement("button");
  btn.innerText = str;
  btn.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(btn);
}
fridayBtn("Sexta-feira");

//Exercucui 5
btn = document.querySelector("#btn-friday");
changesCount = 0;
btn.addEventListener("click", changeDayText);
function changeDayText() {
  let fridayDays = document.querySelectorAll(".friday");
  if (changesCount % 2 === 0) {
    for (let i = 0; i < fridayDays.length; i += 1) {
      fridayDays[i].innerText = "Texto Modificado";
    }
  } else {
    let array = [4, 11, 18, 25];
    for (let i = 0; i < fridayDays.length; i += 1) {
      fridayDays[i].innerText = array[i];
    }
  }
  changesCount += 1;
}
