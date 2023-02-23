// console.log("hello");
let btnRandom = document.getElementById("btnRandom");
let btnRed = document.getElementById("btnRed");
let btnBlue = document.getElementById("btnBlue");
let btnGreen = document.getElementById("btnGreen");

function BtnRandomHandler() {
   let colors = ["crimson", "darkblue", "green"];
   let number = Math.floor(Math.random() * colors.length);
   console.log(colors[number]);
   let Body = document.querySelector("body");
   Body.style.backgroundColor = colors[number];
}
function BtnRedHandler() {
   let Body = document.querySelector("body");
   Body.style.backgroundColor = "crimson";
}
function BtnBlueHandler() {
   let Body = document.querySelector("body");
   Body.style.backgroundColor = "blue";
}
function BtnGreenHandler() {
   let Body = document.querySelector("body");
   Body.style.backgroundColor = "green";
}
btnRandom.addEventListener("click", BtnRandomHandler);
btnRed.addEventListener("click", BtnRedHandler);
btnBlue.addEventListener("click", BtnBlueHandler);
btnGreen.addEventListener("click", BtnGreenHandler);
