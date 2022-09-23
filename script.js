let billElem = document.getElementById("bill");
let tipElem = document.getElementById("tipEl");
let totalElem = document.getElementById("totalEl");
let resetElem = document.getElementById("reset");

const percent5 = document.getElementById("percent5");
percent5.addEventListener("click", () => {
  addPercent(5);
});
const percent10 = document.getElementById("percent10");
percent10.addEventListener("click", () => {
  addPercent(10);
});
const percent15 = document.getElementById("percent15");
percent15.addEventListener("click", () => {
  addPercent(15);
});
const percent25 = document.getElementById("percent25");
percent25.addEventListener("click", () => {
  addPercent(25);
});
const percent50 = document.getElementById("percent50");
percent50.addEventListener("click", () => {
  addPercent(50);
});
const percent100 = document.getElementById("percent100");
percent100.addEventListener("click", () => {
  addPercent(100);
});
let tip = 0;
let total = 0;
function addPercent(percent) {
  const bill = parseInt(billElem.value);
  const people = parseInt(peopleElem.value);
  tip = (bill * (percent / 100)) / people;
  total = (bill + tip) / people;
  UpdateUI();
}
function UpdateUI() {
  tipElem.innerText = `$${tip}`;
  totalElem.innerText = `$${total}`;
  console.log();
}
function reset() {
  billElem.value = "";
  tipElem.innerText = `$0.00`;
  totalElem.innerText = `$0.00`;
  peopleElem.value = "";
  customElem.value = "";
}
