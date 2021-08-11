const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const CLICK = "click";

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = (e) => {
  count++;
  updateText();
};

const handleMinus = (e) => {
  count--;
  updateText();
};

plus.addEventListener(CLICK, handleAdd);
minus.addEventListener(CLICK, handleMinus);
