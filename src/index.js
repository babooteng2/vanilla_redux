import { createStore } from "redux";
//yarn add redux
// create .env.local file and add in REACT_EDITOR=code
let count = 0;

const reduceModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "PLUS") {
    count++;
  } else if (action.type === "MINUS") {
    count--;
  }
  return count;
};
const countStore = createStore(reduceModifier);

/*
  createStore는 reducer를 인자로 받고 reducer는 유일하게 state를 변경할 수 있는 유일한 함수
  state를 변경할 땐 action을 통해 가능
  */

countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
