const toDoList = document.getElementById("toDoList");
const inputTodo = toDoList.querySelector(".inputTodo");
const submitBtn = toDoList.querySelector(".submitBtn");
const ul = toDoList.querySelector(".list");

// Vanilla javascript
const paint = (toDo) => {
  const addList = document.createElement("li");
  addList.innerText = toDo;
  ul.appendChild(addList);
};
const hd_submit = (e) => {
  e.preventDefault();
  console.log(`value: ${inputTodo.value}`);
  if (inputTodo.value !== "") {
    const toDo = inputTodo.value;
    inputTodo.value = "";
    paint(toDo);
  }
};

submitBtn.addEventListener("click", hd_submit);
