import { useState } from "react";
import "./App.css";

function App() {
  let [post, setPost] = useState("남자 코트 추천");
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
