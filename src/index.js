const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

add.addEventListener("click", () => {
  count = count + 1;
  updateText();
})

minus.addEventListener("click", () => {
  count = count - 1;
  updateText();
})