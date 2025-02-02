## 🔧 part1-5 버튼에 기능개발을 해보자 & 리액트 state변경하는 법

### 🔹 Warning 관리

- 변수를 사용하지 않음 등의 자잘한 오류가 생기는 경우 나타남

#### warning 메시지를 없애려면

```jsx
/* eslint-disable */
// 파일 최상단에 작성
```

### 🔹 onClick 이벤트

#### 클릭 이벤트

```jsx
// 함수 호출
onClick={함수명}

//기능 실행
onClick={() => {실행할 코드}}
```

### 🔹 state 값 변경

```jsx
let [a, b] = useState(1);
b(2); // state 값 변경 방법
```
