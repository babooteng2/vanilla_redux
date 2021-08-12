import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const span = document.querySelector("#root span");
span.innerText = 0;
// reducer라고 불리는 곳에서는 데이터의 변화를 다루고
const reduceModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "PLUS") {
    count++;
  } else if (action.type === "MINUS") {
    count--;
  }
  return count;
};

// subscribe라고 불리는 곳에서는 데이터변화가 감지되면 화면갱신을 연결한다.
const countStore = createStore(reduceModifier);
const onChange = () => (span.innerText = countStore.getState());
countStore.subscribe(onChange);
plus.addEventListener("click", () => countStore.dispatch({ type: "PLUS" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
