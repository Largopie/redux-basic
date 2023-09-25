const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

add.addEventListener("click", () => {
  number.innerText = ++count;
})

minus.addEventListener("click", () => {
  number.innerText = --count;
})