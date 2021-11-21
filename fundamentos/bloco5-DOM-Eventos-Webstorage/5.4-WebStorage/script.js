let btn = document.querySelector("button");
var p = document.querySelector("p");
var body = document.querySelector("body");
let count = 0;
//console.log(btn)
btn.addEventListener("click", changeColor);
function changeColor() {
  if (count % 2 === 0) {
    body.style.color = "white";
    body.style.backgroundColor = "black";
    count += 1;
    localStorage.setItem("backgroundColor", body.style.backgroundColor);
    localStorage.setItem("fontColor", body.style.color);
  } else {
    body.style.color = "black";
    body.style.backgroundColor = "White";
    count += 1;
    localStorage.setItem("backgroundColor", body.style.backgroundColor);
    localStorage.setItem("fontColor", body.style.color);
  }
}

let fontSize = document.querySelector("#fontSize");
fontSize.addEventListener("change", changeFontSize);
function changeFontSize() {
  p.style.fontSize = fontSize.value + "px";
  localStorage.setItem("fontSize", p.style.fontSize);
}

let fontFamily = document.querySelector("#fontFamily");
fontFamily.addEventListener("click", changeFontFamily);
function changeFontFamily() {
  p.style.fontFamily = fontFamily.value;
  localStorage.setItem("fontFamily", p.style.fontFamily);
}

window.onload = function () {
    console.log('fontFamily: ',JSON.stringify(localStorage.fontFamily))
    console.log('fontSize: ',JSON.stringify(localStorage.fontSize));
    console.log('bcgColor: ',JSON.stringify(localStorage.backgroundColor));
    console.log('fontColor: ',JSON.stringify(localStorage.fontColor));
    p.style.fontFamily = localStorage.fontFamily;
    p.style.fontSize = localStorage.fontSize;
    body.style.backgroundColor = localStorage.backgroundColor;
    body.style.color = localStorage.fontColor;
};
