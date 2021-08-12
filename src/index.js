import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const span = document.querySelector("#root span");
// type명을 contstance 로 만들어주면 자바스크립트가 문제발생시 에러를 명시해주지만
// string으로 사용한다면 감지못함 - ex) type is not defined
const PLUS = "plus";
const MINUS = "minus";
span.innerText = 0;
// reducer라고 불리는 곳에서는 데이터의 변화를 다루고
/* 1. creteStore()를 열고 리듀서를 인자로 넣는다.
    2. reducer에는 값과 action을 넣는다.
    3. action은 store.dispatch({ type: [(str)타입명]})으로 넣는다.
      여기서 actiondms 꼭 object 여야하며 type을 필수로 넣는다.
    4. reducer에 들어온 action type은 주로 switch로 분기한다.
*/
// reducer가 리턴하는 모든건 새로운 데이터 ( store.getSteate() );
const reduceModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};

// subscribe라고 불리는 곳에서는 데이터변화가 감지되면 화면갱신을 연결한다.
//
const countStore = createStore(reduceModifier);
const onChange = () => (span.innerText = countStore.getState());
countStore.subscribe(onChange);
plus.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
