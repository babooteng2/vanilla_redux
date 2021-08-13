import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

/* Action Creator */
export const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
/* End of Action Creator */

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const obj = { text: action.text, id: action.id };
      return [obj, ...state];
    case DELETE:
      const arr = state.filter((toDo) => toDo.id !== action.id);
      return arr;
    default:
      return state;
  }
};

const store = createStore(reducer);

/* 
    index.js의 Provider (react-redux에서 구독)
    store.subscribe();
 */

export default store;
