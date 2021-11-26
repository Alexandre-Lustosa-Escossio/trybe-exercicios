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
    child.style.fontSize = '20px'
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

//Exercicio 6
let li = document.getElementsByTagName("li")
for (let i of li){
  i.addEventListener('mouseover',applyZoom)
  i.addEventListener('mouseout',zoomOut)
}
function applyZoom(event){
  let mouseOverElement = event.target
  let fontSize = parseInt(mouseOverElement.style.fontSize) 
  fontSize += 20
  mouseOverElement.style.fontSize = fontSize +'px'
}

function zoomOut(event){
  let mouseOverElement = event.target
  let fontSize = parseInt(mouseOverElement.style.fontSize) 
  fontSize -= 20
  mouseOverElement.style.fontSize = fontSize +'px'
}

//Exercicio 7
let addBtn = document.getElementById('btn-add')
addBtn.addEventListener('click',addToTaskList)
function addToTaskList(){
  let input = document.getElementById('task-input')
  let taskList = document.querySelector('.my-tasks')
  //Exercicio 8
  var div = document.createElement('div')
  let colors = [Math.random()*100,Math.random()*100,Math.random()*100]
  console.log(JSON.stringify(colors))
  div.style.height = '10px'
  div.style.width = '10px'
  div.style.backgroundColor = 'rgb(' + colors +')'
  console.log(div.style.backgroundColor);
  div.style.display = 'inline-block'
  div.style.marginBottom = '10px'
  div.style.marginLeft = '40%'
  div.style.marginRight = '1%'
  div.className = 'task'
  taskList.appendChild(div)
  let span = document.createElement('span')
  span.innerText = input.value
  span.style.display = 'inline-block'
  span.style.marginRight = '40%'
  taskList.appendChild(span)

}
//Exercicio 9
div.addEventListener('click',selectElement)
function selectElement(){
  div.className = 'task selected'
  div.style.borderRadius = '5px'
};


