## 🔧 part1-12 input 1 : 사용자가 입력한 글 다루기

### 🔹 1. input

```jsx
//값 가져오기
onChange={(e) => {e.target.value}}
```

### 🔹 2. 이벤트 버블링

- 이벤트가 상위요소로 퍼지는 현상
- `e.stopPropagation` 사용하면 안퍼짐

```jsx
onClick={(e) => {e.stopPropagation(); ~기능}}
```

### 🔹 3. 변경 시차

- state변경 시차가 있음, 그래서 변경 후 다음에 바로 콘솔찍으면 변경안된게 출력됨
