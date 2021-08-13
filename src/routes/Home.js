import React, { useState } from "react";

function Home() {
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
      <ul></ul>
    </>
  );
}

export default Home;

/* 
    1. yarn add react-redux react-router-dom
    2. routes폴더 Home export default () => "Home";
       routes폴더 Detail export default () => "Detail";
       한 줄로 라우터가 잘 동작하는지 확인용
    3. components 폴더 App.js 작성 (라우터 구성)
    4. Hook 작성    
*/
