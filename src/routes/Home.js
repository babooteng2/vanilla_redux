import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

// https://react-redux.js.org/using-react-redux/connect-mapstate
/* 
  1. state - redux store에서 온 state
  2. ownProps - router에서 온 prop 
    - 이 ownProps는 export default connect(getCurrentStaet)(Home);
      이 라인에서 Home에 intercept하여 prop을 추가시켜 줌
    - 결론: react router에서 준 props 말고도 ( but also ) ownProps를 추가시켜 줌
*/
/* function mapStateToProps(state, ownProps) {
  return { state, sexy: true };  
} */
function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
