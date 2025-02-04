## 🧩 part1-7 Component : 많은 div들을 한 단어로 줄이고 싶으면

### 🔹 1. 컴포넌트란?

- 긴 HTML을 한 단어로 깔끔하게 치환해서 넣을 수 있는 문법

### 🔹 2. 컴포넌트 만드는법

- function을 만든다
- return()안에 html을 담는다
- <함수명></함수명> or <함수명/>을 쓴다

### 🔹 3. 컴포넌트 언제 쓰는지

- 반복적인 html 축약
- 큰 페이지들
- 자주 변경되는 것들

```jsx
//모달
<Modal></Modal>;

//모달 컴포넌트
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
```

### 🔹 4. 컴포넌트 단점

- state를 가져다 쓸 때 문제가 생김

### 🔹 5. 그 외

- fragment `<></>` 와같이 의미없는 태그를 뜻함

```jsx
function APP() {
  return (
    <>
      <div>1</div>
      <div>2</div>
    </>
  );
}
```
