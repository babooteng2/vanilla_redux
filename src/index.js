import { createStore } from "redux";

const toDoList = document.getElementById("toDoList");
const inputTodo = toDoList.querySelector(".inputTodo");
const submitBtn = toDoList.querySelector(".submitBtn");
const ul = toDoList.querySelector(".list");

const ADD = "add";
const DELETE = "delete";

/* actions - onloy for dispatch (usally position onto reducer)
  최대한 작은 단위로 쪼갬
*/
const addToDo = (text) => {
  const id = Date.now();
  return {
    type: ADD,
    text,
    id,
  };
};

const deleteToDo = (id) => {
  //const id = e.target.parentNode.id;
  //store.dispatch({ type: DELETE, id });
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return [{ id: action.id }, ...state];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const { text, id } = toDo;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.addEventListener("click", dispatchDeleteToDo);
    btn.innerText = "x";
    li.id = id;
    li.innerText = text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const dispactchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

store.subscribe(() => {
  /*   console.log(store.getState());
  const addList = document.createElement("li");
  const { text } = store.getState();
  addList.innerText = text;
  ul.appendChild(addList); */
  paintToDos();
});

const hd_submit = (e) => {
  e.preventDefault();
  console.log(`value: ${inputTodo.value}`);
  if (inputTodo.value !== "") {
    const toDo = inputTodo.value;
    inputTodo.value = "";
    //paint(toDo);
    //store.dispatch({ type: ADD, text: toDo });
    dispactchAddToDo(toDo);
  }
};

submitBtn.addEventListener("click", hd_submit);
