import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      {글제목.map(function (item, index) {
        return (
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {item}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[index] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[index]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      ></input>

      {modal ? <Modal 글제목={글제목}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
