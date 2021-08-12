import { createStore } from "redux";

const toDoList = document.getElementById("toDoList");
const inputTodo = toDoList.querySelector(".inputTodo");
const submitBtn = toDoList.querySelector(".submitBtn");
const ul = toDoList.querySelector(".list");

/* Vanilla javascript
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
}; */

/* state는 single source of truth이며, read-only이다
store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.
state를 mutate하지 말아야한다.
mutating state하는 대신에 new state objects를 리턴해야 한다. */

const hd_submit = (e) => {
  e.preventDefault();
  console.log(`value: ${inputTodo.value}`);
  if (inputTodo.value !== "") {
    const toDo = inputTodo.value;
    inputTodo.value = "";
    //paint(toDo);
    store.dispatch({ type: ADD, text: toDo });
  }
};
const ADD = "add";
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return { text: action.text };
    default:
      return state;
  }
};
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
  const addList = document.createElement("li");
  const { text } = store.getState();
  addList.innerText = text;
  ul.appendChild(addList);
});

submitBtn.addEventListener("click", hd_submit);
