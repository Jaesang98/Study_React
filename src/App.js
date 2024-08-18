/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}> 정렬버튼 </button>

      {
        글제목.map((item, idx) => (
          <div className="list" key={idx}>

            <h4 onClick={() => { setModal(!modal); setTitle(idx) }}>{item}
              <span onClick={() => {
                let copy = [...따봉];
                copy[idx]++;
                따봉변경(copy)
              }}>👍</span> {따봉[idx]}
            </h4>

            <p>2월 17일 발행</p>

            <button onClick={()=> {
              let copy = [...글제목];
              copy.splice(idx,1);
              글제목변경(copy);
            }}>글삭제</button>

            {/* <button onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자코트 추천";
              글제목변경(copy);
            }}>글제목 변경</button> */}

          </div>
        ))
      }
      
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />

      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>
        글발행</button>

      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}></Modal> : ""
      }
    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = "여자코트 추천";
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}
export default App;
