import React from "react";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";

function Detail({ toDo }) {
  //const id = useParams();
  //console.log(id);
  //console.log(props);
  /* 
    자바스크립트에서 지원하는 Optional Chaining 기능
    ?를 추가하면 새로고침할 때 toDo가 날아가는데
    방지해서 에러는 나오지 않는 대신 아무것도 안나옴
  */
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created ad: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  //const { id } = ownProps.match.params;
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
