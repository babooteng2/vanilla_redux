import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

/* Action Creator */

/* End of Action Creator */

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(addToDo.type);
      const obj = { text: action.payload, id: Date.now() };
      console.log(action);
      return [obj, ...state];
    case deleteToDo.type:
      const arr = state.filter((toDo) => toDo.id !== action.payload);
      return arr;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
